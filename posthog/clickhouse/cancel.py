from statshog.defaults.django import statsd

from posthog.api.services.query import logger
from posthog.clickhouse.client import sync_execute
from posthog.clickhouse.client.connection import default_client
from posthog.settings import CLICKHOUSE_CLUSTER


def cancel_query_on_cluster(team_id: int, client_query_id: str) -> None:
    try:
        [(initiator_host,)] = sync_execute(
            f"""
            SELECT hostname()
            FROM clusterAllReplicas(posthog, system.query_log)
            WHERE query_id LIKE %(client_query_id)s
            GROUP BY hostname()
            HAVING (count() = 1) AND (event_time > (now() - toIntervalDay(1)))
            SETTINGS max_execution_time = 5
            """,
            {"client_query_id": f"{team_id}_{client_query_id}%"},
        )
    except Exception as e:
        logger.info("Failed to find initiator host for query %s: %s", client_query_id, e)

    if initiator_host:
        logger.debug("Found initiator host for query %s, cancelling query on host", initiator_host, client_query_id)
        with default_client(host=initiator_host) as client:
            result = client.execute(
                f"KILL QUERY WHERE query_id LIKE %(client_query_id)s",
                {"client_query_id": f"{team_id}_{client_query_id}%"},
            )
    else:
        logger.debug("No initiator host found for query %s, cancelling query on cluster", client_query_id)
        result = sync_execute(
            f"KILL QUERY ON CLUSTER '{CLICKHOUSE_CLUSTER}' WHERE query_id LIKE %(client_query_id)s",
            {"client_query_id": f"{team_id}_{client_query_id}%"},
        )

    logger.info("Cancelled query %s for team %s, result: %s", client_query_id, team_id, result)
    statsd.incr("clickhouse.query.cancellation_requested", tags={"team_id": team_id})
