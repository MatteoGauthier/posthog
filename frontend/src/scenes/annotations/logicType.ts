// Generated by kea-typegen on Thu, 09 Jun 2022 19:50:10 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { AnnotationType, UserType } from '../../types'
import type { Dayjs } from '../../lib/dayjs'

export interface annotationsTableLogicType extends Logic {
    actionCreators: {
        loadAnnotations: () => {
            type: 'load annotations (scenes.annotations.logic)'
            payload: any
        }
        loadAnnotationsSuccess: (
            annotations: any[],
            payload?: any
        ) => {
            type: 'load annotations success (scenes.annotations.logic)'
            payload: {
                annotations: any[]
                payload?: any
            }
        }
        loadAnnotationsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load annotations failure (scenes.annotations.logic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        updateAnnotation: (
            id: any,
            content: any
        ) => {
            type: 'update annotation (scenes.annotations.logic)'
            payload: {
                id: any
                content: any
            }
        }
        deleteAnnotation: (id: any) => {
            type: 'delete annotation (scenes.annotations.logic)'
            payload: {
                id: any
            }
        }
        restoreAnnotation: (id: any) => {
            type: 'restore annotation (scenes.annotations.logic)'
            payload: {
                id: any
            }
        }
        loadAnnotationsNext: () => {
            type: 'load annotations next (scenes.annotations.logic)'
            payload: boolean
        }
        setNext: (next: any) => {
            type: 'set next (scenes.annotations.logic)'
            payload: {
                next: any
            }
        }
        appendAnnotations: (annotations: AnnotationType[]) => {
            type: 'append annotations (scenes.annotations.logic)'
            payload: {
                annotations: AnnotationType[]
            }
        }
    }
    actionKeys: {
        'load annotations (scenes.annotations.logic)': 'loadAnnotations'
        'load annotations success (scenes.annotations.logic)': 'loadAnnotationsSuccess'
        'load annotations failure (scenes.annotations.logic)': 'loadAnnotationsFailure'
        'update annotation (scenes.annotations.logic)': 'updateAnnotation'
        'delete annotation (scenes.annotations.logic)': 'deleteAnnotation'
        'restore annotation (scenes.annotations.logic)': 'restoreAnnotation'
        'load annotations next (scenes.annotations.logic)': 'loadAnnotationsNext'
        'set next (scenes.annotations.logic)': 'setNext'
        'append annotations (scenes.annotations.logic)': 'appendAnnotations'
    }
    actionTypes: {
        loadAnnotations: 'load annotations (scenes.annotations.logic)'
        loadAnnotationsSuccess: 'load annotations success (scenes.annotations.logic)'
        loadAnnotationsFailure: 'load annotations failure (scenes.annotations.logic)'
        updateAnnotation: 'update annotation (scenes.annotations.logic)'
        deleteAnnotation: 'delete annotation (scenes.annotations.logic)'
        restoreAnnotation: 'restore annotation (scenes.annotations.logic)'
        loadAnnotationsNext: 'load annotations next (scenes.annotations.logic)'
        setNext: 'set next (scenes.annotations.logic)'
        appendAnnotations: 'append annotations (scenes.annotations.logic)'
    }
    actions: {
        loadAnnotations: () => void
        loadAnnotationsSuccess: (annotations: any[], payload?: any) => void
        loadAnnotationsFailure: (error: string, errorObject?: any) => void
        updateAnnotation: (id: any, content: any) => void
        deleteAnnotation: (id: any) => void
        restoreAnnotation: (id: any) => void
        loadAnnotationsNext: () => void
        setNext: (next: any) => void
        appendAnnotations: (annotations: AnnotationType[]) => void
    }
    defaults: {
        annotations: AnnotationType[]
        annotationsLoading: boolean
        next: string | null
        loadingNext: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        updateAnnotation: ((
            action: {
                type: 'update annotation (scenes.annotations.logic)'
                payload: {
                    id: any
                    content: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        restoreAnnotation: ((
            action: {
                type: 'restore annotation (scenes.annotations.logic)'
                payload: {
                    id: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        deleteAnnotation: ((
            action: {
                type: 'delete annotation (scenes.annotations.logic)'
                payload: {
                    id: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadAnnotationsNext: ((
            action: {
                type: 'load annotations next (scenes.annotations.logic)'
                payload: boolean
            },
            previousState: any
        ) => void | Promise<void>)[]
        'create global annotation success (models.annotationsModel)': ((
            action: {
                type: 'create global annotation success (models.annotationsModel)'
                payload: {
                    globalAnnotations: AnnotationType[]
                    payload?: {
                        content: string
                        date_marker: string
                        created_at: Dayjs
                        created_by: UserType | null
                        insightNumericId: number | undefined
                    }
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'annotations', 'logic']
    pathString: 'scenes.annotations.logic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        annotations: AnnotationType[]
        annotationsLoading: boolean
        next: string | null
        loadingNext: boolean
    }
    reducers: {
        annotations: (state: AnnotationType[], action: any, fullState: any) => AnnotationType[]
        annotationsLoading: (state: boolean, action: any, fullState: any) => boolean
        next: (state: string | null, action: any, fullState: any) => string | null
        loadingNext: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        annotations: AnnotationType[]
        annotationsLoading: boolean
        next: string | null
        loadingNext: boolean
    }
    selectors: {
        annotations: (state: any, props?: any) => AnnotationType[]
        annotationsLoading: (state: any, props?: any) => boolean
        next: (state: any, props?: any) => string | null
        loadingNext: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        annotations: AnnotationType[]
        annotationsLoading: boolean
        next: string | null
        loadingNext: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalReducerActions: {
        'create global annotation success (models.annotationsModel)': (
            globalAnnotations: AnnotationType[],
            payload?: {
                content: string
                date_marker: string
                created_at: Dayjs
                created_by: UserType | null
                insightNumericId: number | undefined
            }
        ) => {
            type: 'create global annotation success (models.annotationsModel)'
            payload: {
                globalAnnotations: AnnotationType[]
                payload?: {
                    content: string
                    date_marker: string
                    created_at: Dayjs
                    created_by: UserType | null
                    insightNumericId: number | undefined
                }
            }
        }
    }
}
