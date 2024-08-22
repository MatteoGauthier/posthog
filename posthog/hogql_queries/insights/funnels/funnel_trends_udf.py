from typing import cast

from posthog.hogql import ast
from posthog.hogql.parser import parse_select
from posthog.hogql_queries.insights.funnels import FunnelTrends
from posthog.hogql_queries.insights.utils.utils import get_start_of_interval_hogql_str
from posthog.schema import BreakdownType, BreakdownAttributionType
from posthog.utils import DATERANGE_MAP

TIMESTAMP_FORMAT = "%Y-%m-%d %H:%M:%S"
HUMAN_READABLE_TIMESTAMP_FORMAT = "%-d-%b-%Y"


class FunnelTrendsUDF(FunnelTrends):
    def get_step_counts_query(self):
        max_steps = self.context.max_steps
        return self._get_step_counts_query(
            outer_select=[
                *self._get_matching_event_arrays(max_steps),
            ],
            inner_select=[
                *self._get_matching_events(max_steps),
            ],
        )

    def conversion_window_limit(self) -> int:
        return int(
            self.context.funnelWindowInterval * DATERANGE_MAP[self.context.funnelWindowIntervalUnit].total_seconds()
        )

    def get_query(self) -> ast.SelectQuery:
        if self.context.funnelsFilter.funnelOrderType == "strict":
            inner_event_query = self._get_inner_event_query_for_udf(
                entity_name="events", skip_step_filter=True, skip_entity_filter=True
            )
        else:
            inner_event_query = self._get_inner_event_query_for_udf(entity_name="events")

        default_breakdown_selector = "[]" if self._query_has_array_breakdown() else "''"

        # stores the steps as an array of integers from 1 to max_steps
        # so if the event could be step_0, step_1 or step_4, it looks like [1,2,0,0,5]

        # Each event is going to be a set of steps or it's going to be a set of exclusions. It can't be both.
        steps = ",".join([f"{i + 1} * step_{i}" for i in range(self.context.max_steps)])

        # this will error if they put in a bad exclusion
        exclusions = ""
        if getattr(self.context.funnelsFilter, "exclusions", None):
            exclusions = "".join([f",-{i + 1} * exclusion_{i}" for i in range(1, self.context.max_steps)])

        # Todo: Make this work for breakdowns
        if self.context.breakdownType == BreakdownType.COHORT:
            fn = "aggregate_funnel_cohort"
            breakdown_prop = ", prop"
        elif self._query_has_array_breakdown():
            fn = "aggregate_funnel_array_trends"
            breakdown_prop = ""
        else:
            fn = "aggregate_funnel_trends"
            breakdown_prop = ""

        prop_selector = "prop" if self.context.breakdown else default_breakdown_selector
        prop_vals = "groupUniqArray(prop)" if self.context.breakdown else f"[{default_breakdown_selector}]"

        breakdown_attribution_string = f"{self.context.breakdownAttributionType}{f'_{self.context.funnelsFilter.breakdownAttributionValue}' if self.context.breakdownAttributionType == BreakdownAttributionType.STEP else ''}"

        # debugging for development
        '''
        inner_select = parse_select(
            f"""
                    SELECT
                        {fn}(
                            {self.context.max_steps},
                            {self.conversion_window_limit()},
                            '{breakdown_attribution_string}',
                            '{self.context.funnelsFilter.funnelOrderType}',
                            {prop_vals},
                            arraySort(t -> t.1, groupArray(tuple(toFloat(timestamp), toInt({get_start_of_interval_hogql_str(self.context.interval.value, team=self.context.team, source='timestamp')}), {prop_selector}, arrayFilter((x) -> x != 0, [{steps}{exclusions}]))))
                        )
                    FROM {{inner_event_query}}
                    GROUP BY aggregation_target{breakdown_prop}
                """,
            {"inner_event_query": inner_event_query},
        )
        return inner_select
        '''

        inner_select = parse_select(
            f"""
                            SELECT
                                arrayJoin({fn}(
                                    {self.context.max_steps},
                                    {self.conversion_window_limit()},
                                    '{breakdown_attribution_string}',
                                    '{self.context.funnelsFilter.funnelOrderType}',
                                    {prop_vals},
                                    arraySort(t -> t.1, groupArray(tuple(toFloat(timestamp), {get_start_of_interval_hogql_str(self.context.interval.value, team=self.context.team, source='timestamp')}, {prop_selector}, arrayFilter((x) -> x != 0, [{steps}{exclusions}]))))
                                )) as af_tuple,
                                af_tuple.1 as interval_start,
                                af_tuple.2 as success_bool
                            FROM {{inner_event_query}}
                            GROUP BY aggregation_target{breakdown_prop}
                        """,
            {"inner_event_query": inner_event_query},
        )

        s = parse_select(
            f"""
            SELECT
                interval_start as entrance_period_start,
                count() as reached_from_step_count,
                sum(success_bool) as reached_to_step_count,
                reached_to_step_count / reached_from_step_count as conversion_rate
            FROM
                {{inner_select}}
            GROUP BY interval_start
            ORDER BY interval_start
        """,
            {"inner_select": inner_select},
        )

        return cast(ast.SelectQuery, s)
