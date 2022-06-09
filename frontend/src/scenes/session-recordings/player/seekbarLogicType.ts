// Generated by kea-typegen on Thu, 09 Jun 2022 19:50:15 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { PlayerPosition, RecordingEventType, SessionPlayerData } from '../../../types'
import type { InteractEvent, ReactInteractEvent } from './playerUtils'
import type { MutableRefObject } from '../../../../../node_modules/@types/react/index.d'

export interface seekbarLogicType extends Logic {
    actionCreators: {
        startScrub: () => {
            type: 'start scrub (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                value: true
            }
        }
        endScrub: () => {
            type: 'end scrub (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                value: true
            }
        }
        setCurrentPlayerPosition: (playerPosition: PlayerPosition | null) => {
            type: 'set current player position (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                playerPosition: PlayerPosition | null
            }
        }
        seek: (
            playerPosition: PlayerPosition | null,
            forcePlay?: boolean
        ) => {
            type: 'seek (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                playerPosition: PlayerPosition | null
                forcePlay: boolean
            }
        }
        setThumbLeftPos: (
            thumbLeftPos: number,
            shouldSeek: boolean
        ) => {
            type: 'set thumb left pos (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                thumbLeftPos: number
                shouldSeek: boolean
            }
        }
        setCursorDiff: (cursorDiff: number) => {
            type: 'set cursor diff (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                cursorDiff: number
            }
        }
        handleSeek: (
            newX: number,
            shouldSeek?: boolean
        ) => {
            type: 'handle seek (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                newX: number
                shouldSeek: boolean
            }
        }
        handleMove: (event: InteractEvent) => {
            type: 'handle move (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                event: InteractEvent
            }
        }
        handleUp: (event: InteractEvent) => {
            type: 'handle up (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                event: InteractEvent
            }
        }
        handleDown: (event: ReactInteractEvent) => {
            type: 'handle down (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                event: ReactInteractEvent
            }
        }
        handleClick: (event: ReactInteractEvent) => {
            type: 'handle click (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                event: ReactInteractEvent
            }
        }
        handleTickClick: (playerPosition: PlayerPosition) => {
            type: 'handle tick click (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                playerPosition: PlayerPosition
            }
        }
        setSlider: (ref: MutableRefObject<HTMLDivElement | null>) => {
            type: 'set slider (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                ref: MutableRefObject<HTMLDivElement | null>
            }
        }
        setThumb: (ref: MutableRefObject<HTMLDivElement | null>) => {
            type: 'set thumb (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                ref: MutableRefObject<HTMLDivElement | null>
            }
        }
        debouncedSetTime: (time: number) => {
            type: 'debounced set time (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                time: number
            }
        }
        endSeeking: () => {
            type: 'end seeking (scenes.session-recordings.player.seekbarLogic)'
            payload: {
                value: true
            }
        }
    }
    actionKeys: {
        'start scrub (scenes.session-recordings.player.seekbarLogic)': 'startScrub'
        'end scrub (scenes.session-recordings.player.seekbarLogic)': 'endScrub'
        'set current player position (scenes.session-recordings.player.seekbarLogic)': 'setCurrentPlayerPosition'
        'seek (scenes.session-recordings.player.seekbarLogic)': 'seek'
        'set thumb left pos (scenes.session-recordings.player.seekbarLogic)': 'setThumbLeftPos'
        'set cursor diff (scenes.session-recordings.player.seekbarLogic)': 'setCursorDiff'
        'handle seek (scenes.session-recordings.player.seekbarLogic)': 'handleSeek'
        'handle move (scenes.session-recordings.player.seekbarLogic)': 'handleMove'
        'handle up (scenes.session-recordings.player.seekbarLogic)': 'handleUp'
        'handle down (scenes.session-recordings.player.seekbarLogic)': 'handleDown'
        'handle click (scenes.session-recordings.player.seekbarLogic)': 'handleClick'
        'handle tick click (scenes.session-recordings.player.seekbarLogic)': 'handleTickClick'
        'set slider (scenes.session-recordings.player.seekbarLogic)': 'setSlider'
        'set thumb (scenes.session-recordings.player.seekbarLogic)': 'setThumb'
        'debounced set time (scenes.session-recordings.player.seekbarLogic)': 'debouncedSetTime'
        'end seeking (scenes.session-recordings.player.seekbarLogic)': 'endSeeking'
    }
    actionTypes: {
        startScrub: 'start scrub (scenes.session-recordings.player.seekbarLogic)'
        endScrub: 'end scrub (scenes.session-recordings.player.seekbarLogic)'
        setCurrentPlayerPosition: 'set current player position (scenes.session-recordings.player.seekbarLogic)'
        seek: 'seek (scenes.session-recordings.player.seekbarLogic)'
        setThumbLeftPos: 'set thumb left pos (scenes.session-recordings.player.seekbarLogic)'
        setCursorDiff: 'set cursor diff (scenes.session-recordings.player.seekbarLogic)'
        handleSeek: 'handle seek (scenes.session-recordings.player.seekbarLogic)'
        handleMove: 'handle move (scenes.session-recordings.player.seekbarLogic)'
        handleUp: 'handle up (scenes.session-recordings.player.seekbarLogic)'
        handleDown: 'handle down (scenes.session-recordings.player.seekbarLogic)'
        handleClick: 'handle click (scenes.session-recordings.player.seekbarLogic)'
        handleTickClick: 'handle tick click (scenes.session-recordings.player.seekbarLogic)'
        setSlider: 'set slider (scenes.session-recordings.player.seekbarLogic)'
        setThumb: 'set thumb (scenes.session-recordings.player.seekbarLogic)'
        debouncedSetTime: 'debounced set time (scenes.session-recordings.player.seekbarLogic)'
        endSeeking: 'end seeking (scenes.session-recordings.player.seekbarLogic)'
    }
    actions: {
        startScrub: () => void
        endScrub: () => void
        setCurrentPlayerPosition: (playerPosition: PlayerPosition | null) => void
        seek: (playerPosition: PlayerPosition | null, forcePlay?: boolean) => void
        setThumbLeftPos: (thumbLeftPos: number, shouldSeek: boolean) => void
        setCursorDiff: (cursorDiff: number) => void
        handleSeek: (newX: number, shouldSeek?: boolean) => void
        handleMove: (event: InteractEvent) => void
        handleUp: (event: InteractEvent) => void
        handleDown: (event: ReactInteractEvent) => void
        handleClick: (event: ReactInteractEvent) => void
        handleTickClick: (playerPosition: PlayerPosition) => void
        setSlider: (ref: MutableRefObject<HTMLDivElement | null>) => void
        setThumb: (ref: MutableRefObject<HTMLDivElement | null>) => void
        debouncedSetTime: (time: number) => void
        endSeeking: () => void
    }
    defaults: {
        thumbLeftPos: number
        cursorDiff: number
        slider: HTMLDivElement | null
        thumb: HTMLDivElement | null
        isSeeking: boolean
        isScrubbing: boolean
    }
    events: {
        afterMount: () => void
        beforeUnmount: () => void
    }
    key: undefined
    listeners: {
        setCurrentPlayerPosition: ((
            action: {
                type: 'set current player position (scenes.session-recordings.player.seekbarLogic)'
                payload: {
                    playerPosition: PlayerPosition | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setThumbLeftPos: ((
            action: {
                type: 'set thumb left pos (scenes.session-recordings.player.seekbarLogic)'
                payload: {
                    thumbLeftPos: number
                    shouldSeek: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        handleSeek: ((
            action: {
                type: 'handle seek (scenes.session-recordings.player.seekbarLogic)'
                payload: {
                    newX: number
                    shouldSeek: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        handleMove: ((
            action: {
                type: 'handle move (scenes.session-recordings.player.seekbarLogic)'
                payload: {
                    event: InteractEvent
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        handleUp: ((
            action: {
                type: 'handle up (scenes.session-recordings.player.seekbarLogic)'
                payload: {
                    event: InteractEvent
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        handleDown: ((
            action: {
                type: 'handle down (scenes.session-recordings.player.seekbarLogic)'
                payload: {
                    event: ReactInteractEvent
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        handleTickClick: ((
            action: {
                type: 'handle tick click (scenes.session-recordings.player.seekbarLogic)'
                payload: {
                    playerPosition: PlayerPosition
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'session-recordings', 'player', 'seekbarLogic']
    pathString: 'scenes.session-recordings.player.seekbarLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        thumbLeftPos: number
        cursorDiff: number
        slider: HTMLDivElement | null
        thumb: HTMLDivElement | null
        isSeeking: boolean
        isScrubbing: boolean
    }
    reducers: {
        thumbLeftPos: (state: number, action: any, fullState: any) => number
        cursorDiff: (state: number, action: any, fullState: any) => number
        slider: (state: HTMLDivElement | null, action: any, fullState: any) => HTMLDivElement | null
        thumb: (state: HTMLDivElement | null, action: any, fullState: any) => HTMLDivElement | null
        isSeeking: (state: boolean, action: any, fullState: any) => boolean
        isScrubbing: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        thumbLeftPos: number
        cursorDiff: number
        slider: HTMLDivElement | null
        thumb: HTMLDivElement | null
        isSeeking: boolean
        isScrubbing: boolean
    }
    selectors: {
        thumbLeftPos: (state: any, props?: any) => number
        cursorDiff: (state: any, props?: any) => number
        slider: (state: any, props?: any) => HTMLDivElement | null
        thumb: (state: any, props?: any) => HTMLDivElement | null
        isSeeking: (state: any, props?: any) => boolean
        isScrubbing: (state: any, props?: any) => boolean
        currentPlayerPosition: (state: any, props?: any) => PlayerPosition | null
        sessionPlayerData: (state: any, props?: any) => SessionPlayerData
        eventsToShow: (state: any, props?: any) => RecordingEventType[]
        bufferPercent: (state: any, props?: any) => number
        scrubbingTime: (state: any, props?: any) => number
    }
    sharedListeners: {}
    values: {
        thumbLeftPos: number
        cursorDiff: number
        slider: HTMLDivElement | null
        thumb: HTMLDivElement | null
        isSeeking: boolean
        isScrubbing: boolean
        currentPlayerPosition: PlayerPosition | null
        sessionPlayerData: SessionPlayerData
        eventsToShow: RecordingEventType[]
        bufferPercent: number
        scrubbingTime: number
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        bufferPercent: (
            sessionPlayerData: import('/Users/marius/Projects/PostHog/posthog/frontend/src/types').SessionPlayerData
        ) => number
        scrubbingTime: (
            thumbLeftPos: number,
            slider: HTMLDivElement | null,
            sessionPlayerData: import('/Users/marius/Projects/PostHog/posthog/frontend/src/types').SessionPlayerData
        ) => number
    }
}
