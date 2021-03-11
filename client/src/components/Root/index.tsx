import React from "react"
import _ from "the-lodash"
import "./styles.scss"
import { ClassComponent } from "@kubevious/ui-framework"
import { FieldsSaver } from "../../utils/save-fields"
import { ErrorBox, Popup } from '@kubevious/ui-components';
import { GoldenLayout } from '@kubevious/ui-components';
import Header from "../Header"
import SEO from "../SEO"
import ClusterScreen from '../ClusterScreen'
import { RootState } from "./types"
import { sharedState } from "../../configureService";
import { components } from "./components";

export class Root extends ClassComponent<{}, RootState> {
    private _fieldsSaver: FieldsSaver
    private _latestVisibleWindows : Record<string, boolean>

    constructor(props: {} | Readonly<{}>) {
        super(props)

        this.state = {
            showPopup: false,
            popupContent: null,
            isError: false,
            error: null,
            showClustersPopup: true,
        }

        this._fieldsSaver = new FieldsSaver('Diagram')

        this.handleLayout = this.handleLayout.bind(this)
        this.closeError = this.closeError.bind(this)
        this.handleWindowClose = this.handleWindowClose.bind(this);
        this.handleOpenCluster = this.handleOpenCluster.bind(this)
        this.handleCloseClusters = this.handleCloseClusters.bind(this)

        this._latestVisibleWindows = _.makeDict(components, x => x.id, x => true);
        this.sharedState.set("visible_windows", _.clone(this._latestVisibleWindows));

        this.subscribeToSharedState(
            [
                'selected_dn',
                'time_machine_enabled',
                'time_machine_target_date',
                'time_machine_date_to',
                'time_machine_duration',
            ],
            ({
                selected_dn,
                time_machine_enabled,
                time_machine_target_date,
                time_machine_date_to,
                time_machine_duration,
            }) => {
                this._fieldsSaver.setValue({
                    selected_dn,
                    time_machine_enabled,
                    time_machine_target_date,
                    time_machine_date_to,
                    time_machine_duration,
                })
            }
        )
    }

    handleWindowClose(id: string): void {
        const visible_windows = this.sharedState.get("visible_windows");
        delete visible_windows[id];
        delete this._latestVisibleWindows[id];
        this.sharedState.set("visible_windows", visible_windows);
    }

    handleLayout(goldenLayout: GoldenLayout): void {

        this.subscribeToSharedState("visible_windows", (visible_windows) => {
            const toHide = _.keys(this._latestVisibleWindows).filter(x => !visible_windows[x]);
            const toShow = _.keys(visible_windows).filter(x => !this._latestVisibleWindows[x]);
            this._latestVisibleWindows = _.clone(visible_windows);

            for(let windowId of toHide) {
                goldenLayout.hideComponent(windowId)
            }
            for(let windowId of toShow) {
                goldenLayout.showComponent(windowId)
            }
        });

        this.subscribeToSharedState(
            ["selected_dn", "auto_pan_to_selected_dn"],
            ({ selected_dn, auto_pan_to_selected_dn }) => {
                if (selected_dn) {
                    goldenLayout.activateComponent("universeComponent")
                }
            }
        )

        this.subscribeToSharedState(
            ["rule_editor_selected_rule_id", "focus_rule_editor"],
            ({ rule_editor_selected_rule_id, focus_rule_editor }) => {
                if (rule_editor_selected_rule_id && focus_rule_editor) {
                    goldenLayout.activateComponent("ruleEditorComponent")
                    this.sharedState.set("focus_rule_editor", false)
                }
            }
        )
    }

    closeError(): void {
        this.sharedState.set("is_error", false)
        this.sharedState.set("error", null)
    }

    componentDidMount() {
        this.subscribeToSharedState(
            ["is_error", "error"],
            ({ is_error, error }) => {
                this.setState({ error: error, isError: is_error })
            }
        )

        this.subscribeToSharedState("popup_window", (popup_window) => {
            if (popup_window) {
                this.setState({
                    showPopup: true,
                    popupContent: popup_window.content,
                })
            } else {
                this.setState({
                    showPopup: false,
                    popupContent: null,
                })
            }
        })
    }

    handleOpenCluster() {
        this.setState({ showClustersPopup: true })
    }

    handleCloseClusters() {
        this.setState({
            showClustersPopup: false,
        })
    }

    render() {
        const {
            showPopup,
            popupContent,
            isError,
            error,
            showClustersPopup,
        } = this.state

        function closePopup() {
            sharedState.set('popup_window', null);
        }

        return (
            <>
                <SEO />
                <div className="mobile-wrapper">
                    <div className="logo" />
                    <div className="available-msg">
                        Sorry!
                        <br />
                        <br />
                        Kubevious works with Desktop browsers only.
                        <br />
                        <br />
                        <a
                            href="https://kubevious.io/youtube.html"
                            className="link-cta"
                        >
                            See Demo in Youtube
                        </a>
                    </div>
                </div>
                <div className='wrapper'>
                    <Header
                        windows={components}
                        handleOpenCluster={this.handleOpenCluster}
                    />

                    {showClustersPopup && (
                        <ClusterScreen
                            handleCloseClusters={this.handleCloseClusters}
                        />
                    )}

                    <GoldenLayout
                        windows={components}
                        handleLayout={this.handleLayout}
                        handleClose={this.handleWindowClose}
                    />

                    {showPopup && <Popup popupContent={popupContent}  closePopup={closePopup} />}

                    {isError && error && (
                        <ErrorBox error={error} closeError={this.closeError} />
                    )}
                </div>
            </>
        )
    }
}
