// Generated by kea-typegen on Thu, 09 Jun 2022 19:50:04 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { OrganizationInviteType, PreflightStatus } from '../../../types'
import type { LocationChangedPayload } from '../../../../../node_modules/kea-router/lib/types.d'
import type { InviteRowState } from './inviteLogic'

export interface inviteLogicType extends Logic {
    actionCreators: {
        showInviteModal: () => {
            type: 'show invite modal (scenes.organization.Settings.inviteLogic)'
            payload: {
                value: true
            }
        }
        hideInviteModal: () => {
            type: 'hide invite modal (scenes.organization.Settings.inviteLogic)'
            payload: {
                value: true
            }
        }
        updateInviteAtIndex: (
            payload: any,
            index: number
        ) => {
            type: 'update invite at index (scenes.organization.Settings.inviteLogic)'
            payload: {
                payload: any
                index: number
            }
        }
        deleteInviteAtIndex: (index: number) => {
            type: 'delete invite at index (scenes.organization.Settings.inviteLogic)'
            payload: {
                index: number
            }
        }
        updateMessage: (message: string) => {
            type: 'update message (scenes.organization.Settings.inviteLogic)'
            payload: {
                message: string
            }
        }
        appendInviteRow: () => {
            type: 'append invite row (scenes.organization.Settings.inviteLogic)'
            payload: {
                value: true
            }
        }
        resetInviteRows: () => {
            type: 'reset invite rows (scenes.organization.Settings.inviteLogic)'
            payload: {
                value: true
            }
        }
        locationChanged: ({
            method,
            pathname,
            search,
            searchParams,
            hash,
            hashParams,
            initial,
        }: LocationChangedPayload) => {
            type: 'location changed (scenes.organization.Settings.inviteLogic)'
            payload: {
                method: 'PUSH' | 'REPLACE' | 'POP'
                pathname: string
                search: string
                searchParams: Record<string, any>
                hash: string
                hashParams: Record<string, any>
                initial: boolean
            }
        }
        inviteTeamMembers: () => {
            type: 'invite team members (scenes.organization.Settings.inviteLogic)'
            payload: any
        }
        inviteTeamMembersSuccess: (
            invitedTeamMembersInternal: OrganizationInviteType[],
            payload?: any
        ) => {
            type: 'invite team members success (scenes.organization.Settings.inviteLogic)'
            payload: {
                invitedTeamMembersInternal: OrganizationInviteType[]
                payload?: any
            }
        }
        inviteTeamMembersFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'invite team members failure (scenes.organization.Settings.inviteLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        loadInvites: () => {
            type: 'load invites (scenes.organization.Settings.inviteLogic)'
            payload: any
        }
        loadInvitesSuccess: (
            invites: OrganizationInviteType[],
            payload?: any
        ) => {
            type: 'load invites success (scenes.organization.Settings.inviteLogic)'
            payload: {
                invites: OrganizationInviteType[]
                payload?: any
            }
        }
        loadInvitesFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load invites failure (scenes.organization.Settings.inviteLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        deleteInvite: (invite: OrganizationInviteType) => {
            type: 'delete invite (scenes.organization.Settings.inviteLogic)'
            payload: OrganizationInviteType
        }
        deleteInviteSuccess: (
            invites: OrganizationInviteType[],
            payload?: OrganizationInviteType
        ) => {
            type: 'delete invite success (scenes.organization.Settings.inviteLogic)'
            payload: {
                invites: OrganizationInviteType[]
                payload?: OrganizationInviteType
            }
        }
        deleteInviteFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'delete invite failure (scenes.organization.Settings.inviteLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'show invite modal (scenes.organization.Settings.inviteLogic)': 'showInviteModal'
        'hide invite modal (scenes.organization.Settings.inviteLogic)': 'hideInviteModal'
        'update invite at index (scenes.organization.Settings.inviteLogic)': 'updateInviteAtIndex'
        'delete invite at index (scenes.organization.Settings.inviteLogic)': 'deleteInviteAtIndex'
        'update message (scenes.organization.Settings.inviteLogic)': 'updateMessage'
        'append invite row (scenes.organization.Settings.inviteLogic)': 'appendInviteRow'
        'reset invite rows (scenes.organization.Settings.inviteLogic)': 'resetInviteRows'
        'location changed (scenes.organization.Settings.inviteLogic)': 'locationChanged'
        'invite team members (scenes.organization.Settings.inviteLogic)': 'inviteTeamMembers'
        'invite team members success (scenes.organization.Settings.inviteLogic)': 'inviteTeamMembersSuccess'
        'invite team members failure (scenes.organization.Settings.inviteLogic)': 'inviteTeamMembersFailure'
        'load invites (scenes.organization.Settings.inviteLogic)': 'loadInvites'
        'load invites success (scenes.organization.Settings.inviteLogic)': 'loadInvitesSuccess'
        'load invites failure (scenes.organization.Settings.inviteLogic)': 'loadInvitesFailure'
        'delete invite (scenes.organization.Settings.inviteLogic)': 'deleteInvite'
        'delete invite success (scenes.organization.Settings.inviteLogic)': 'deleteInviteSuccess'
        'delete invite failure (scenes.organization.Settings.inviteLogic)': 'deleteInviteFailure'
    }
    actionTypes: {
        showInviteModal: 'show invite modal (scenes.organization.Settings.inviteLogic)'
        hideInviteModal: 'hide invite modal (scenes.organization.Settings.inviteLogic)'
        updateInviteAtIndex: 'update invite at index (scenes.organization.Settings.inviteLogic)'
        deleteInviteAtIndex: 'delete invite at index (scenes.organization.Settings.inviteLogic)'
        updateMessage: 'update message (scenes.organization.Settings.inviteLogic)'
        appendInviteRow: 'append invite row (scenes.organization.Settings.inviteLogic)'
        resetInviteRows: 'reset invite rows (scenes.organization.Settings.inviteLogic)'
        locationChanged: 'location changed (scenes.organization.Settings.inviteLogic)'
        inviteTeamMembers: 'invite team members (scenes.organization.Settings.inviteLogic)'
        inviteTeamMembersSuccess: 'invite team members success (scenes.organization.Settings.inviteLogic)'
        inviteTeamMembersFailure: 'invite team members failure (scenes.organization.Settings.inviteLogic)'
        loadInvites: 'load invites (scenes.organization.Settings.inviteLogic)'
        loadInvitesSuccess: 'load invites success (scenes.organization.Settings.inviteLogic)'
        loadInvitesFailure: 'load invites failure (scenes.organization.Settings.inviteLogic)'
        deleteInvite: 'delete invite (scenes.organization.Settings.inviteLogic)'
        deleteInviteSuccess: 'delete invite success (scenes.organization.Settings.inviteLogic)'
        deleteInviteFailure: 'delete invite failure (scenes.organization.Settings.inviteLogic)'
    }
    actions: {
        showInviteModal: () => void
        hideInviteModal: () => void
        updateInviteAtIndex: (payload: any, index: number) => void
        deleteInviteAtIndex: (index: number) => void
        updateMessage: (message: string) => void
        appendInviteRow: () => void
        resetInviteRows: () => void
        locationChanged: ({
            method,
            pathname,
            search,
            searchParams,
            hash,
            hashParams,
            initial,
        }: LocationChangedPayload) => void
        inviteTeamMembers: () => void
        inviteTeamMembersSuccess: (invitedTeamMembersInternal: OrganizationInviteType[], payload?: any) => void
        inviteTeamMembersFailure: (error: string, errorObject?: any) => void
        loadInvites: () => void
        loadInvitesSuccess: (invites: OrganizationInviteType[], payload?: any) => void
        loadInvitesFailure: (error: string, errorObject?: any) => void
        deleteInvite: (invite: OrganizationInviteType) => void
        deleteInviteSuccess: (invites: OrganizationInviteType[], payload?: OrganizationInviteType) => void
        deleteInviteFailure: (error: string, errorObject?: any) => void
    }
    defaults: {
        isInviteModalShown: boolean
        invitesToSend: InviteRowState[]
        message: string
        invitedTeamMembersInternal: OrganizationInviteType[]
        invitedTeamMembersInternalLoading: boolean
        invites: OrganizationInviteType[]
        invitesLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        inviteTeamMembersSuccess: ((
            action: {
                type: 'invite team members success (scenes.organization.Settings.inviteLogic)'
                payload: {
                    invitedTeamMembersInternal: OrganizationInviteType[]
                    payload?: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'organization', 'Settings', 'inviteLogic']
    pathString: 'scenes.organization.Settings.inviteLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        isInviteModalShown: boolean
        invitesToSend: InviteRowState[]
        message: string
        invitedTeamMembersInternal: OrganizationInviteType[]
        invitedTeamMembersInternalLoading: boolean
        invites: OrganizationInviteType[]
        invitesLoading: boolean
    }
    reducers: {
        isInviteModalShown: (state: boolean, action: any, fullState: any) => boolean
        invitesToSend: (state: InviteRowState[], action: any, fullState: any) => InviteRowState[]
        message: (state: string, action: any, fullState: any) => string
        invitedTeamMembersInternal: (
            state: OrganizationInviteType[],
            action: any,
            fullState: any
        ) => OrganizationInviteType[]
        invitedTeamMembersInternalLoading: (state: boolean, action: any, fullState: any) => boolean
        invites: (state: OrganizationInviteType[], action: any, fullState: any) => OrganizationInviteType[]
        invitesLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        isInviteModalShown: boolean
        invitesToSend: InviteRowState[]
        message: string
        invitedTeamMembersInternal: OrganizationInviteType[]
        invitedTeamMembersInternalLoading: boolean
        invites: OrganizationInviteType[]
        invitesLoading: boolean
    }
    selectors: {
        isInviteModalShown: (state: any, props?: any) => boolean
        invitesToSend: (state: any, props?: any) => InviteRowState[]
        message: (state: any, props?: any) => string
        invitedTeamMembersInternal: (state: any, props?: any) => OrganizationInviteType[]
        invitedTeamMembersInternalLoading: (state: any, props?: any) => boolean
        invites: (state: any, props?: any) => OrganizationInviteType[]
        invitesLoading: (state: any, props?: any) => boolean
        preflight: (state: any, props?: any) => PreflightStatus | null
        canSubmit: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        isInviteModalShown: boolean
        invitesToSend: InviteRowState[]
        message: string
        invitedTeamMembersInternal: OrganizationInviteType[]
        invitedTeamMembersInternalLoading: boolean
        invites: OrganizationInviteType[]
        invitesLoading: boolean
        preflight: PreflightStatus | null
        canSubmit: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        canSubmit: (invitesToSend: InviteRowState[]) => boolean
    }
}
