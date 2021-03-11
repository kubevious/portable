import _ from 'the-lodash'
import React, { Fragment } from 'react'
import Autocomplete from 'react-autocomplete'
import { isEmptyArray, isEmptyObject } from '../../utils/util'
import { KIND_TO_USER_MAPPING } from '@kubevious/helpers/dist/docs'
import { prettyKind } from '../../utils/ui-utils'
import { DnShortcutComponent } from '@kubevious/ui-components'
import { ClassComponent } from '@kubevious/ui-framework'
import { FILTERS_LIST } from '../../boot/filterData'
import cx from 'classnames'

import './styles.scss'
import {
    FilterObjectType,
    FilterType,
    KindList,
    KindListValue,
    SearchState,
    SearchValue,
} from './types'
import { IDiagramService } from '@kubevious/ui-middleware'
import { SelectedData } from '../../types'

export class Search extends ClassComponent<{}, SearchState, IDiagramService> {
    kinds: KindList
    constructor(props: {} | Readonly<{}>) {
        super(props, null, { kind: 'diagram' })

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
                    values: [],
                },
                annotations: {
                    keys: [],
                    values: [],
                },
            },
        }
    }

    fetchResults(criteria: SearchValue): void {
        this.service.fetchSearchResults(
            criteria,
            (response: {
                results: SelectedData[]
                totalCount: number
                wasFiltered: boolean
            }) => {
                this.setState({
                    result: response.results,
                    totalCount: response.totalCount,
                    wasFiltered: response.wasFiltered,
                })
            }
        )
    }

    fetchValues(type: string, key: string, criteria: string): void {
        if (!key) {
            return
        }
        this.service.fetchAutocompleteValues(
            type,
            { key, criteria },
            (response) => {
                this.setState((prevState: SearchState) => {
                    prevState.autocomplete[type].values = response
                    return {
                        ...prevState,
                        autocomplete: {
                            ...prevState.autocomplete,
                        },
                    }
                })
            }
        )
    }

    fetchKeys(type: string, criteria: string): void {
        return this.service.fetchAutocompleteKeys(
            type,
            { criteria },
            (response) => {
                this.setState((prevState: SearchState) => {
                    prevState.autocomplete[type].keys = response
                    return {
                        ...prevState,
                        autocomplete: {
                            ...prevState.autocomplete,
                        },
                    }
                })
            }
        )
    }

    getKindsList(): KindList {
        let kindsArray = Object.entries(KIND_TO_USER_MAPPING)
        let newKindsArray = kindsArray
            ? kindsArray.map(([key, value]) => ({ title: value, payload: key }))
            : []
        newKindsArray =
            _.orderBy(newKindsArray, (x: KindListValue) => x.title) || []

        return {
            payload: 'kind',
            shownValue: 'Kind',
            values: newKindsArray,
        }
    }

    checkForInputFilter(payload: string): boolean {
        return payload === 'labels' || payload === 'annotations'
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const input = e.target.value
        this.setState(
            (prevState: SearchState) => {
                const valueInState = prevState.value || {}
                if (!input) {
                    delete valueInState.criteria
                    return {
                        ...prevState,
                        value: { ...valueInState },
                    }
                }
                return {
                    ...prevState,
                    value: { ...valueInState, criteria: input },
                }
            },
            () => {
                this.fetchResults(this.state.value)
            }
        )
    }

    handleFilterChange(
        name: string,
        title: string | { kind: string; count: number }
    ): void {
        this.setState(
            (prevState: SearchState) => {
                const valueInState = prevState.value || {}
                const savedFilters = prevState.savedFilters || {}
                if (prevState.value[name] === title) {
                    delete valueInState[name]
                    return {
                        ...prevState,
                        value: { ...valueInState },
                    }
                }
                prevState.savedFilters[name] && delete savedFilters[name]
                return {
                    ...prevState,
                    value: { ...valueInState, [name]: title },
                    savedFilters: { ...savedFilters },
                }
            },
            () => {
                this.fetchResults(this.state.value)
            }
        )
    }

    handleFilterInput(value: string, name: string, title: FilterType): void {
        this.setState((prevState: SearchState) => {
            if (title === 'key') {
                this.fetchKeys(name, value)
                prevState.currentInput[name].key = value
                return {
                    ...prevState,
                    currentInput: {
                        ...prevState.currentInput,
                    },
                }
            }
            const currentKey: string = prevState.currentInput[name].key
            this.fetchValues(name, currentKey, value)
            prevState.currentInput[name].value = value
            return {
                ...prevState,
                currentInput: {
                    ...prevState.currentInput,
                },
            }
        })
    }

    addInputField(type: string): boolean {
        this.setState(
            (prevState: SearchState) => {
                const input = prevState.currentInput[type]
                if (!input.key) {
                    return {
                        ...prevState,
                    }
                }
                const savedInState = prevState.savedFilters
                const currentInputInState = prevState.currentInput
                const searchValue: {
                    key: string
                    value: string
                }[] = prevState.value[type] || []
                const elementIndex = searchValue.findIndex(
                    (el) => el.key === input.key
                )
                elementIndex !== -1
                    ? (searchValue[elementIndex] = input)
                    : searchValue.push(input)
                const searchValueInSaved: {
                    key: string
                    value: string
                }[] = savedInState[type] || []
                const filteredSaved = searchValueInSaved.filter(
                    (el) => el.key !== input.key
                )
                savedInState[type] = filteredSaved
                isEmptyArray(filteredSaved) && delete savedInState[type]
                currentInputInState[type] = { key: '', value: '' }
                return {
                    value: {
                        ...prevState.value,
                        [type]: searchValue,
                    },
                    savedFilters: {
                        ...savedInState,
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

    deleteFilter(key: string, val: FilterType) {
        this.setState(
            (prevState: SearchState) => {
                const valueInState = prevState.value
                const savedInState = prevState.savedFilters
                const currentFilters = valueInState[key] || []
                const currentSavedFilters = savedInState[key] || []

                if (!this.checkForInputFilter(key)) {
                    valueInState[key] && delete valueInState[key]
                    savedInState[key] && delete savedInState[key]
                    return {
                        value: { ...valueInState },
                        savedFilters: { ...savedInState },
                    }
                }
                if (typeof val !== 'string') {
                    valueInState[key] = currentFilters.filter(
                        (filter: FilterType) =>
                            !this.keyCheck(filter, val.key || '')
                    )
                    savedInState[key] = currentSavedFilters.filter(
                        (filter: FilterType) =>
                            !this.keyCheck(filter, val.key || '')
                    )
                }

                isEmptyArray(valueInState[key]) && delete valueInState[key]
                isEmptyArray(savedInState[key]) && delete savedInState[key]

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

    handleEditFilter(type: string, filterVal: FilterType): void {
        this.setState((prevState: SearchState) => {
            if (typeof filterVal === 'string') {
                return {
                    currentInput: {
                        ...prevState.currentInput,
                        [type]: {
                            disabled: true,
                        },
                    },
                }
            }
            const { key, value } = filterVal

            return {
                currentInput: {
                    ...prevState.currentInput,
                    [type]: {
                        key,
                        value,
                        disabled: true,
                    },
                },
            }
        })
    }

    toggleFilter(type: string, filterVal: FilterType) {
        this.setState(
            (prevState: SearchState) => {
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
                    savedInState[type] ? deleteFromSaved() : addToSaved()
                    return {
                        ...prevState,
                        value: { ...valueInState },
                        savedFilters: { ...savedInState },
                    }
                }

                let valueArray: FilterType[] = valueInState[type] || []
                let savedArray: FilterType[] = savedInState[type] || []
                let changedValueArray: FilterType[] = []
                let changedSavedArray: FilterType[] = []
                if (typeof filterVal !== 'string') {
                    changedValueArray = valueArray.filter(
                        (el) => !this.keyCheck(el, filterVal.key || '')
                    )
                    changedSavedArray = savedArray.filter(
                        (el) => !this.keyCheck(el, filterVal.key || '')
                    )
                }
                if (savedInState[type]) {
                    const compareLength =
                        changedSavedArray.length === savedArray.length

                    savedInState[type] = compareLength
                        ? [...savedArray, filterVal]
                        : changedSavedArray
                    valueInState[type] = compareLength
                        ? changedValueArray
                        : [...valueArray, filterVal]

                    if (isEmptyArray(valueInState[type])) {
                        return prevState
                    } else if (isEmptyArray(savedInState[type])) {
                        delete savedInState[type]
                        return prevState
                    }

                    return {
                        ...prevState,
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
                    ...prevState,
                    value: { ...valueInState },
                    savedFilters: {
                        ...savedInState,
                        [type]: [filterVal],
                    },
                }
            },
            () => {
                this.fetchResults(this.state.value)
            }
        )
    }

    clearFilter(type: string): void {
        this.setState(
            (prevState: SearchState) => {
                const { key }: { key: string } = prevState.currentInput[type]
                const valueInState = prevState.value
                const changedValueArray: FilterType[] =
                    valueInState[type] &&
                    valueInState[type].filter((el: FilterType) =>
                        this.keyCheck(el, key)
                    )
                isEmptyArray(changedValueArray)
                    ? delete valueInState[type]
                    : (valueInState[type] = changedValueArray)
                return {
                    ...prevState,
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

    renderPrettyView(val: FilterObjectType) {
        const { key, value, kind, count } = val
        if (kind) {
            return `${kind}: ${count}`
        }
        return val && Array.isArray(val)
            ? val.map((criteria, index) =>
                  index === val.length - 1 ? criteria : `${criteria} | `
              )
            : `${key}: ${value && value.substring(0, 50)}`
    }

    keyCheck(el: FilterType, key: string): boolean {
        return typeof el !== 'string' && el.key === key
    }

    // val: FilterType
    renderActiveFilters(type: string, val: any) {
        const { savedFilters } = this.state
        const key = typeof val !== 'string' && val.key ? val.key : null
        const checkInSavedFilters =
            !!savedFilters[type] && !!key
                ? savedFilters[type].find((el: FilterType) =>
                      this.keyCheck(el, key)
                  )
                : savedFilters[type]
        if (!val) return
        return (
            <div
                className={cx('active-filter-box', {
                    deactivated: checkInSavedFilters,
                })}
                key={type}
            >
                <span className='filter-key'>{`${type}: `}</span>
                <span className='filter-val'>
                    {typeof val === 'string'
                        ? prettyKind(val)
                        : this.renderPrettyView(val)}
                </span>
                {this.checkForInputFilter(type) && (
                    <button
                        className='filter-btn edit'
                        onClick={() => this.handleEditFilter(type, val)}
                    ></button>
                )}
                <button
                    className={cx('filter-btn toggle-show', {
                        hide: checkInSavedFilters,
                    })}
                    title='Toggle show/hide'
                    onClick={() => this.toggleFilter(type, val)}
                />
                <button
                    className='filter-btn del'
                    title='Delete'
                    onClick={() => this.deleteFilter(type, val)}
                >
                    &times;
                </button>
            </div>
        )
    }

    compareForSort(a: { key: string }, b: { key: string }) {
        let valA = a.key.toUpperCase()
        let valB = b.key.toUpperCase()

        let comparison = 0
        if (valA > valB) {
            comparison = 1
        } else if (valA < valB) {
            comparison = -1
        }
        return comparison
    }

    // val: FilterType
    renderDividedActiveFilters(key: string, val: any) {
        if (!val) {
            return
        }
        const { value, savedFilters } = this.state
        const saved = savedFilters[key] || []
        const sumOfValues = value[key] ? value[key].concat(saved) : saved

        return (
            sumOfValues.sort(this.compareForSort) &&
            sumOfValues
                .sort(this.compareForSort)
                .map((filter: FilterObjectType) => {
                    if (!isEmptyObject(filter)) {
                        return this.renderActiveFilters(key, filter)
                    }
                    return
                })
        )
    }

    render() {
        const {
            result,
            totalCount,
            value,
            savedFilters,
            currentInput,
            wasFiltered,
            autocomplete,
        } = this.state

        return (
            <div className='Search-wrapper p-40 overflow-hide'>
                <div className='form-group has-success'>
                    <input
                        type='text'
                        className='form-control search-input'
                        placeholder='Search'
                        value={value.criteria}
                        autoFocus
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <div className='active-filters'>
                    {(!isEmptyObject(value) || !isEmptyObject(savedFilters)) &&
                        Object.entries(
                            Object.assign({}, value, savedFilters)
                        ).sort() && (
                            <>
                                {Object.entries(
                                    Object.assign({}, value, savedFilters)
                                )
                                    .sort()
                                    .map(
                                        ([key, val]) =>
                                            key !== 'criteria' &&
                                            (this.checkForInputFilter(key) &&
                                            val
                                                ? this.renderDividedActiveFilters(
                                                      key,
                                                      val
                                                  )
                                                : this.renderActiveFilters(
                                                      key,
                                                      val
                                                  ))
                                    )}
                            </>
                        )}
                </div>
                <div className='search-area'>
                    <div className='filter-list filter-box'>
                        {[this.kinds, ...FILTERS_LIST] &&
                            [this.kinds, ...FILTERS_LIST].map((el) => {
                                return (
                                    <details open key={el.payload}>
                                        <summary
                                            className={cx('filter-list inner', {
                                                'is-active': !!value[
                                                    el.payload
                                                ],
                                            })}
                                        >
                                            {el.shownValue}
                                        </summary>
                                        <div className='inner-items'>
                                            {this.checkForInputFilter(
                                                el.payload
                                            ) ? (
                                                <div className='filter-input-box'>
                                                    {el.values &&
                                                        el.values.map(
                                                            (item, index) => {
                                                                const currentKey =
                                                                    currentInput[
                                                                        el
                                                                            .payload
                                                                    ].key
                                                                const currentVal =
                                                                    currentInput[
                                                                        el
                                                                            .payload
                                                                    ].value
                                                                return (
                                                                    <Fragment
                                                                        key={
                                                                            item.title
                                                                        }
                                                                    >
                                                                        <label>
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </label>
                                                                        {item.title ===
                                                                            'Label' ||
                                                                        item.title ===
                                                                            'Annotation' ? (
                                                                            <Autocomplete
                                                                                getItemValue={(
                                                                                    value
                                                                                ) =>
                                                                                    value
                                                                                }
                                                                                items={
                                                                                    autocomplete[
                                                                                        el
                                                                                            .payload
                                                                                    ]
                                                                                        .keys
                                                                                }
                                                                                value={
                                                                                    currentKey
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    this.handleFilterInput(
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                        el.payload,
                                                                                        item.payload
                                                                                    )
                                                                                }
                                                                                onSelect={(
                                                                                    val
                                                                                ) =>
                                                                                    this.handleFilterInput(
                                                                                        val,
                                                                                        el.payload,
                                                                                        item.payload
                                                                                    )
                                                                                }
                                                                                renderItem={(
                                                                                    content
                                                                                ) => (
                                                                                    <div>
                                                                                        {
                                                                                            content
                                                                                        }
                                                                                    </div>
                                                                                )}
                                                                                renderMenu={(
                                                                                    items
                                                                                ) => (
                                                                                    <div
                                                                                        className='autocomplete'
                                                                                        children={
                                                                                            items
                                                                                        }
                                                                                    />
                                                                                )}
                                                                                renderInput={(
                                                                                    props
                                                                                ) => (
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
                                                                                onMenuVisibilityChange={() =>
                                                                                    this.fetchKeys(
                                                                                        el.payload,
                                                                                        currentKey
                                                                                    )
                                                                                }
                                                                            />
                                                                        ) : (
                                                                            <Autocomplete
                                                                                getItemValue={(
                                                                                    value
                                                                                ) =>
                                                                                    value
                                                                                }
                                                                                items={
                                                                                    autocomplete[
                                                                                        el
                                                                                            .payload
                                                                                    ]
                                                                                        .values
                                                                                }
                                                                                value={
                                                                                    currentVal
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    this.handleFilterInput(
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                        el.payload,
                                                                                        item.payload
                                                                                    )
                                                                                }
                                                                                onSelect={(
                                                                                    val
                                                                                ) =>
                                                                                    this.handleFilterInput(
                                                                                        val,
                                                                                        el.payload,
                                                                                        item.payload
                                                                                    )
                                                                                }
                                                                                renderItem={(
                                                                                    content
                                                                                ) => (
                                                                                    <div>
                                                                                        {content.substring(
                                                                                            0,
                                                                                            70
                                                                                        )}
                                                                                    </div>
                                                                                )}
                                                                                renderMenu={(
                                                                                    items,
                                                                                    index
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                        className='autocomplete'
                                                                                        children={
                                                                                            items
                                                                                        }
                                                                                    />
                                                                                )}
                                                                                renderInput={(
                                                                                    props
                                                                                ) => (
                                                                                    <input
                                                                                        disabled={
                                                                                            !currentKey
                                                                                        }
                                                                                        {...props}
                                                                                    />
                                                                                )}
                                                                                onMenuVisibilityChange={() =>
                                                                                    this.fetchValues(
                                                                                        el.payload,
                                                                                        currentKey,
                                                                                        currentVal
                                                                                    )
                                                                                }
                                                                            />
                                                                        )}
                                                                    </Fragment>
                                                                )
                                                            }
                                                        )}
                                                    {currentInput[el.payload]
                                                        .key &&
                                                        currentInput[el.payload]
                                                            .value && (
                                                            <div className='filter-input-btns'>
                                                                <button
                                                                    type='button'
                                                                    className='add-filter-btn'
                                                                    onClick={() =>
                                                                        this.addInputField(
                                                                            el.payload
                                                                        )
                                                                    }
                                                                >
                                                                    Add
                                                                </button>
                                                                <button
                                                                    type='button'
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
                                                el.values &&
                                                el.values.map((item) => (
                                                    <button
                                                        key={item.title}
                                                        className={
                                                            value[
                                                                el.payload
                                                            ] === item.payload
                                                                ? 'selected-filter'
                                                                : ''
                                                        }
                                                        onClick={() =>
                                                            this.handleFilterChange(
                                                                el.payload,
                                                                item.payload
                                                            )
                                                        }
                                                    >
                                                        {item.title}
                                                    </button>
                                                ))
                                            )}
                                        </div>
                                    </details>
                                )
                            })}
                    </div>
                    <div className='search-results'>
                        {isEmptyArray(result) ? (
                            <div className='result-placeholder'>
                                {wasFiltered
                                    ? 'No items matching search criteria'
                                    : 'No search criteria defined'}
                            </div>
                        ) : (
                            <>
                                {result &&
                                    result.map((item, index) => (
                                        <DnShortcutComponent
                                            key={index}
                                            dn={item.dn}
                                        />
                                    ))}
                                {result.length < totalCount && (
                                    <div className='limited-results-msg'>
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
