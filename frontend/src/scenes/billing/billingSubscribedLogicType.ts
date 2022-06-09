// Generated by kea-typegen on Thu, 09 Jun 2022 19:50:04 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { Scene, SceneParams } from '../sceneTypes'
import type { BillingType } from '../../types'
import type { SubscriptionStatus } from './billingSubscribedLogic'

export interface billingSubscribedLogicType extends Logic {
    actionCreators: {
        setScene: (
            scene: Scene,
            params: SceneParams,
            scrollToTop?: boolean
        ) => {
            type: 'set scene (scenes.billing.billingSubscribedLogic)'
            payload: {
                scene: Scene
                params: SceneParams
                scrollToTop: boolean
            }
        }
        setStatus: (status: SubscriptionStatus) => {
            type: 'set status (scenes.billing.billingSubscribedLogic)'
            payload: {
                status: SubscriptionStatus
            }
        }
        setSessionId: (id: string) => {
            type: 'set session id (scenes.billing.billingSubscribedLogic)'
            payload: {
                id: string
            }
        }
    }
    actionKeys: {
        'set scene (scenes.billing.billingSubscribedLogic)': 'setScene'
        'set status (scenes.billing.billingSubscribedLogic)': 'setStatus'
        'set session id (scenes.billing.billingSubscribedLogic)': 'setSessionId'
    }
    actionTypes: {
        setScene: 'set scene (scenes.billing.billingSubscribedLogic)'
        setStatus: 'set status (scenes.billing.billingSubscribedLogic)'
        setSessionId: 'set session id (scenes.billing.billingSubscribedLogic)'
    }
    actions: {
        setScene: (scene: Scene, params: SceneParams, scrollToTop?: boolean) => void
        setStatus: (status: SubscriptionStatus) => void
        setSessionId: (id: string) => void
    }
    defaults: {
        status: SubscriptionStatus
        sessionId: string | null
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'billing', 'billingSubscribedLogic']
    pathString: 'scenes.billing.billingSubscribedLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        status: SubscriptionStatus
        sessionId: string | null
    }
    reducers: {
        status: (state: SubscriptionStatus, action: any, fullState: any) => SubscriptionStatus
        sessionId: (state: string | null, action: any, fullState: any) => string | null
    }
    selector: (state: any) => {
        status: SubscriptionStatus
        sessionId: string | null
    }
    selectors: {
        status: (state: any, props?: any) => SubscriptionStatus
        sessionId: (state: any, props?: any) => string | null
        billing: (state: any, props?: any) => BillingType | null
    }
    sharedListeners: {}
    values: {
        status: SubscriptionStatus
        sessionId: string | null
        billing: BillingType | null
    }
    _isKea: true
    _isKeaWithKey: false
}
