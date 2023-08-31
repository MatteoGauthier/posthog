import './ToolbarButton.scss'
import { useRef, useEffect } from 'react'
import { useActions, useValues } from 'kea'
import { Circle } from '~/toolbar/button/Circle'
import { toolbarButtonLogic } from '~/toolbar/button/toolbarButtonLogic'
import { heatmapLogic } from '~/toolbar/elements/heatmapLogic'
import { toolbarLogic } from '~/toolbar/toolbarLogic'
import { getShadowRoot, getShadowRootPopoverContainer } from '~/toolbar/utils'
import { elementsLogic } from '~/toolbar/elements/elementsLogic'
import { useLongPress } from 'lib/hooks/useLongPress'
import { Flag } from '~/toolbar/button/icons/Flag'
import { Fire } from '~/toolbar/button/icons/Fire'
import { Magnifier } from '~/toolbar/button/icons/Magnifier'
import { actionsTabLogic } from '~/toolbar/actions/actionsTabLogic'
import { actionsLogic } from '~/toolbar/actions/actionsLogic'
import { Close } from '~/toolbar/button/icons/Close'
import {
    IconArrowDown,
    IconArrowUp,
    IconClick,
    IconDragHandle,
    IconFlag,
    IconMagnifier,
    IconMenu,
    IconHelpOutline,
    IconTarget,
} from 'lib/lemon-ui/icons'
import { Logomark as Logomark3000 } from './icons/icons'
import { Logomark } from '~/toolbar/assets/Logomark'
import { Spinner } from 'lib/lemon-ui/Spinner'
import { HeatmapStats } from '~/toolbar/stats/HeatmapStats'
import { ActionsTab } from '~/toolbar/actions/ActionsTab'
import { FeatureFlags } from '~/toolbar/flags/FeatureFlags'
import { featureFlagsLogic } from '~/toolbar/flags/featureFlagsLogic'
import { LemonBadge, LemonButton, LemonDivider } from '@posthog/lemon-ui'
import { Tooltip } from 'lib/lemon-ui/Tooltip'

const HELP_URL = 'https://posthog.com/docs/user-guides/toolbar?utm_medium=in-product&utm_campaign=toolbar-help-button'

export function ToolbarButton(): JSX.Element {
    const {
        extensionPercentage,
        heatmapInfoVisible,
        toolbarListVerticalPadding,
        helpButtonOnTop,
        side,
        closeDistance,
        closeRotation,
        hedgehogModeDistance,
        hedgehogModeRotation,
        inspectExtensionPercentage,
        heatmapExtensionPercentage,
        actionsExtensionPercentage,
        actionsInfoVisible,
        featureFlagsExtensionPercentage,
        flagsVisible,
        hedgehogMode,
    } = useValues(toolbarButtonLogic)
    const {
        setExtensionPercentage,
        showHeatmapInfo,
        hideHeatmapInfo,
        showActionsInfo,
        hideActionsInfo,
        showFlags,
        hideFlags,
        setHedgehogMode,
    } = useActions(toolbarButtonLogic)
    const { buttonActionsVisible, showActionsTooltip } = useValues(actionsTabLogic)
    const { hideButtonActions, showButtonActions } = useActions(actionsTabLogic)
    const { actionCount, allActionsLoading } = useValues(actionsLogic)

    const { enableInspect, disableInspect } = useActions(elementsLogic)
    const { inspectEnabled, selectedElement } = useValues(elementsLogic)

    const { enableHeatmap, disableHeatmap } = useActions(heatmapLogic)
    const { heatmapEnabled, heatmapLoading, elementCount, showHeatmapTooltip } = useValues(heatmapLogic)

    const { isAuthenticated } = useValues(toolbarLogic)
    const { authenticate, logout } = useActions(toolbarLogic)

    const globalMouseMove = useRef((e: MouseEvent) => {
        e
    })

    const { countFlagsOverridden } = useValues(featureFlagsLogic)

    useEffect(() => {
        globalMouseMove.current = function (e: MouseEvent): void {
            const buttonDiv = getShadowRoot()?.getElementById('button-toolbar')
            if (buttonDiv) {
                const rect = buttonDiv.getBoundingClientRect()
                const x = rect.left + rect.width / 2
                const y = rect.top + rect.height / 2
                const distance = Math.sqrt((e.clientX - x) * (e.clientX - x) + (e.clientY - y) * (e.clientY - y))

                const maxDistance = isAuthenticated ? 300 : 100

                if (distance >= maxDistance && toolbarButtonLogic.values.extensionPercentage !== 0) {
                    setExtensionPercentage(0)
                }
            }
        }
        window.addEventListener('mousemove', globalMouseMove.current)
        return () => window.removeEventListener('mousemove', globalMouseMove.current)
    }, [isAuthenticated])

    // using useLongPress for short presses (clicks) since it detects if the element was dragged (no click) or not (click)
    const clickEvents = useLongPress(
        (clicked) => {
            if (clicked) {
                if (isAuthenticated) {
                    setExtensionPercentage(extensionPercentage === 1 ? 0 : 1)
                } else {
                    authenticate()
                }
            }
        },
        {
            ms: undefined,
            clickMs: 1 as any,
            touch: true,
            click: true,
        }
    )

    const borderRadius = 14
    const buttonWidth = 42
    let n = 0

    // TODO
    // - be able to close it
    // - be able to switch to hedgehog mode
    // - be able to launch help
    // - 3000 styling of the inspect UI
    // - animate height when opening menu
    // - style scroll bars?
    return (
        <div className={'relative'}>
            <div
                className={
                    'absolute bottom Toolbar3000 Toolbar3000__menu w-auto mx-2 rounded-t flex flex-col items-center'
                }
            >
                {heatmapInfoVisible ? <HeatmapStats /> : null}
                {heatmapEnabled ? (
                    <div className={'flex flex-row gap-2 w-full items-center justify-between px-2 pt-1'}>
                        <div className={'flex flex-grow'}>
                            <h5 className={'flex flex-row items-center'}>
                                Heatmap:{' '}
                                {heatmapLoading ? <Spinner textColored={true} /> : <>{elementCount} elements</>}
                            </h5>
                        </div>
                        <LemonButton
                            size={'small'}
                            icon={heatmapInfoVisible ? <IconArrowDown /> : <IconArrowUp />}
                            status={'stealth'}
                            onClick={
                                heatmapInfoVisible
                                    ? () => {
                                          hideHeatmapInfo()
                                          disableHeatmap()
                                      }
                                    : showHeatmapInfo
                            }
                            active={heatmapInfoVisible}
                        />
                    </div>
                ) : null}
                {actionsInfoVisible ? <ActionsTab /> : null}
                {buttonActionsVisible ? (
                    <div className={'flex flex-row gap-2 w-full items-center justify-between px-2 pt-1'}>
                        <div className={'flex flex-grow'}>
                            <h5 className={'flex flex-row items-center'}>
                                Actions:{' '}
                                <div className="whitespace-nowrap text-center">
                                    {allActionsLoading ? (
                                        <Spinner textColored={true} />
                                    ) : (
                                        <LemonBadge.Number size={'small'} count={actionCount} showZero />
                                    )}
                                </div>
                            </h5>
                        </div>
                        <LemonButton
                            size={'small'}
                            icon={actionsInfoVisible ? <IconArrowDown /> : <IconArrowUp />}
                            status={'stealth'}
                            onClick={
                                actionsInfoVisible
                                    ? () => {
                                          hideActionsInfo()
                                          hideButtonActions()
                                      }
                                    : showActionsInfo
                            }
                            active={actionsInfoVisible}
                        />
                    </div>
                ) : null}

                {flagsVisible ? <FeatureFlags /> : null}
                {flagsVisible ? (
                    <div className={'flex flex-row gap-2 w-full items-center justify-between px-2 pt-1'}>
                        <div className={'flex flex-grow'}>
                            <h5 className={'flex flex-row items-center'}>
                                Feature flags: {countFlagsOverridden} overridden
                            </h5>
                        </div>
                        <LemonButton
                            size={'small'}
                            icon={<IconArrowDown />}
                            status={'stealth'}
                            onClick={hideFlags}
                            active={flagsVisible}
                        />
                    </div>
                ) : null}
            </div>
            <div className={'Toolbar3000 px-2 w-auto h-10 space-x-2 rounded-lg flex flex-row items-center'}>
                <IconDragHandle className={'text-2xl floating-toolbar-button cursor-grab'} />
                <LemonDivider vertical={true} className={'h-full bg-border-bold-3000'} />
                {isAuthenticated ? (
                    <>
                        <LemonButton
                            title={'Inspect'}
                            icon={<IconMagnifier />}
                            status={'stealth'}
                            onClick={inspectEnabled ? disableInspect : enableInspect}
                            active={inspectEnabled}
                        />
                        <LemonButton
                            title={'Heatmap'}
                            icon={<IconClick />}
                            status={'stealth'}
                            onClick={heatmapEnabled ? disableHeatmap : enableHeatmap}
                            active={heatmapEnabled}
                        />
                        <LemonButton
                            title={'Actions'}
                            icon={<IconTarget />}
                            status={'stealth'}
                            onClick={buttonActionsVisible ? hideButtonActions : showButtonActions}
                            active={buttonActionsVisible}
                        />
                        <LemonButton
                            title={'Feature flags'}
                            icon={<IconFlag />}
                            status={'stealth'}
                            onClick={flagsVisible ? hideFlags : showFlags}
                            active={flagsVisible}
                        />
                        <LemonButton title={'More'} icon={<IconMenu />} status={'stealth'} onClick={() => {}} />
                        <LemonDivider vertical={true} className={'h-full bg-border-bold-3000'} />
                    </>
                ) : null}
                <Logomark3000 />
            </div>
        </div>
    )

    return (
        <Circle
            rootNode
            width={62}
            className="floating-toolbar-button"
            content={
                !hedgehogMode ? (
                    // eslint-disable-next-line react/forbid-dom-props
                    <div style={{ width: 45, display: 'flex' }}>
                        <Logomark />
                    </div>
                ) : undefined
            }
            {...clickEvents}
            onMouseOver={isAuthenticated ? undefined : () => setExtensionPercentage(1)}
            style={{
                borderRadius: 10,
                height: 46,
                marginTop: -23,
                pointerEvents: hedgehogMode ? 'none' : undefined,
                display: hedgehogMode ? 'none' : 'flex',
                cursor: 'pointer',
            }}
            zIndex={3}
        >
            <Circle
                width={26}
                extensionPercentage={extensionPercentage}
                distance={closeDistance}
                rotation={closeRotation}
                content={<Close style={{ width: 14, height: 14 }} />}
                zIndex={extensionPercentage > 0.95 ? 5 : 2}
                onClick={logout}
                style={{
                    cursor: 'pointer',
                    background: '#393939',
                    borderRadius: 6,
                    color: 'white',
                    transform: `scale(${0.2 + 0.8 * extensionPercentage})`,
                }}
            />

            <Circle
                width={26}
                extensionPercentage={extensionPercentage}
                distance={hedgehogModeDistance}
                rotation={hedgehogModeRotation}
                content="🦔"
                zIndex={extensionPercentage > 0.95 ? 5 : 2}
                onClick={() => setHedgehogMode(!hedgehogMode)}
                style={{
                    cursor: 'pointer',
                    background: '#FFF',
                    borderRadius: 6,
                    color: 'white',
                    transform: `scale(${0.2 + 0.8 * extensionPercentage})`,
                }}
            />
            {isAuthenticated ? (
                <>
                    <Circle
                        width={32}
                        extensionPercentage={extensionPercentage}
                        distance={helpButtonOnTop ? 75 : 55}
                        rotation={helpButtonOnTop ? (side === 'left' ? -95 + 360 : -95) : 90}
                        content={<IconHelpOutline style={{ fontSize: 22 }} />}
                        label="Help"
                        zIndex={2}
                        onClick={() => window.open(HELP_URL, '_blank')?.focus()}
                        labelStyle={{ opacity: extensionPercentage > 0.8 ? (extensionPercentage - 0.8) / 0.2 : 0 }}
                        style={{
                            cursor: 'pointer',
                            background: '#777',
                            color: 'white',
                            borderRadius: 10,
                            transform: `scale(${0.2 + 0.8 * extensionPercentage})`,
                        }}
                    />

                    <Circle
                        width={buttonWidth}
                        x={side === 'left' ? 80 : -80}
                        y={toolbarListVerticalPadding + n++ * 60}
                        extensionPercentage={inspectExtensionPercentage}
                        rotationFixer={(r) => (side === 'right' && r < 0 ? 360 : 0)}
                        label="Inspect"
                        labelPosition={side === 'left' ? 'right' : 'left'}
                        labelStyle={{
                            opacity: inspectExtensionPercentage > 0.8 ? (inspectExtensionPercentage - 0.8) / 0.2 : 0,
                        }}
                        content={
                            <div className="relative">
                                <Magnifier style={{ height: 34, paddingTop: 2 }} engaged={inspectEnabled} />
                                {inspectEnabled && selectedElement ? (
                                    <div className="absolute top-2 left-2.5 text-white text-xs">
                                        <Close style={{ width: 10, height: 10 }} />
                                    </div>
                                ) : null}
                            </div>
                        }
                        zIndex={1}
                        onClick={inspectEnabled ? disableInspect : enableInspect}
                        style={{
                            cursor: 'pointer',
                            background: inspectEnabled ? '#8F98FF' : '#E7EAFD',
                            transition: 'transform 0.2s, color 0.2s, background: 0.2s',
                            transform: `scale(${0.2 + 0.8 * inspectExtensionPercentage})`,
                            borderRadius,
                        }}
                    />
                    <Circle
                        width={buttonWidth}
                        x={side === 'left' ? 80 : -80}
                        y={toolbarListVerticalPadding + n++ * 60}
                        extensionPercentage={heatmapExtensionPercentage}
                        rotationFixer={(r) => (side === 'right' && r < 0 ? 360 : 0)}
                        label={heatmapEnabled && !heatmapLoading ? null : 'Heatmap'}
                        labelPosition={side === 'left' ? 'right' : 'left'}
                        labelStyle={{
                            opacity:
                                heatmapEnabled && !heatmapLoading
                                    ? 0
                                    : heatmapExtensionPercentage > 0.8
                                    ? (heatmapExtensionPercentage - 0.8) / 0.2
                                    : 0,
                        }}
                        content={<Fire style={{ height: 26 }} engaged={heatmapEnabled} animated={heatmapLoading} />}
                        zIndex={2}
                        onClick={heatmapEnabled ? disableHeatmap : enableHeatmap}
                        style={{
                            cursor: 'pointer',
                            background: heatmapEnabled ? '#FF9870' : '#FEE3DA',
                            transform: `scale(${0.2 + 0.8 * heatmapExtensionPercentage})`,
                            borderRadius,
                        }}
                    >
                        {heatmapEnabled && !heatmapLoading ? (
                            <Circle
                                width={26}
                                x={
                                    (side === 'left' ? 50 : -50) *
                                    heatmapExtensionPercentage *
                                    heatmapExtensionPercentage
                                }
                                y={0}
                                content={
                                    <Tooltip
                                        visible={showHeatmapTooltip}
                                        title="Click for details"
                                        placement={side === 'left' ? 'right' : 'left'}
                                        getPopupContainer={getShadowRootPopoverContainer}
                                    >
                                        <div className="whitespace-nowrap text-center">{elementCount}</div>
                                    </Tooltip>
                                }
                                zIndex={4}
                                onClick={heatmapInfoVisible ? hideHeatmapInfo : showHeatmapInfo}
                                style={{
                                    cursor: 'pointer',
                                    background: heatmapInfoVisible ? 'hsla(17, 100%, 47%, 1)' : 'hsla(17, 84%, 95%, 1)',
                                    color: heatmapInfoVisible ? '#FFEB3B' : 'hsl(17, 64%, 32%)',
                                    width: 'auto',
                                    minWidth: 26,
                                    fontSize: '20px',
                                    lineHeight: '26px',
                                    padding: '0 4px',
                                    transform: `scale(${0.2 + 0.8 * heatmapExtensionPercentage})`,
                                    borderRadius: 7,
                                }}
                            />
                        ) : null}
                    </Circle>
                    <Circle
                        width={buttonWidth}
                        x={side === 'left' ? 80 : -80}
                        y={toolbarListVerticalPadding + n++ * 60}
                        extensionPercentage={actionsExtensionPercentage}
                        rotationFixer={(r) => (side === 'right' && r < 0 ? 360 : 0)}
                        label={buttonActionsVisible && (!allActionsLoading || actionCount > 0) ? null : 'Actions'}
                        labelPosition={side === 'left' ? 'right' : 'left'}
                        labelStyle={{
                            opacity: actionsExtensionPercentage > 0.8 ? (actionsExtensionPercentage - 0.8) / 0.2 : 0,
                        }}
                        content={
                            <IconTarget
                                style={{ fontSize: '28px', color: buttonActionsVisible ? '#fef5e2' : '#f1aa04' }}
                            />
                        }
                        zIndex={1}
                        onClick={buttonActionsVisible ? hideButtonActions : showButtonActions}
                        style={{
                            cursor: 'pointer',
                            transform: `scale(${0.2 + 0.8 * actionsExtensionPercentage})`,
                            background: buttonActionsVisible ? '#f1aa04' : '#fef5e2',
                            borderRadius,
                        }}
                    >
                        {buttonActionsVisible && (!allActionsLoading || actionCount > 0) ? (
                            <Circle
                                width={26}
                                x={
                                    (side === 'left' ? 50 : -50) *
                                    actionsExtensionPercentage *
                                    actionsExtensionPercentage
                                }
                                y={0}
                                content={
                                    <Tooltip
                                        visible={showActionsTooltip}
                                        title="Click for details"
                                        placement={side === 'left' ? 'right' : 'left'}
                                        getPopupContainer={getShadowRootPopoverContainer}
                                    >
                                        <div className="whitespace-nowrap text-center">{actionCount}</div>
                                    </Tooltip>
                                }
                                zIndex={4}
                                onClick={actionsInfoVisible ? hideActionsInfo : showActionsInfo}
                                style={{
                                    cursor: 'pointer',
                                    background: actionsInfoVisible ? '#f1aa04' : '#fef5e2',
                                    color: actionsInfoVisible ? '#fef5e2' : '#f1aa04',
                                    width: 'auto',
                                    minWidth: 26,
                                    fontSize: '20px',
                                    lineHeight: '26px',
                                    padding: '0 4px',
                                    transform: `scale(${0.2 + 0.8 * actionsExtensionPercentage})`,
                                    borderRadius: 7,
                                }}
                            />
                        ) : null}
                    </Circle>
                    <Circle
                        width={buttonWidth}
                        x={side === 'left' ? 80 : -80}
                        y={toolbarListVerticalPadding + n++ * 60}
                        extensionPercentage={featureFlagsExtensionPercentage}
                        rotationFixer={(r) => (side === 'right' && r < 0 ? 360 : 0)}
                        label="Feature Flags"
                        labelPosition={side === 'left' ? 'right' : 'left'}
                        labelStyle={{
                            opacity:
                                featureFlagsExtensionPercentage > 0.8
                                    ? (featureFlagsExtensionPercentage - 0.8) / 0.2
                                    : 0,
                        }}
                        content={<Flag style={{ height: 29 }} engaged={flagsVisible} />}
                        zIndex={1}
                        onClick={flagsVisible ? hideFlags : showFlags}
                        style={{
                            cursor: 'pointer',
                            transform: `scale(${0.2 + 0.8 * featureFlagsExtensionPercentage})`,
                            background: flagsVisible ? '#94D674' : '#D6EBCC',
                            borderRadius,
                        }}
                    />
                </>
            ) : null}
        </Circle>
    )
}
