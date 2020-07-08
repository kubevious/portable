import React  from 'react'
import bugImg from '../../assets/header-btns/bug.svg'
import slackImg from '../../assets/header-btns/slack.svg'
import githubImg from '../../assets/header-btns/github.svg'
import About from '../About'
import Search from '../Search'
import BaseComponent from '../../HOC/BaseComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './styles.scss'

class Header extends BaseComponent {
    constructor(props) {
        super(props);

        this.registerService({ kind: 'misc' })

        this.state = {
            showSettings: false,
            isLoading: false
        }

        this.openAbout = this.openAbout.bind(this)
        this.openSearch = this.openSearch.bind(this)
        this.detectIsVisible = this.detectIsVisible.bind(this)
        this.renderSettings = this.renderSettings.bind(this)
    }

    openAbout() {
        this.props.handleShowPopup()
        this.service.fetchAbout(result => {
            this.props.handlePopupContent(<About result={result}/>)
        })
    }

    openSearch() {
        this.props.handleShowPopup()
        this.props.handlePopupContent(<Search closePopup={this.props.handleClosePopup}/>)
    }

    detectIsVisible(item) {
        return document.getElementById(item.id) !== null;
    }

    renderSettings() {
        const { windows } = this.props

        return (
            <div id="tool-windows-menu" className="settings-menu"
                 onMouseEnter={() => this.setState({ showSettings: true })}
                 onMouseLeave={() => this.setState({ showSettings: false })}>
                {windows.map(item => (
                    <span className="s-menu-item" key={item.name}>
                        <label className="ccheck" id={`toolWindowShowHideLabel${item.name}Component`}>
                            {this.detectIsVisible(item) ? 'Hide' : 'Show'} {item.name}
                            <input type="checkbox" tool-window-id={item.id} defaultChecked={this.detectIsVisible(item)}
                                   onChange={(e) => this.props.handleChangeWindow(e)}/>
                            <span className="checkmark"/>
                        </label>
                    </span>
                ))}
            </div>
        )
    }

    componentDidMount() {
        this.subscribeToSharedState('is_loading',
            (is_loading) => {
                this.setState({ isLoading: is_loading })
            })
    }

    render() {
        const { showSettings, isLoading } = this.state

        return (
            <div className="header">
                <div className="logo"/>
                <div className="loading-icon">
                    {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
                </div>
                <div id="history-info" className="history-info"/>
                <div className="actions">
                    <a href="https://github.com/kubevious/kubevious/issues/new/choose" target="_blank"
                       className="btn btn-bug">
                        <img src={bugImg} alt="bug"/>

                    </a>
                    <a href="https://kubevious.io/slack" target="_blank" className="btn btn-slack">
                        <img src={slackImg} alt="slack"/>
                    </a>
                    <a href="https://github.com/kubevious/kubevious" target="_blank" className="btn btn-github">
                        <img src={githubImg} alt="github"/>
                    </a>
                    <button id="btnHeaderContext" type="button" className="btn btn-context" onClick={this.props.handleOpenContext}/>
                    <button id="btnHeaderAbout" type="button" className="btn btn-about" onClick={this.openAbout}/>
                    <button id="btnHeaderSearch" type="button" className="btn btn-search" onClick={this.openSearch}/>
                    <button className="btn btn-settings" onMouseEnter={() => this.setState({ showSettings: true })}
                            onMouseLeave={() => this.setState({ showSettings: false })}/>
                    {showSettings && this.renderSettings()}
                </div>
            </div>
        )
    }
}

export default Header
