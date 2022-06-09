// Generated by kea-typegen on Thu, 09 Jun 2022 19:50:10 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { PluginSourceProps } from './pluginSourceLogic'
import type { FeatureFlagsSet } from '../../../lib/logic/featureFlagLogic'
import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from '../../../../../node_modules/kea-forms'

export interface pluginSourceLogicType extends Logic {
    actionCreators: {
        setCurrentFile: (currentFile: string) => {
            type: 'set current file (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                currentFile: string
            }
        }
        closePluginSource: () => {
            type: 'close plugin source (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                value: true
            }
        }
        setPluginSourceValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set plugin source value (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setPluginSourceValues: (values: DeepPartial<Record<string, string>>) => {
            type: 'set plugin source values (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                values: DeepPartial<Record<string, string>>
            }
        }
        setPluginSourceManualErrors: (errors: Record<string, any>) => {
            type: 'set plugin source manual errors (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchPluginSourceField: (key: string) => {
            type: 'touch plugin source field (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                key: string
            }
        }
        resetPluginSource: (values?: Record<string, string>) => {
            type: 'reset plugin source (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                values?: Record<string, string>
            }
        }
        submitPluginSource: () => {
            type: 'submit plugin source (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                value: boolean
            }
        }
        submitPluginSourceRequest: (pluginSource: Record<string, string>) => {
            type: 'submit plugin source request (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                pluginSource: Record<string, string>
            }
        }
        submitPluginSourceSuccess: (pluginSource: Record<string, string>) => {
            type: 'submit plugin source success (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                pluginSource: Record<string, string>
            }
        }
        submitPluginSourceFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit plugin source failure (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
        fetchPluginSource: () => {
            type: 'fetch plugin source (scenes.plugins.edit.pluginSourceLogic)'
            payload: any
        }
        fetchPluginSourceSuccess: (
            pluginSource: any,
            payload?: any
        ) => {
            type: 'fetch plugin source success (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                pluginSource: any
                payload?: any
            }
        }
        fetchPluginSourceFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'fetch plugin source failure (scenes.plugins.edit.pluginSourceLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'set current file (scenes.plugins.edit.pluginSourceLogic)': 'setCurrentFile'
        'close plugin source (scenes.plugins.edit.pluginSourceLogic)': 'closePluginSource'
        'set plugin source value (scenes.plugins.edit.pluginSourceLogic)': 'setPluginSourceValue'
        'set plugin source values (scenes.plugins.edit.pluginSourceLogic)': 'setPluginSourceValues'
        'set plugin source manual errors (scenes.plugins.edit.pluginSourceLogic)': 'setPluginSourceManualErrors'
        'touch plugin source field (scenes.plugins.edit.pluginSourceLogic)': 'touchPluginSourceField'
        'reset plugin source (scenes.plugins.edit.pluginSourceLogic)': 'resetPluginSource'
        'submit plugin source (scenes.plugins.edit.pluginSourceLogic)': 'submitPluginSource'
        'submit plugin source request (scenes.plugins.edit.pluginSourceLogic)': 'submitPluginSourceRequest'
        'submit plugin source success (scenes.plugins.edit.pluginSourceLogic)': 'submitPluginSourceSuccess'
        'submit plugin source failure (scenes.plugins.edit.pluginSourceLogic)': 'submitPluginSourceFailure'
        'fetch plugin source (scenes.plugins.edit.pluginSourceLogic)': 'fetchPluginSource'
        'fetch plugin source success (scenes.plugins.edit.pluginSourceLogic)': 'fetchPluginSourceSuccess'
        'fetch plugin source failure (scenes.plugins.edit.pluginSourceLogic)': 'fetchPluginSourceFailure'
    }
    actionTypes: {
        setCurrentFile: 'set current file (scenes.plugins.edit.pluginSourceLogic)'
        closePluginSource: 'close plugin source (scenes.plugins.edit.pluginSourceLogic)'
        setPluginSourceValue: 'set plugin source value (scenes.plugins.edit.pluginSourceLogic)'
        setPluginSourceValues: 'set plugin source values (scenes.plugins.edit.pluginSourceLogic)'
        setPluginSourceManualErrors: 'set plugin source manual errors (scenes.plugins.edit.pluginSourceLogic)'
        touchPluginSourceField: 'touch plugin source field (scenes.plugins.edit.pluginSourceLogic)'
        resetPluginSource: 'reset plugin source (scenes.plugins.edit.pluginSourceLogic)'
        submitPluginSource: 'submit plugin source (scenes.plugins.edit.pluginSourceLogic)'
        submitPluginSourceRequest: 'submit plugin source request (scenes.plugins.edit.pluginSourceLogic)'
        submitPluginSourceSuccess: 'submit plugin source success (scenes.plugins.edit.pluginSourceLogic)'
        submitPluginSourceFailure: 'submit plugin source failure (scenes.plugins.edit.pluginSourceLogic)'
        fetchPluginSource: 'fetch plugin source (scenes.plugins.edit.pluginSourceLogic)'
        fetchPluginSourceSuccess: 'fetch plugin source success (scenes.plugins.edit.pluginSourceLogic)'
        fetchPluginSourceFailure: 'fetch plugin source failure (scenes.plugins.edit.pluginSourceLogic)'
    }
    actions: {
        setCurrentFile: (currentFile: string) => void
        closePluginSource: () => void
        setPluginSourceValue: (key: FieldName, value: any) => void
        setPluginSourceValues: (values: DeepPartial<Record<string, string>>) => void
        setPluginSourceManualErrors: (errors: Record<string, any>) => void
        touchPluginSourceField: (key: string) => void
        resetPluginSource: (values?: Record<string, string>) => void
        submitPluginSource: () => void
        submitPluginSourceRequest: (pluginSource: Record<string, string>) => void
        submitPluginSourceSuccess: (pluginSource: Record<string, string>) => void
        submitPluginSourceFailure: (error: Error, errors: Record<string, any>) => void
        fetchPluginSource: () => void
        fetchPluginSourceSuccess: (pluginSource: any, payload?: any) => void
        fetchPluginSourceFailure: (error: string, errorObject?: any) => void
    }
    defaults: {
        currentFile: string
        pluginSource: Record<string, string>
        isPluginSourceSubmitting: boolean
        showPluginSourceErrors: boolean
        pluginSourceChanged: boolean
        pluginSourceTouches: Record<string, boolean>
        pluginSourceManualErrors: Record<string, any>
        pluginSourceLoading: boolean
    }
    events: {}
    key: string | number
    listeners: {
        closePluginSource: ((
            action: {
                type: 'close plugin source (scenes.plugins.edit.pluginSourceLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        submitPluginSourceSuccess: ((
            action: {
                type: 'submit plugin source success (scenes.plugins.edit.pluginSourceLogic)'
                payload: {
                    pluginSource: Record<string, string>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        submitPluginSourceFailure: ((
            action: {
                type: 'submit plugin source failure (scenes.plugins.edit.pluginSourceLogic)'
                payload: {
                    error: Error
                    errors: Record<string, any>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'plugins', 'edit', 'pluginSourceLogic']
    pathString: 'scenes.plugins.edit.pluginSourceLogic'
    props: PluginSourceProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        currentFile: string
        pluginSource: Record<string, string>
        isPluginSourceSubmitting: boolean
        showPluginSourceErrors: boolean
        pluginSourceChanged: boolean
        pluginSourceTouches: Record<string, boolean>
        pluginSourceManualErrors: Record<string, any>
        pluginSourceLoading: boolean
    }
    reducers: {
        currentFile: (state: string, action: any, fullState: any) => string
        pluginSource: (state: Record<string, string>, action: any, fullState: any) => Record<string, string>
        isPluginSourceSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showPluginSourceErrors: (state: boolean, action: any, fullState: any) => boolean
        pluginSourceChanged: (state: boolean, action: any, fullState: any) => boolean
        pluginSourceTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>
        pluginSourceManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
        pluginSourceLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        currentFile: string
        pluginSource: Record<string, string>
        isPluginSourceSubmitting: boolean
        showPluginSourceErrors: boolean
        pluginSourceChanged: boolean
        pluginSourceTouches: Record<string, boolean>
        pluginSourceManualErrors: Record<string, any>
        pluginSourceLoading: boolean
    }
    selectors: {
        currentFile: (state: any, props?: any) => string
        pluginSource: (state: any, props?: any) => Record<string, string>
        isPluginSourceSubmitting: (state: any, props?: any) => boolean
        showPluginSourceErrors: (state: any, props?: any) => boolean
        pluginSourceChanged: (state: any, props?: any) => boolean
        pluginSourceTouches: (state: any, props?: any) => Record<string, boolean>
        pluginSourceManualErrors: (state: any, props?: any) => Record<string, any>
        pluginSourceLoading: (state: any, props?: any) => boolean
        featureFlags: (state: any, props?: any) => FeatureFlagsSet
        pluginSourceTouched: (state: any, props?: any) => boolean
        pluginSourceValidationErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<Record<string, string>, ValidationErrorType>
        pluginSourceAllErrors: (state: any, props?: any) => Record<string, any>
        pluginSourceHasErrors: (state: any, props?: any) => boolean
        pluginSourceErrors: (state: any, props?: any) => DeepPartialMap<Record<string, string>, ValidationErrorType>
        isPluginSourceValid: (state: any, props?: any) => boolean
        name: (state: any, props?: any) => any
        fileNames: (state: any, props?: any) => string[]
    }
    sharedListeners: {}
    values: {
        currentFile: string
        pluginSource: Record<string, string>
        isPluginSourceSubmitting: boolean
        showPluginSourceErrors: boolean
        pluginSourceChanged: boolean
        pluginSourceTouches: Record<string, boolean>
        pluginSourceManualErrors: Record<string, any>
        pluginSourceLoading: boolean
        featureFlags: FeatureFlagsSet
        pluginSourceTouched: boolean
        pluginSourceValidationErrors: DeepPartialMap<Record<string, string>, ValidationErrorType>
        pluginSourceAllErrors: Record<string, any>
        pluginSourceHasErrors: boolean
        pluginSourceErrors: DeepPartialMap<Record<string, string>, ValidationErrorType>
        isPluginSourceValid: boolean
        name: any
        fileNames: string[]
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        name: (pluginSource: Record<string, string>) => any
        fileNames: (
            featureFlags: import('/Users/marius/Projects/PostHog/posthog/frontend/src/lib/logic/featureFlagLogic').FeatureFlagsSet
        ) => string[]
    }
}
