import _ from 'the-lodash'
import React, { Fragment } from 'react'
import Autocomplete from 'react-autocomplete';
import { isEmptyArray, isEmptyObject } from '../../utils/util'
import { KIND_TO_USER_MAPPING } from '@kubevious/helpers/dist/docs'
import { prettyKind } from '../../utils/ui-utils'
import DnShortcutComponent from '../DnShortcutComponent'
import BaseComponent from '../../HOC/BaseComponent'
import { FILTERS_LIST } from '../../boot/filterData'
import cx from 'classnames'

import './styles.scss'

class Search extends BaseComponent {
    constructor(props) {
        super(props)

        this.registerService({ kind: 'diagram' })

        this.kinds = this.getKindsList()

        this.state = {
            result: [],
            totalCount: 0,
            value: {},
            savedFilters: {},
            currentInput: {
                labels: {
                    key: '',
                    value: '',
                },
                annotations: {
                    key: '',
                    value: '',
                },
            },
            autocomplete: {
                labels: {
                    keys: [],
                    values: []
                },
                annotations: {
                    keys: [],
                    values: []
                }
            },
        }
    }

    fetchResults(criteria) {
        this.service.fetchSearchResults(criteria, (response) => {
            this.setState({
                result: response.results,
                totalCount: response.totalCount,
                wasFiltered: response.wasFiltered
            })
        })
    }

    fetchValues(type, key, criteria) {
        if (!key) {
            return
        }
        this.service.fetchAutocompleteValues(type, { key, criteria }, (response) => {
                this.setState((prevState) => {
                    prevState.autocomplete[type].values = response
                    return {
                        autocomplete: {
                            ...prevState.autocomplete,
                        },
                    }
                })
            })

    }

    fetchKeys(type, criteria) {
        console.log(this.service)
        return this.service.fetchAutocompleteKeys(
            type,
            { criteria },
            (response) => {
                this.setState((prevState) => {
                    prevState.autocomplete[type].keys = response
                    return {
                        autocomplete: {
                            ...prevState.autocomplete,
                        },
                    }
                })
            }
        )
    }

    getKindsList() {
        let kindsArray = Object.entries(
            KIND_TO_USER_MAPPING
        ).map(([key, value]) => ({ title: value, payload: key }))

        kindsArray = _.orderBy(kindsArray, x => x.title);

        return {
            payload: 'kind',
            shownValue: 'Kind',
            values: kindsArray,
        }
    }

    checkForInputFilter(payload) {
        return payload === 'labels' || payload === 'annotations'
    }

    handleChange(e) {
        const input = e.target.value
        this.setState(
            (prevState) => {
                const valueInState = prevState.value || {}
                if (!input) {
                    delete valueInState.criteria
                    return {
                        value: { ...valueInState },
                    }
                }
                return {
                    value: { ...valueInState, criteria: input },
                }
            },
            () => {
                this.fetchResults(this.state.value)
            }
        )
    }

    handleFilterChange(name, title) {
        this.setState(
            (prevState) => {
                const valueInState = prevState.value || {}
                const savedFilters = prevState.savedFilters || {}
                if (prevState.value[name] === title) {
                    delete valueInState[name]
                    return {
                        value: { ...valueInState },
                    }
                }
                prevState.savedFilters[name] &&
                    delete savedFilters[name]
                return {
                    value: { ...valueInState, [name]: title },
                    savedFilters: { ...savedFilters },
                }
            },
            () => {
                this.fetchResults(this.state.value)
            }
        )
    }

    handleFilterInput(value, name, title) {
        this.setState((prevState) => {
            if (title === 'key') {
                this.fetchKeys(name, value)
                prevState.currentInput[name].key = value
                return {
                    currentInput: {
                        ...prevState.currentInput,
                    },
                }
            }
            const currentKey = prevState.currentInput[name].key
            this.fetchValues(name, currentKey, value)
            prevState.currentInput[name].value = value
            return {
                currentInput: {
                    ...prevState.currentInput,
                },
            }
        })
    }

    addInputField(type) {
        this.setState(
            (prevState) => {
                const input = prevState.currentInput[type]
                const savedInState = prevState.savedFilters
                const currentInputInState = prevState.currentInput
                const searchValue = prevState.value[type] || []
                const elementIndex = searchValue.findIndex((el) => el.key === input.key)
                const searchValueInSaved = savedInState[type] || []
                elementIndex !== -1
                    ? (searchValue[elementIndex] = input)
                    : searchValue.push(input)
                const filteredSaved = searchValueInSaved.filter(el => el.key !== input.key)
                savedInState[type] = filteredSaved
                isEmptyArray(filteredSaved) && delete savedInState[type]
                currentInputInState[type] = { key: '', value: '' }
                return {
                    value: {
                        ...prevState.value,
                        [type]: searchValue,
                    },
                    savedFilters: {
                        ...savedInState
                    },
                    currentInput: {
                        ...currentInputInState,
                    },
                }
            },
            () => {
                this.fetchResults(this.state.value)
            }
        )
        return false
    }

    deleteFilter(key, val) {
        this.setState(
            (prevState) => {
                const valueInState = prevState.value
                const savedInState = prevState.savedFilters
                const currentFilters = valueInState[key] || []
                const currentSavedFilters = savedInState[key] || []

                if (
                    !this.checkForInputFilter(key)
                ) {
                    valueInState[key] && delete valueInState[key]
                    savedInState[key] &&
                        delete savedInState[key]
                    return {
                        value: { ...valueInState },
                        savedFilters: { ...savedInState },
                    }
                }

                valueInState[key] = currentFilters.filter(
                    (filter) => filter.key !== val.key
                )
                savedInState[key] = currentSavedFilters.filter(
                    (filter) => filter.key !== val.key
                )

                isEmptyArray(valueInState[key]) &&
                    delete valueInState[key]
                isEmptyArray(savedInState[key]) &&
                    delete savedInState[key]

                return {
                    value: {
                        ...valueInState,
                    },
                    savedFilters: {
                        ...savedInState,
                    },
                }
            },
            () => {
                this.fetchResults(this.state.value)
            }
        )
        return false
    }

    handleEditFilter(type, filterVal) {
        this.setState((prevState) => {
            const { key, value } = filterVal

            return {
                currentInput: {
                    ...prevState.currentInput,
                    [type]: {
                        key,
                        value,
                        disabled: true,
                    }
                },
            }
        })
    }

    toggleFilter(type, filterVal) {
        const { key, value } = filterVal
        this.setState(
            (prevState) => {
                const valueInState = prevState.value
                const savedInState = prevState.savedFilters
                if (!this.checkForInputFilter(type)) {
                    const deleteFromSaved = () => {
                        valueInState[type] = savedInState[type]
                        delete savedInState[type]
                    }

                    const addToSaved = () => {
                        savedInState[type] = valueInState[type]
                        delete valueInState[type]
                    }
                    savedInState[type]
                        ? deleteFromSaved()
                        : addToSaved()
                    return {
                        value: { ...valueInState },
                        savedFilters: { ...savedInState },
                    }
                }
                let valueArray = valueInState[type] || []
                let savedArray = savedInState[type] || []
                let changedValueArray = valueArray.filter((el) => el.key !== key)
                let changedSavedArray = savedArray.filter((el) => el.key !== key)

                if (savedInState[type]) {

                    const compareLength =
                        changedSavedArray.length === savedArray.length

                    savedInState[type] = compareLength
                        ? [...savedArray, {key, value}]
                        : changedSavedArray
                    valueInState[type] = compareLength
                        ? changedValueArray
                        : [...valueArray, {key, value}]

                    if (isEmptyArray(valueInState[type])) {
                        return
                    } else if (isEmptyArray(savedInState[type])) {
                        delete savedInState[type]
                        return
                    }

                    return {
                        value: {
                            ...valueInState,
                        },
                        savedFilters: {
                            ...savedInState,
                        },
                    }
                }

                valueInState[type] = changedValueArray
                isEmptyArray(changedValueArray) && delete valueInState[type]
                return {
                    value: { ...valueInState },
                    savedFilters: {
                        ...savedInState,
                        [type]: [{key, value}],
                    },
                }
            },
            () => {
                this.fetchResults(this.state.value)
            }
        )
    }

    clearFilter(type) {
        this.setState((prevState) => {
            const { key } = prevState.currentInput[type]
            const valueInState = prevState.value
            const changedValueArray =
                valueInState[type] &&
                valueInState[type].filter((elem) => elem.key !== key)

            isEmptyArray(changedValueArray)
                ? delete valueInState[type]
                : (valueInState[type] = changedValueArray)
            return {
                currentInput: {
                    ...prevState.currentInput,
                    [type]: {
                        key: '',
                        value: '',
                    },
                value: {
                        ...valueInState,
                    },
                },
            }
        },
            () => {
                this.fetchResults(this.state.value)
            }
        )
    }

    renderPrettyView(val) {
        const { key, value, kind, count } = val
        if (kind) {
            return `${kind}: ${count}`
        }
        return Array.isArray(val)
            ? val.map((criteria, index) => index === val.length - 1 ? criteria : `${criteria} | `)
            : `${key}: ${value.substring(0, 50)}`
    }

    renderActiveFilters(type, val) {
        const { savedFilters } = this.state
        const { key = null } = val
        const checkInSavedFilters =
            savedFilters[type] && key
                ? savedFilters[type].find((el) => el.key === key)
                : savedFilters[type]
        if (!val) return
        return (
            <div
                className={cx('active-filter-box', {
                    deactivated: checkInSavedFilters,
                })}
                key={type}
            >
                <span className="filter-key">{`${type}: `}</span>
                <span className="filter-val">
                    {typeof val === 'string'
                        ? prettyKind(val)
                        : this.renderPrettyView(val)}
                </span>
                {this.checkForInputFilter(type) && (
                    <button
                        className="filter-btn edit"
                        onClick={() => this.handleEditFilter(type, val)}
                    ></button>
                )}
                <button
                    className={cx('filter-btn toggle-show', {
                        hide: checkInSavedFilters,
                    })}
                    title="Toggle show/hide"
                    onClick={() => this.toggleFilter(type, val)}
                />
                <button
                    className="filter-btn del"
                    title="Delete"
                    onClick={() => this.deleteFilter(type, val)}
                >
                    &times;
                </button>
            </div>
        )
    }

    compareForSort(a, b) {
        let valA = a.key.toUpperCase()
        let valB = b.key.toUpperCase()

        let comparison = 0;
        if (valA > valB) {
            comparison = 1;
        } else if (valA < valB) {
            comparison = -1;
        }
        return comparison;
    }

    renderDividedActiveFilters(key, val) {
        if (!val) {
            return
        }
        const saved = this.state.savedFilters[key] || []
        const sumOfValues = this.state.value[key]
            ? this.state.value[key].concat(saved)
            : saved

        return sumOfValues.sort(this.compareForSort).map((filter) => {
            if (!isEmptyObject(filter)) {
                return this.renderActiveFilters(key, filter)
            }
            return
        })
    }

    render() {
        const {
            result,
            totalCount,
            value,
            savedFilters,
            currentInput,
            wasFiltered
        } = this.state

        return (
            <div className="Search-wrapper p-40 overflow-hide">
                <div className="form-group has-success">
                    <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Search"
                        value={value.criteria}
                        autoFocus
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <div className="active-filters">
                    {(!isEmptyObject(value) || !isEmptyObject(savedFilters)) && (
                        <>
                            {Object.entries(
                                Object.assign({}, value, savedFilters)
                            ).sort().map(
                                ([key, val]) =>
                                    key !== 'criteria' &&
                                    (this.checkForInputFilter(key)
                                        ? this.renderDividedActiveFilters(key, val)
                                        : this.renderActiveFilters(key, val))
                            )}
                        </>
                    )}
                </div>
                <div className="search-area">
                    <div className="filter-list filter-box">
                        {[this.kinds, ...FILTERS_LIST].map((el) => (
                            <details open key={el.payload}>
                                <summary
                                    className={cx('filter-list inner', {
                                        'is-active': !!value[el.payload],
                                    })}
                                >
                                    {el.shownValue}
                                </summary>
                                <div className="inner-items">
                                    {this.checkForInputFilter(el.payload) ? (
                                        <div className="filter-input-box">
                                            {el.values.map((item) => {
                                                const currentKey =
                                                    currentInput[el.payload].key
                                                const currentVal =
                                                    currentInput[el.payload]
                                                        .value
                                                return (
                                                    <Fragment key={item.title}>
                                                        <label>
                                                            {item.title}
                                                        </label>
                                                        {item.title ===
                                                            'Label' ||
                                                        item.title ===
                                                            'Annotation' ? (
                                                            <Autocomplete
                                                                getItemValue={(value) => value}
                                                                items={this.state.autocomplete[
                                                                    el.payload
                                                                ].keys}
                                                                value={
                                                                    currentKey
                                                                }
                                                                onChange={(e) =>
                                                                    this.handleFilterInput(
                                                                        e.target
                                                                            .value,
                                                                        el.payload,
                                                                        item.payload
                                                                    )
                                                                }
                                                                onSelect={(val) =>
                                                                    this.handleFilterInput(
                                                                        val,
                                                                        el.payload,
                                                                        item.payload,
                                                                    )
                                                                }
                                                                renderItem={(content) => (
                                                                    <div>
                                                                        {content}
                                                                    </div>
                                                                )}
                                                                renderMenu={(items) => (
                                                                    <div
                                                                        className="autocomplete"
                                                                        children={
                                                                            items
                                                                        }
                                                                    />
                                                                )}
                                                                renderInput={(props) => (
                                                                    <input
                                                                        disabled={
                                                                            currentInput[
                                                                                el
                                                                                    .payload
                                                                            ]
                                                                                .disabled
                                                                        }
                                                                        {...props}
                                                                    />
                                                                )}
                                                                onMenuVisibilityChange={() => this.fetchKeys(el.payload, currentKey)}
                                                            />
                                                        ) : (
                                                            <Autocomplete
                                                                getItemValue={(value) => value}
                                                                items={this.state.autocomplete[
                                                                    el.payload
                                                                ].values}
                                                                value={
                                                                    currentVal
                                                                }
                                                                onChange={(e) =>
                                                                    this.handleFilterInput(
                                                                        e.target
                                                                            .value,
                                                                        el.payload,
                                                                        item.payload
                                                                    )
                                                                }
                                                                onSelect={(val) =>
                                                                    this.handleFilterInput(
                                                                        val,
                                                                        el.payload,
                                                                        item.payload,
                                                                    )
                                                                }
                                                                renderItem={(content) => (
                                                                    <div>
                                                                        {content.substring(0, 70)}
                                                                    </div>
                                                                )}
                                                                renderMenu={(items) => (
                                                                    <div
                                                                        className="autocomplete"
                                                                        children={
                                                                            items
                                                                        }
                                                                    />
                                                                )}
                                                                renderInput={(props) => (
                                                                    <input
                                                                        disabled={
                                                                            !currentKey
                                                                        }
                                                                        {...props}
                                                                    />
                                                                )}
                                                                onMenuVisibilityChange={() => this.fetchValues(el.payload, currentKey, currentVal)}
                                                            />
                                                        )}
                                                    </Fragment>
                                                )
                                            })}
                                            {currentInput[el.payload].key &&
                                                currentInput[el.payload]
                                                    .value && (
                                                    <div className="filter-input-btns">
                                                        <button
                                                            type="button"
                                                            className="add-filter-btn"
                                                            onClick={() =>
                                                                this.addInputField(
                                                                    el.payload
                                                                )
                                                            }
                                                        >
                                                            Add
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                this.clearFilter(
                                                                    el.payload
                                                                )
                                                            }
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                )}
                                        </div>
                                    ) : (
                                        el.values.map((item) => (
                                            <button
                                                key={item.title}
                                                className={
                                                    this.state.value[
                                                        el.payload
                                                    ] === item.payload
                                                        ? 'selected-filter'
                                                        : ''
                                                }
                                                onClick={() =>
                                                    this.handleFilterChange(el.payload, item.payload)
                                                }
                                            >
                                                {item.title}
                                            </button>
                                        ))
                                    )}
                                </div>
                            </details>
                        ))}
                    </div>
                    <div className="search-results">
                        {isEmptyArray(result) ? (
                            <div className="result-placeholder">
                                { wasFiltered
                                    ? 'No items matching search criteria'
                                    : 'No search criteria defined'
                                }
                            </div>
                        ) : (
                            <>
                                {result.map((item, index) => (
                                    <DnShortcutComponent
                                        key={index}
                                        dn={item.dn}
                                        sharedState={this.sharedState}
                                    />
                                ))}
                                {result.length < totalCount && (
                                    <div className="limited-results-msg">
                                        The first 200 items are shown. Please
                                        refine your search query to see more
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
