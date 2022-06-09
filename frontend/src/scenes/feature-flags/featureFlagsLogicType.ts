// Generated by kea-typegen on Thu, 09 Jun 2022 19:50:09 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { Breadcrumb, FeatureFlagType } from '../../types'
import type { FeatureFlagsTabs } from './featureFlagsLogic'

export interface featureFlagsLogicType extends Logic {
    actionCreators: {
        updateFlag: (flag: FeatureFlagType) => {
            type: 'update flag (scenes.feature-flags.featureFlagsLogic)'
            payload: {
                flag: FeatureFlagType
            }
        }
        deleteFlag: (id: number) => {
            type: 'delete flag (scenes.feature-flags.featureFlagsLogic)'
            payload: {
                id: number
            }
        }
        setSearchTerm: (searchTerm: string) => {
            type: 'set search term (scenes.feature-flags.featureFlagsLogic)'
            payload: {
                searchTerm: string
            }
        }
        setActiveTab: (tabKey: FeatureFlagsTabs) => {
            type: 'set active tab (scenes.feature-flags.featureFlagsLogic)'
            payload: {
                tabKey: FeatureFlagsTabs
            }
        }
        loadFeatureFlags: () => {
            type: 'load feature flags (scenes.feature-flags.featureFlagsLogic)'
            payload: any
        }
        loadFeatureFlagsSuccess: (
            featureFlags: FeatureFlagType[],
            payload?: any
        ) => {
            type: 'load feature flags success (scenes.feature-flags.featureFlagsLogic)'
            payload: {
                featureFlags: FeatureFlagType[]
                payload?: any
            }
        }
        loadFeatureFlagsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load feature flags failure (scenes.feature-flags.featureFlagsLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        updateFeatureFlag: ({ id, payload }: { id: number; payload: Partial<FeatureFlagType> }) => {
            type: 'update feature flag (scenes.feature-flags.featureFlagsLogic)'
            payload: {
                id: number
                payload: Partial<FeatureFlagType>
            }
        }
        updateFeatureFlagSuccess: (
            featureFlags: any[],
            payload?: {
                id: number
                payload: Partial<FeatureFlagType>
            }
        ) => {
            type: 'update feature flag success (scenes.feature-flags.featureFlagsLogic)'
            payload: {
                featureFlags: any[]
                payload?: {
                    id: number
                    payload: Partial<FeatureFlagType>
                }
            }
        }
        updateFeatureFlagFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'update feature flag failure (scenes.feature-flags.featureFlagsLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'update flag (scenes.feature-flags.featureFlagsLogic)': 'updateFlag'
        'delete flag (scenes.feature-flags.featureFlagsLogic)': 'deleteFlag'
        'set search term (scenes.feature-flags.featureFlagsLogic)': 'setSearchTerm'
        'set active tab (scenes.feature-flags.featureFlagsLogic)': 'setActiveTab'
        'load feature flags (scenes.feature-flags.featureFlagsLogic)': 'loadFeatureFlags'
        'load feature flags success (scenes.feature-flags.featureFlagsLogic)': 'loadFeatureFlagsSuccess'
        'load feature flags failure (scenes.feature-flags.featureFlagsLogic)': 'loadFeatureFlagsFailure'
        'update feature flag (scenes.feature-flags.featureFlagsLogic)': 'updateFeatureFlag'
        'update feature flag success (scenes.feature-flags.featureFlagsLogic)': 'updateFeatureFlagSuccess'
        'update feature flag failure (scenes.feature-flags.featureFlagsLogic)': 'updateFeatureFlagFailure'
    }
    actionTypes: {
        updateFlag: 'update flag (scenes.feature-flags.featureFlagsLogic)'
        deleteFlag: 'delete flag (scenes.feature-flags.featureFlagsLogic)'
        setSearchTerm: 'set search term (scenes.feature-flags.featureFlagsLogic)'
        setActiveTab: 'set active tab (scenes.feature-flags.featureFlagsLogic)'
        loadFeatureFlags: 'load feature flags (scenes.feature-flags.featureFlagsLogic)'
        loadFeatureFlagsSuccess: 'load feature flags success (scenes.feature-flags.featureFlagsLogic)'
        loadFeatureFlagsFailure: 'load feature flags failure (scenes.feature-flags.featureFlagsLogic)'
        updateFeatureFlag: 'update feature flag (scenes.feature-flags.featureFlagsLogic)'
        updateFeatureFlagSuccess: 'update feature flag success (scenes.feature-flags.featureFlagsLogic)'
        updateFeatureFlagFailure: 'update feature flag failure (scenes.feature-flags.featureFlagsLogic)'
    }
    actions: {
        updateFlag: (flag: FeatureFlagType) => void
        deleteFlag: (id: number) => void
        setSearchTerm: (searchTerm: string) => void
        setActiveTab: (tabKey: FeatureFlagsTabs) => void
        loadFeatureFlags: () => void
        loadFeatureFlagsSuccess: (featureFlags: FeatureFlagType[], payload?: any) => void
        loadFeatureFlagsFailure: (error: string, errorObject?: any) => void
        updateFeatureFlag: ({ id, payload }: { id: number; payload: Partial<FeatureFlagType> }) => void
        updateFeatureFlagSuccess: (
            featureFlags: any[],
            payload?: {
                id: number
                payload: Partial<FeatureFlagType>
            }
        ) => void
        updateFeatureFlagFailure: (error: string, errorObject?: any) => void
    }
    defaults: {
        featureFlags: FeatureFlagType[]
        featureFlagsLoading: boolean
        searchTerm: any
        activeTab: FeatureFlagsTabs
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {}
    path: ['scenes', 'feature-flags', 'featureFlagsLogic']
    pathString: 'scenes.feature-flags.featureFlagsLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        featureFlags: FeatureFlagType[]
        featureFlagsLoading: boolean
        searchTerm: any
        activeTab: FeatureFlagsTabs
    }
    reducers: {
        featureFlags: (state: FeatureFlagType[], action: any, fullState: any) => FeatureFlagType[]
        featureFlagsLoading: (state: boolean, action: any, fullState: any) => boolean
        searchTerm: (state: any, action: any, fullState: any) => any
        activeTab: (state: FeatureFlagsTabs, action: any, fullState: any) => FeatureFlagsTabs
    }
    selector: (state: any) => {
        featureFlags: FeatureFlagType[]
        featureFlagsLoading: boolean
        searchTerm: any
        activeTab: FeatureFlagsTabs
    }
    selectors: {
        featureFlags: (state: any, props?: any) => FeatureFlagType[]
        featureFlagsLoading: (state: any, props?: any) => boolean
        searchTerm: (state: any, props?: any) => any
        activeTab: (state: any, props?: any) => FeatureFlagsTabs
        currentTeamId: (state: any, props?: any) => number | null
        searchedFeatureFlags: (state: any, props?: any) => FeatureFlagType[]
        breadcrumbs: (state: any, props?: any) => Breadcrumb[]
    }
    sharedListeners: {}
    values: {
        featureFlags: FeatureFlagType[]
        featureFlagsLoading: boolean
        searchTerm: any
        activeTab: FeatureFlagsTabs
        currentTeamId: number | null
        searchedFeatureFlags: FeatureFlagType[]
        breadcrumbs: Breadcrumb[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        searchedFeatureFlags: (featureFlags: FeatureFlagType[], searchTerm: any) => FeatureFlagType[]
    }
}
