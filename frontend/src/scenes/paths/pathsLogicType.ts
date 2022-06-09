// Generated by kea-typegen on Thu, 09 Jun 2022 19:50:14 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { FilterType, InsightLogicProps, InsightModel, PropertyFilter } from '../../types'
import type { PathNode } from './pathsLogic'

export interface pathsLogicType extends Logic {
    actionCreators: {
        loadResultsSuccess: (
            insight: Partial<InsightModel>,
            payload?: {
                refresh: any
                queryId: string
            }
        ) => {
            type: 'load results success (scenes.paths.pathsLogic.*)'
            payload: {
                insight: Partial<InsightModel>
                payload?: {
                    refresh: any
                    queryId: string
                }
            }
        }
        setProperties: (properties: PropertyFilter[]) => {
            type: 'set properties (scenes.paths.pathsLogic.*)'
            payload: {
                properties: PropertyFilter[]
            }
        }
        setFilter: (filter: Partial<FilterType>) => {
            type: 'set filter (scenes.paths.pathsLogic.*)'
            payload: {
                filter: Partial<FilterType>
            }
        }
        showPathEvents: (event: any) => {
            type: 'show path events (scenes.paths.pathsLogic.*)'
            payload: {
                event: any
            }
        }
        updateExclusions: (exclusions: string[]) => {
            type: 'update exclusions (scenes.paths.pathsLogic.*)'
            payload: {
                exclusions: string[]
            }
        }
        openPersonsModal: (
            path_start_key?: string,
            path_end_key?: string,
            path_dropoff_key?: string
        ) => {
            type: 'open persons modal (scenes.paths.pathsLogic.*)'
            payload: {
                path_start_key: string | undefined
                path_end_key: string | undefined
                path_dropoff_key: string | undefined
            }
        }
        viewPathToFunnel: (pathItemCard: any) => {
            type: 'view path to funnel (scenes.paths.pathsLogic.*)'
            payload: {
                pathItemCard: any
            }
        }
    }
    actionKeys: {
        'load results success (scenes.paths.pathsLogic.*)': 'loadResultsSuccess'
        'set properties (scenes.paths.pathsLogic.*)': 'setProperties'
        'set filter (scenes.paths.pathsLogic.*)': 'setFilter'
        'show path events (scenes.paths.pathsLogic.*)': 'showPathEvents'
        'update exclusions (scenes.paths.pathsLogic.*)': 'updateExclusions'
        'open persons modal (scenes.paths.pathsLogic.*)': 'openPersonsModal'
        'view path to funnel (scenes.paths.pathsLogic.*)': 'viewPathToFunnel'
    }
    actionTypes: {
        loadResultsSuccess: 'load results success (scenes.paths.pathsLogic.*)'
        setProperties: 'set properties (scenes.paths.pathsLogic.*)'
        setFilter: 'set filter (scenes.paths.pathsLogic.*)'
        showPathEvents: 'show path events (scenes.paths.pathsLogic.*)'
        updateExclusions: 'update exclusions (scenes.paths.pathsLogic.*)'
        openPersonsModal: 'open persons modal (scenes.paths.pathsLogic.*)'
        viewPathToFunnel: 'view path to funnel (scenes.paths.pathsLogic.*)'
    }
    actions: {
        loadResultsSuccess: (
            insight: Partial<InsightModel>,
            payload?: {
                refresh: any
                queryId: string
            }
        ) => void
        setProperties: (properties: PropertyFilter[]) => void
        setFilter: (filter: Partial<FilterType>) => void
        showPathEvents: (event: any) => void
        updateExclusions: (exclusions: string[]) => void
        openPersonsModal: (path_start_key?: string, path_end_key?: string, path_dropoff_key?: string) => void
        viewPathToFunnel: (pathItemCard: any) => void
    }
    defaults: {}
    events: {}
    key: string | number
    listeners: {
        setProperties: ((
            action: {
                type: 'set properties (scenes.paths.pathsLogic.*)'
                payload: {
                    properties: PropertyFilter[]
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setFilter: ((
            action: {
                type: 'set filter (scenes.paths.pathsLogic.*)'
                payload: {
                    filter: Partial<FilterType>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateExclusions: ((
            action: {
                type: 'update exclusions (scenes.paths.pathsLogic.*)'
                payload: {
                    exclusions: string[]
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        openPersonsModal: ((
            action: {
                type: 'open persons modal (scenes.paths.pathsLogic.*)'
                payload: {
                    path_start_key: string | undefined
                    path_end_key: string | undefined
                    path_dropoff_key: string | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        showPathEvents: ((
            action: {
                type: 'show path events (scenes.paths.pathsLogic.*)'
                payload: {
                    event: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        viewPathToFunnel: ((
            action: {
                type: 'view path to funnel (scenes.paths.pathsLogic.*)'
                payload: {
                    pathItemCard: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'paths', 'pathsLogic', '*']
    pathString: 'scenes.paths.pathsLogic.*'
    props: InsightLogicProps
    reducer: (state: any, action: any, fullState: any) => {}
    reducers: {}
    selector: (state: any) => {}
    selectors: {
        insight: (state: any, props?: any) => Partial<InsightModel>
        insightLoading: (state: any, props?: any) => boolean
        filter: (state: any, props?: any) => Partial<FilterType>
        loadedFilters: (state: any, props?: any) => Partial<FilterType>
        results: (state: any, props?: any) => PathNode[]
        resultsLoading: (state: any, props?: any) => boolean
        paths: (state: any, props?: any) => { nodes: any[]; links: PathNode[] }
        pathsError: (state: any, props?: any) => PathNode
        loadedFilter: (state: any, props?: any) => Partial<FilterType>
        propertiesForUrl: (state: any, props?: any) => Partial<FilterType> | ''
        wildcards: (state: any, props?: any) => { name: string }[] | undefined
    }
    sharedListeners: {}
    values: {
        insight: Partial<InsightModel>
        insightLoading: boolean
        filter: Partial<FilterType>
        loadedFilters: Partial<FilterType>
        results: PathNode[]
        resultsLoading: boolean
        paths: { nodes: any[]; links: PathNode[] }
        pathsError: PathNode
        loadedFilter: Partial<FilterType>
        propertiesForUrl: Partial<FilterType> | ''
        wildcards: { name: string }[] | undefined
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        loadedFilters: (
            insight: Partial<import('/Users/marius/Projects/PostHog/posthog/frontend/src/types').InsightModel>
        ) => Partial<FilterType>
        results: (
            insight: Partial<import('/Users/marius/Projects/PostHog/posthog/frontend/src/types').InsightModel>
        ) => PathNode[]
        resultsLoading: (insightLoading: boolean) => boolean
        paths: (results: PathNode[]) => { nodes: any[]; links: PathNode[] }
        pathsError: (
            insight: Partial<import('/Users/marius/Projects/PostHog/posthog/frontend/src/types').InsightModel>
        ) => PathNode
        loadedFilter: (results: PathNode[], filter: Partial<FilterType>) => Partial<FilterType>
        propertiesForUrl: (filter: Partial<FilterType>) => Partial<FilterType> | ''
        wildcards: (filter: Partial<FilterType>) => { name: string }[] | undefined
    }
}
