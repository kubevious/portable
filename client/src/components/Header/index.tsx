import _ from 'the-lodash'
import React from 'react'
import bugImg from '../../assets/header-btns/bug.svg'
import slackImg from '../../assets/header-btns/slack.svg'
import githubImg from '../../assets/header-btns/github.svg'
import { About } from '../About'
import { Search } from '../Search'
import { Notifications } from '../Notifications'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'
import './customStyles.scss'
import { HeaderProps, HeaderState } from './types'
import { ClassComponent } from '@kubevious/ui-framework/dist'
import { IMiscService } from '@kubevious/ui-middleware/dist'
import { GoldenLayoutWindowInfo } from "@kubevious/ui-components"
import { Cluster } from '../ClusterScreen/types'

export class Header extends ClassComponent<HeaderProps, HeaderState, IMiscService> {
    constructor(props : HeaderProps | Readonly<HeaderProps>) {
        super(props, null, { kind: "misc" })

        this.state = {
            showSettings: false,
            isLoading: false,
            hasNotifications: false,
            visible_windows: {},
            cluster: null,
        }

        this.openAbout = this.openAbout.bind(this)
        this.openSearch = this.openSearch.bind(this)
        this.detectIsVisible = this.detectIsVisible.bind(this)
        this.renderSettings = this.renderSettings.bind(this)
        this.openNotifications = this.openNotifications.bind(this)
        this.handleWindowVisibilityChange = this.handleWindowVisibilityChange.bind(this)
    }

    handleWindowVisibilityChange(windowInfo: GoldenLayoutWindowInfo) {
        const visible_windows = this.sharedState.get("visible_windows");
        if (this.detectIsVisible(windowInfo)) {
            delete visible_windows[windowInfo.id];
        } else {
            visible_windows[windowInfo.id] = true;
        }
        this.sharedState.set("visible_windows", visible_windows);
    }

    openAbout(): void {
        this.sharedState.set("popup_window", {
            title: "About",
        })

        this.service.fetchAbout((result) => {
            this.sharedState.set("popup_window", {
                title: "About",
                content: <About result={result} />,
            })
        })
    }

    openSearch(): void {
        this.sharedState.set("popup_window", {
            title: "Search",
            content: <Search />,
        })
    }

    detectIsVisible(item: GoldenLayoutWindowInfo): boolean {
        if (this.state.visible_windows[item.id]) {
            return true;
        }
        return false;
    }

    openNotifications(): void {
        this.sharedState.set("popup_window", {
            title: "Notifications",
            content: <Notifications />,
        })
    }

    renderSettings(): JSX.Element {
        const { windows } = this.props

        const closableWindows = windows.filter(x => !x.skipClose);

        return (
            <div
                id='tool-windows-menu'
                className='settings-menu'
                onMouseEnter={() => this.setState({ showSettings: true })}
                onMouseLeave={() => this.setState({ showSettings: false })}
            >
                {closableWindows.map((
                    item
                ) => (
                    <span className="s-menu-item" key={item.id}>
                        <label
                            className="ccheck"
                            id={`toolWindowShowHideLabel${item.id}`}
                        >
                            {this.detectIsVisible(item) ? "Hide" : "Show"}{" "}
                            {item.title}
                            <input
                                type="checkbox"
                                tool-window-id={item.id}
                                defaultChecked={this.detectIsVisible(item)}
                                onChange={(e) =>
                                    this.handleWindowVisibilityChange(item)
                                }
                            />
                            <span className="checkmark" />
                        </label>
                    </span>
                ))}
            </div>
        )
    }

    componentDidMount() {

        this.subscribeToSharedState("visible_windows", (visible_windows) => {
            this.setState({
                visible_windows: visible_windows
            })
        });

        this.subscribeToSharedState("is_loading", (is_loading) => {
            this.setState({ isLoading: is_loading })
        })

        this.subscribeToSharedState('selected_cluster', (selected_cluster: Cluster) => {
            this.setState({ cluster: selected_cluster })
        })

        this.subscribeToSharedState("notifications_info", (info) => {
            const hasNotifications =
                info && _.isNotNullOrUndefined(info.count) && info.count > 0
            this.setState({ hasNotifications: hasNotifications })
        })
    }

    render() {
        const { 
            showSettings,
            hasNotifications,
            isLoading,
            cluster
        } = this.state

        return (
            <div className='header'>
                <a className='logo' href='/' />
                <div className='loading-icon'>
                    {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
                </div>
                <div className='selected-cluster'>
                    {!cluster && (
                        <div className='cluster'>
                            <div
                                className='not-selected-text'
                                onClick={this.props.handleOpenCluster}
                            >
                                no cluster selected
                            </div>
                        </div>
                    )}

                    {cluster && (
                        <div className='cluster'>
                            <img
                                className='cluster-logo'
                                src={`/img/clusters/${cluster.kind}.svg`}
                                alt={cluster.kind}
                            />
                            <div
                                className='cluster-name'
                                onClick={this.props.handleOpenCluster}
                            >
                                {cluster.name}
                            </div>
                        </div>
                    )}
                </div>
                <div className='actions'>
                    {hasNotifications && (
                        <div className="btn-container">
                            <button
                                id="btnNotifications"
                                type="button"
                                className="btn btn-notifications"
                                onClick={this.openNotifications}
                            ></button>
                            <span className="tooltiptext">Notifications</span>
                        </div>
                    )}

                    <div className='btn-container'>
                        <button
                            id='btnHeaderSearch'
                            type='button'
                            className='btn btn-search'
                            onClick={this.openSearch}
                        />
                        <span className='tooltiptext'>Object Search</span>
                    </div>

                    <div className='btn-container'>
                        <button
                            className='btn btn-settings'
                            onMouseEnter={() =>
                                this.setState({ showSettings: true })
                            }
                            onMouseLeave={() =>
                                this.setState({ showSettings: false })
                            }
                        />
                        {showSettings && this.renderSettings()}
                    </div>

                    <div className="btn-container">
                        <button
                            id="btnHeaderSearch"
                            type="button"
                            className="btn btn-search"
                            onClick={this.openSearch}
                        />
                        <span className="tooltiptext">Object Search</span>
                    </div>

                    <div className="btn-container">
                        <button
                            className="btn btn-settings"
                            onMouseEnter={() =>
                                this.setState({ showSettings: true })
                            }
                            onMouseLeave={() =>
                                this.setState({ showSettings: false })
                            }
                        />
                        {showSettings && this.renderSettings()}
                    </div>

                    <div className="btn-container">
                        <button
                            id="btnHeaderAbout"
                            type="button"
                            className="btn btn-about"
                            onClick={this.openAbout}
                        ></button>
                        <span className="tooltiptext">About Kubevious</span>
                    </div>

                    <div className="btn-container">
                        <a
                            href="https://github.com/kubevious/kubevious/issues/new/choose"
                            target="_blank"
                            className="btn btn-bug"
                        >
                            <img src={bugImg} alt="bug" />
                        </a>
                        <span className="tooltiptext">Report Issues</span>
                    </div>

                    <div className="btn-container">
                        <a
                            href="https://github.com/kubevious/kubevious"
                            target="_blank"
                            className="btn btn-github"
                        >
                            <img src={githubImg} alt="github" />
                        </a>
                        <span className="tooltiptext">GitHub Project</span>
                    </div>

                    <div className="btn-container">
                        <a
                            href="https://kubevious.io/slack"
                            target="_blank"
                            className="btn btn-slack"
                        >
                            <img src={slackImg} alt="slack" />
                        </a>
                        <span className="tooltiptext">Slack Channel</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
