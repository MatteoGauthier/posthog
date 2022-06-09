// Generated by kea-typegen on Thu, 09 Jun 2022 19:50:03 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { ObjectTagsLogicProps } from './objectTagsLogic'

export interface objectTagsLogicType extends Logic {
    actionCreators: {
        setTags: (tags: string[]) => {
            type: 'set tags (lib.components.ObjectTags.objectTagsLogic)'
            payload: {
                tags: string[]
            }
        }
        setAddingNewTag: (addingNewTag: boolean) => {
            type: 'set adding new tag (lib.components.ObjectTags.objectTagsLogic)'
            payload: {
                addingNewTag: boolean
            }
        }
        setNewTag: (newTag: string) => {
            type: 'set new tag (lib.components.ObjectTags.objectTagsLogic)'
            payload: {
                newTag: string
            }
        }
        handleDelete: (tag: string) => {
            type: 'handle delete (lib.components.ObjectTags.objectTagsLogic)'
            payload: {
                tag: string
            }
        }
        handleAdd: () => {
            type: 'handle add (lib.components.ObjectTags.objectTagsLogic)'
            payload: {
                value: true
            }
        }
    }
    actionKeys: {
        'set tags (lib.components.ObjectTags.objectTagsLogic)': 'setTags'
        'set adding new tag (lib.components.ObjectTags.objectTagsLogic)': 'setAddingNewTag'
        'set new tag (lib.components.ObjectTags.objectTagsLogic)': 'setNewTag'
        'handle delete (lib.components.ObjectTags.objectTagsLogic)': 'handleDelete'
        'handle add (lib.components.ObjectTags.objectTagsLogic)': 'handleAdd'
    }
    actionTypes: {
        setTags: 'set tags (lib.components.ObjectTags.objectTagsLogic)'
        setAddingNewTag: 'set adding new tag (lib.components.ObjectTags.objectTagsLogic)'
        setNewTag: 'set new tag (lib.components.ObjectTags.objectTagsLogic)'
        handleDelete: 'handle delete (lib.components.ObjectTags.objectTagsLogic)'
        handleAdd: 'handle add (lib.components.ObjectTags.objectTagsLogic)'
    }
    actions: {
        setTags: (tags: string[]) => void
        setAddingNewTag: (addingNewTag: boolean) => void
        setNewTag: (newTag: string) => void
        handleDelete: (tag: string) => void
        handleAdd: () => void
    }
    defaults: {
        tags: string[]
        addingNewTag: boolean
        newTag: string
        deletedTags: any[]
    }
    events: {}
    key: number
    listeners: {
        handleDelete: ((
            action: {
                type: 'handle delete (lib.components.ObjectTags.objectTagsLogic)'
                payload: {
                    tag: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        handleAdd: ((
            action: {
                type: 'handle add (lib.components.ObjectTags.objectTagsLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['lib', 'components', 'ObjectTags', 'objectTagsLogic']
    pathString: 'lib.components.ObjectTags.objectTagsLogic'
    props: ObjectTagsLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        tags: string[]
        addingNewTag: boolean
        newTag: string
        deletedTags: any[]
    }
    reducers: {
        tags: (state: string[], action: any, fullState: any) => string[]
        addingNewTag: (state: boolean, action: any, fullState: any) => boolean
        newTag: (state: string, action: any, fullState: any) => string
        deletedTags: (state: any[], action: any, fullState: any) => any[]
    }
    selector: (state: any) => {
        tags: string[]
        addingNewTag: boolean
        newTag: string
        deletedTags: any[]
    }
    selectors: {
        tags: (state: any, props?: any) => string[]
        addingNewTag: (state: any, props?: any) => boolean
        newTag: (state: any, props?: any) => string
        deletedTags: (state: any, props?: any) => any[]
        cleanedNewTag: (state: any, props?: any) => string
    }
    sharedListeners: {}
    values: {
        tags: string[]
        addingNewTag: boolean
        newTag: string
        deletedTags: any[]
        cleanedNewTag: string
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        cleanedNewTag: (newTag: string) => string
    }
}
