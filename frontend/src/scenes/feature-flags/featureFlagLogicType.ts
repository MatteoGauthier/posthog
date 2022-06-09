// Generated by kea-typegen on Thu, 09 Jun 2022 19:50:26 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { FeatureFlagLogicProps } from './featureFlagLogic'
import type { AnyPropertyFilter, Breadcrumb, FeatureFlagType, GroupType, MultivariateFlagOptions, MultivariateFlagVariant } from '../../types'
import type { TaxonomicFilterGroupType } from '../../lib/components/TaxonomicFilter/types'
import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from '../../../../node_modules/kea-forms'

export interface featureFlagLogicType extends Logic {
    actionCreators: {
        setFeatureFlag: (featureFlag: FeatureFlagType) => {
            type: 'set feature flag (scenes.feature-flags.featureFlagLogic)'
            payload: {
                featureFlag: FeatureFlagType
            }
        }
        addConditionSet: () => {
            type: 'add condition set (scenes.feature-flags.featureFlagLogic)'
            payload: {
                value: true
            }
        }
        setAggregationGroupTypeIndex: (value: number | null) => {
            type: 'set aggregation group type index (scenes.feature-flags.featureFlagLogic)'
            payload: {
                value: number | null
            }
        }
        removeConditionSet: (index: number) => {
            type: 'remove condition set (scenes.feature-flags.featureFlagLogic)'
            payload: {
                index: number
            }
        }
        duplicateConditionSet: (index: number) => {
            type: 'duplicate condition set (scenes.feature-flags.featureFlagLogic)'
            payload: {
                index: number
            }
        }
        updateConditionSet: (
            index: number,
            newRolloutPercentage?: number | null,
            newProperties?: AnyPropertyFilter[]
        ) => {
            type: 'update condition set (scenes.feature-flags.featureFlagLogic)'
            payload: {
                index: number
                newRolloutPercentage: number | null | undefined
                newProperties: AnyPropertyFilter[] | undefined
            }
        }
        deleteFeatureFlag: (featureFlag: Partial<FeatureFlagType>) => {
            type: 'delete feature flag (scenes.feature-flags.featureFlagLogic)'
            payload: {
                featureFlag: Partial<FeatureFlagType>
            }
        }
        setMultivariateEnabled: (enabled: boolean) => {
            type: 'set multivariate enabled (scenes.feature-flags.featureFlagLogic)'
            payload: {
                enabled: boolean
            }
        }
        setMultivariateOptions: (multivariateOptions: MultivariateFlagOptions | null) => {
            type: 'set multivariate options (scenes.feature-flags.featureFlagLogic)'
            payload: {
                multivariateOptions: MultivariateFlagOptions | null
            }
        }
        addVariant: () => {
            type: 'add variant (scenes.feature-flags.featureFlagLogic)'
            payload: {
                value: true
            }
        }
        removeVariant: (index: number) => {
            type: 'remove variant (scenes.feature-flags.featureFlagLogic)'
            payload: {
                index: number
            }
        }
        distributeVariantsEqually: () => {
            type: 'distribute variants equally (scenes.feature-flags.featureFlagLogic)'
            payload: {
                value: true
            }
        }
        setFeatureFlagValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set feature flag value (scenes.feature-flags.featureFlagLogic)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setFeatureFlagValues: (values: DeepPartial<FeatureFlagType>) => {
            type: 'set feature flag values (scenes.feature-flags.featureFlagLogic)'
            payload: {
                values: DeepPartial<FeatureFlagType>
            }
        }
        setFeatureFlagManualErrors: (errors: Record<string, any>) => {
            type: 'set feature flag manual errors (scenes.feature-flags.featureFlagLogic)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchFeatureFlagField: (key: string) => {
            type: 'touch feature flag field (scenes.feature-flags.featureFlagLogic)'
            payload: {
                key: string
            }
        }
        resetFeatureFlag: (values?: FeatureFlagType) => {
            type: 'reset feature flag (scenes.feature-flags.featureFlagLogic)'
            payload: {
                values?: FeatureFlagType
            }
        }
        submitFeatureFlag: () => {
            type: 'submit feature flag (scenes.feature-flags.featureFlagLogic)'
            payload: {
                value: boolean
            }
        }
        submitFeatureFlagRequest: (featureFlag: FeatureFlagType) => {
            type: 'submit feature flag request (scenes.feature-flags.featureFlagLogic)'
            payload: {
                featureFlag: FeatureFlagType
            }
        }
        submitFeatureFlagSuccess: (featureFlag: FeatureFlagType) => {
            type: 'submit feature flag success (scenes.feature-flags.featureFlagLogic)'
            payload: {
                featureFlag: FeatureFlagType
            }
        }
        submitFeatureFlagFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit feature flag failure (scenes.feature-flags.featureFlagLogic)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
        loadFeatureFlag: () => {
            type: 'load feature flag (scenes.feature-flags.featureFlagLogic)'
            payload: any
        }
        loadFeatureFlagSuccess: (
            featureFlag: any,
            payload?: any
        ) => {
            type: 'load feature flag success (scenes.feature-flags.featureFlagLogic)'
            payload: {
                featureFlag: any
                payload?: any
            }
        }
        loadFeatureFlagFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load feature flag failure (scenes.feature-flags.featureFlagLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        saveFeatureFlag: (updatedFlag: Partial<FeatureFlagType>) => {
            type: 'save feature flag (scenes.feature-flags.featureFlagLogic)'
            payload: Partial<FeatureFlagType>
        }
        saveFeatureFlagSuccess: (
            featureFlag: any,
            payload?: Partial<FeatureFlagType>
        ) => {
            type: 'save feature flag success (scenes.feature-flags.featureFlagLogic)'
            payload: {
                featureFlag: any
                payload?: Partial<FeatureFlagType>
            }
        }
        saveFeatureFlagFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'save feature flag failure (scenes.feature-flags.featureFlagLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'set feature flag (scenes.feature-flags.featureFlagLogic)': 'setFeatureFlag'
        'add condition set (scenes.feature-flags.featureFlagLogic)': 'addConditionSet'
        'set aggregation group type index (scenes.feature-flags.featureFlagLogic)': 'setAggregationGroupTypeIndex'
        'remove condition set (scenes.feature-flags.featureFlagLogic)': 'removeConditionSet'
        'duplicate condition set (scenes.feature-flags.featureFlagLogic)': 'duplicateConditionSet'
        'update condition set (scenes.feature-flags.featureFlagLogic)': 'updateConditionSet'
        'delete feature flag (scenes.feature-flags.featureFlagLogic)': 'deleteFeatureFlag'
        'set multivariate enabled (scenes.feature-flags.featureFlagLogic)': 'setMultivariateEnabled'
        'set multivariate options (scenes.feature-flags.featureFlagLogic)': 'setMultivariateOptions'
        'add variant (scenes.feature-flags.featureFlagLogic)': 'addVariant'
        'remove variant (scenes.feature-flags.featureFlagLogic)': 'removeVariant'
        'distribute variants equally (scenes.feature-flags.featureFlagLogic)': 'distributeVariantsEqually'
        'set feature flag value (scenes.feature-flags.featureFlagLogic)': 'setFeatureFlagValue'
        'set feature flag values (scenes.feature-flags.featureFlagLogic)': 'setFeatureFlagValues'
        'set feature flag manual errors (scenes.feature-flags.featureFlagLogic)': 'setFeatureFlagManualErrors'
        'touch feature flag field (scenes.feature-flags.featureFlagLogic)': 'touchFeatureFlagField'
        'reset feature flag (scenes.feature-flags.featureFlagLogic)': 'resetFeatureFlag'
        'submit feature flag (scenes.feature-flags.featureFlagLogic)': 'submitFeatureFlag'
        'submit feature flag request (scenes.feature-flags.featureFlagLogic)': 'submitFeatureFlagRequest'
        'submit feature flag success (scenes.feature-flags.featureFlagLogic)': 'submitFeatureFlagSuccess'
        'submit feature flag failure (scenes.feature-flags.featureFlagLogic)': 'submitFeatureFlagFailure'
        'load feature flag (scenes.feature-flags.featureFlagLogic)': 'loadFeatureFlag'
        'load feature flag success (scenes.feature-flags.featureFlagLogic)': 'loadFeatureFlagSuccess'
        'load feature flag failure (scenes.feature-flags.featureFlagLogic)': 'loadFeatureFlagFailure'
        'save feature flag (scenes.feature-flags.featureFlagLogic)': 'saveFeatureFlag'
        'save feature flag success (scenes.feature-flags.featureFlagLogic)': 'saveFeatureFlagSuccess'
        'save feature flag failure (scenes.feature-flags.featureFlagLogic)': 'saveFeatureFlagFailure'
    }
    actionTypes: {
        setFeatureFlag: 'set feature flag (scenes.feature-flags.featureFlagLogic)'
        addConditionSet: 'add condition set (scenes.feature-flags.featureFlagLogic)'
        setAggregationGroupTypeIndex: 'set aggregation group type index (scenes.feature-flags.featureFlagLogic)'
        removeConditionSet: 'remove condition set (scenes.feature-flags.featureFlagLogic)'
        duplicateConditionSet: 'duplicate condition set (scenes.feature-flags.featureFlagLogic)'
        updateConditionSet: 'update condition set (scenes.feature-flags.featureFlagLogic)'
        deleteFeatureFlag: 'delete feature flag (scenes.feature-flags.featureFlagLogic)'
        setMultivariateEnabled: 'set multivariate enabled (scenes.feature-flags.featureFlagLogic)'
        setMultivariateOptions: 'set multivariate options (scenes.feature-flags.featureFlagLogic)'
        addVariant: 'add variant (scenes.feature-flags.featureFlagLogic)'
        removeVariant: 'remove variant (scenes.feature-flags.featureFlagLogic)'
        distributeVariantsEqually: 'distribute variants equally (scenes.feature-flags.featureFlagLogic)'
        setFeatureFlagValue: 'set feature flag value (scenes.feature-flags.featureFlagLogic)'
        setFeatureFlagValues: 'set feature flag values (scenes.feature-flags.featureFlagLogic)'
        setFeatureFlagManualErrors: 'set feature flag manual errors (scenes.feature-flags.featureFlagLogic)'
        touchFeatureFlagField: 'touch feature flag field (scenes.feature-flags.featureFlagLogic)'
        resetFeatureFlag: 'reset feature flag (scenes.feature-flags.featureFlagLogic)'
        submitFeatureFlag: 'submit feature flag (scenes.feature-flags.featureFlagLogic)'
        submitFeatureFlagRequest: 'submit feature flag request (scenes.feature-flags.featureFlagLogic)'
        submitFeatureFlagSuccess: 'submit feature flag success (scenes.feature-flags.featureFlagLogic)'
        submitFeatureFlagFailure: 'submit feature flag failure (scenes.feature-flags.featureFlagLogic)'
        loadFeatureFlag: 'load feature flag (scenes.feature-flags.featureFlagLogic)'
        loadFeatureFlagSuccess: 'load feature flag success (scenes.feature-flags.featureFlagLogic)'
        loadFeatureFlagFailure: 'load feature flag failure (scenes.feature-flags.featureFlagLogic)'
        saveFeatureFlag: 'save feature flag (scenes.feature-flags.featureFlagLogic)'
        saveFeatureFlagSuccess: 'save feature flag success (scenes.feature-flags.featureFlagLogic)'
        saveFeatureFlagFailure: 'save feature flag failure (scenes.feature-flags.featureFlagLogic)'
    }
    actions: {
        setFeatureFlag: (featureFlag: FeatureFlagType) => void
        addConditionSet: () => void
        setAggregationGroupTypeIndex: (value: number | null) => void
        removeConditionSet: (index: number) => void
        duplicateConditionSet: (index: number) => void
        updateConditionSet: (
            index: number,
            newRolloutPercentage?: number | null,
            newProperties?: AnyPropertyFilter[]
        ) => void
        deleteFeatureFlag: (featureFlag: Partial<FeatureFlagType>) => void
        setMultivariateEnabled: (enabled: boolean) => void
        setMultivariateOptions: (multivariateOptions: MultivariateFlagOptions | null) => void
        addVariant: () => void
        removeVariant: (index: number) => void
        distributeVariantsEqually: () => void
        setFeatureFlagValue: (key: FieldName, value: any) => void
        setFeatureFlagValues: (values: DeepPartial<FeatureFlagType>) => void
        setFeatureFlagManualErrors: (errors: Record<string, any>) => void
        touchFeatureFlagField: (key: string) => void
        resetFeatureFlag: (values?: FeatureFlagType) => void
        submitFeatureFlag: () => void
        submitFeatureFlagRequest: (featureFlag: FeatureFlagType) => void
        submitFeatureFlagSuccess: (featureFlag: FeatureFlagType) => void
        submitFeatureFlagFailure: (error: Error, errors: Record<string, any>) => void
        loadFeatureFlag: () => void
        loadFeatureFlagSuccess: (featureFlag: any, payload?: any) => void
        loadFeatureFlagFailure: (error: string, errorObject?: any) => void
        saveFeatureFlag: (updatedFlag: Partial<FeatureFlagType>) => void
        saveFeatureFlagSuccess: (featureFlag: any, payload?: Partial<FeatureFlagType>) => void
        saveFeatureFlagFailure: (error: string, errorObject?: any) => void
    }
    defaults: {
        featureFlag: FeatureFlagType
        isFeatureFlagSubmitting: boolean
        showFeatureFlagErrors: boolean
        featureFlagChanged: boolean
        featureFlagTouches: Record<string, boolean>
        featureFlagManualErrors: Record<string, any>
        featureFlagLoading: boolean
    }
    events: {}
    key: number | 'new'
    listeners: {
        saveFeatureFlagSuccess: ((
            action: {
                type: 'save feature flag success (scenes.feature-flags.featureFlagLogic)'
                payload: {
                    featureFlag: any
                    payload?: Partial<FeatureFlagType>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        deleteFeatureFlag: ((
            action: {
                type: 'delete feature flag (scenes.feature-flags.featureFlagLogic)'
                payload: {
                    featureFlag: Partial<FeatureFlagType>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setMultivariateEnabled: ((
            action: {
                type: 'set multivariate enabled (scenes.feature-flags.featureFlagLogic)'
                payload: {
                    enabled: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'feature-flags', 'featureFlagLogic']
    pathString: 'scenes.feature-flags.featureFlagLogic'
    props: FeatureFlagLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        featureFlag: FeatureFlagType
        isFeatureFlagSubmitting: boolean
        showFeatureFlagErrors: boolean
        featureFlagChanged: boolean
        featureFlagTouches: Record<string, boolean>
        featureFlagManualErrors: Record<string, any>
        featureFlagLoading: boolean
    }
    reducers: {
        featureFlag: (state: FeatureFlagType, action: any, fullState: any) => FeatureFlagType
        isFeatureFlagSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showFeatureFlagErrors: (state: boolean, action: any, fullState: any) => boolean
        featureFlagChanged: (state: boolean, action: any, fullState: any) => boolean
        featureFlagTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>
        featureFlagManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
        featureFlagLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        featureFlag: FeatureFlagType
        isFeatureFlagSubmitting: boolean
        showFeatureFlagErrors: boolean
        featureFlagChanged: boolean
        featureFlagTouches: Record<string, boolean>
        featureFlagManualErrors: Record<string, any>
        featureFlagLoading: boolean
    }
    selectors: {
        featureFlag: (state: any, props?: any) => FeatureFlagType
        isFeatureFlagSubmitting: (state: any, props?: any) => boolean
        showFeatureFlagErrors: (state: any, props?: any) => boolean
        featureFlagChanged: (state: any, props?: any) => boolean
        featureFlagTouches: (state: any, props?: any) => Record<string, boolean>
        featureFlagManualErrors: (state: any, props?: any) => Record<string, any>
        featureFlagLoading: (state: any, props?: any) => boolean
        currentTeamId: (state: any, props?: any) => number | null
        groupTypes: (state: any, props?: any) => Array<GroupType>
        groupsTaxonomicTypes: (state: any, props?: any) => TaxonomicFilterGroupType[]
        aggregationLabel: (
            state: any,
            props?: any
        ) => (
            groupTypeIndex: number | null | undefined,
            deferToUserWording?: boolean
        ) => {
            singular: string
            plural: string
        }
        featureFlagTouched: (state: any, props?: any) => boolean
        featureFlagValidationErrors: (state: any, props?: any) => DeepPartialMap<FeatureFlagType, ValidationErrorType>
        featureFlagAllErrors: (state: any, props?: any) => Record<string, any>
        featureFlagHasErrors: (state: any, props?: any) => boolean
        featureFlagErrors: (state: any, props?: any) => DeepPartialMap<FeatureFlagType, ValidationErrorType>
        isFeatureFlagValid: (state: any, props?: any) => boolean
        props: (state: any, props?: any) => any
        multivariateEnabled: (state: any, props?: any) => boolean
        variants: (state: any, props?: any) => MultivariateFlagVariant[]
        nonEmptyVariants: (state: any, props?: any) => MultivariateFlagVariant[]
        variantRolloutSum: (state: any, props?: any) => number
        areVariantRolloutsValid: (state: any, props?: any) => boolean
        aggregationTargetName: (state: any, props?: any) => string
        taxonomicGroupTypes: (state: any, props?: any) => TaxonomicFilterGroupType[]
        breadcrumbs: (state: any, props?: any) => Breadcrumb[]
    }
    sharedListeners: {}
    values: {
        featureFlag: FeatureFlagType
        isFeatureFlagSubmitting: boolean
        showFeatureFlagErrors: boolean
        featureFlagChanged: boolean
        featureFlagTouches: Record<string, boolean>
        featureFlagManualErrors: Record<string, any>
        featureFlagLoading: boolean
        currentTeamId: number | null
        groupTypes: Array<GroupType>
        groupsTaxonomicTypes: TaxonomicFilterGroupType[]
        aggregationLabel: (
            groupTypeIndex: number | null | undefined,
            deferToUserWording?: boolean
        ) => {
            singular: string
            plural: string
        }
        featureFlagTouched: boolean
        featureFlagValidationErrors: DeepPartialMap<FeatureFlagType, ValidationErrorType>
        featureFlagAllErrors: Record<string, any>
        featureFlagHasErrors: boolean
        featureFlagErrors: DeepPartialMap<FeatureFlagType, ValidationErrorType>
        isFeatureFlagValid: boolean
        props: any
        multivariateEnabled: boolean
        variants: MultivariateFlagVariant[]
        nonEmptyVariants: MultivariateFlagVariant[]
        variantRolloutSum: number
        areVariantRolloutsValid: boolean
        aggregationTargetName: string
        taxonomicGroupTypes: TaxonomicFilterGroupType[]
        breadcrumbs: Breadcrumb[]
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        props: (arg: any) => any
        multivariateEnabled: (featureFlag: FeatureFlagType) => boolean
        variants: (featureFlag: FeatureFlagType) => MultivariateFlagVariant[]
        nonEmptyVariants: (variants: MultivariateFlagVariant[]) => MultivariateFlagVariant[]
        variantRolloutSum: (variants: MultivariateFlagVariant[]) => number
        areVariantRolloutsValid: (variants: MultivariateFlagVariant[], variantRolloutSum: number) => boolean
        aggregationTargetName: (
            featureFlag: FeatureFlagType,
            groupTypes: import('/Users/marius/Projects/PostHog/posthog/frontend/src/types').GroupType[],
            aggregationLabel: (
                groupTypeIndex: number | null | undefined,
                deferToUserWording?: boolean | undefined
            ) => {
                singular: string
                plural: string
            }
        ) => string
        taxonomicGroupTypes: (
            featureFlag: FeatureFlagType,
            groupsTaxonomicTypes: TaxonomicFilterGroupType[]
        ) => TaxonomicFilterGroupType[]
        breadcrumbs: (featureFlag: FeatureFlagType) => Breadcrumb[]
    }
}
