// Generated by kea-typegen on Thu, 09 Jun 2022 19:50:20 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { DashboardsTab } from './dashboardsLogic'
import type { DashboardType } from '../../types'

export interface dashboardsLogicType extends Logic {
    actionCreators: {
        setSearchTerm: (searchTerm: string) => {
            type: 'set search term (scenes.dashboard.dashboardsLogic)'
            payload: {
                searchTerm: string
            }
        }
        setCurrentTab: (tab: DashboardsTab) => {
            type: 'set current tab (scenes.dashboard.dashboardsLogic)'
            payload: {
                tab: DashboardsTab
            }
        }
    }
    actionKeys: {
        'set search term (scenes.dashboard.dashboardsLogic)': 'setSearchTerm'
        'set current tab (scenes.dashboard.dashboardsLogic)': 'setCurrentTab'
    }
    actionTypes: {
        setSearchTerm: 'set search term (scenes.dashboard.dashboardsLogic)'
        setCurrentTab: 'set current tab (scenes.dashboard.dashboardsLogic)'
    }
    actions: {
        setSearchTerm: (searchTerm: string) => void
        setCurrentTab: (tab: DashboardsTab) => void
    }
    defaults: {
        searchTerm: any
        currentTab: DashboardsTab
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'dashboard', 'dashboardsLogic']
    pathString: 'scenes.dashboard.dashboardsLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        searchTerm: any
        currentTab: DashboardsTab
    }
    reducers: {
        searchTerm: (state: any, action: any, fullState: any) => any
        currentTab: (state: DashboardsTab, action: any, fullState: any) => DashboardsTab
    }
    selector: (state: any) => {
        searchTerm: any
        currentTab: DashboardsTab
    }
    selectors: {
        searchTerm: (state: any, props?: any) => any
        currentTab: (state: any, props?: any) => DashboardsTab
        dashboards: (state: any, props?: any) => DashboardType[]
        dashboardTags: (state: any, props?: any) => string[]
    }
    sharedListeners: {}
    values: {
        searchTerm: any
        currentTab: DashboardsTab
        dashboards: DashboardType[]
        dashboardTags: string[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        dashboards: (
            nameSortedDashboards: DashboardType[],
            searchTerm: any,
            currentTab: DashboardsTab
        ) => DashboardType[]
        dashboardTags: (nameSortedDashboards: DashboardType[]) => string[]
    }
}
