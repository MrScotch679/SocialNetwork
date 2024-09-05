/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Action, combineReducers, Reducer } from '@reduxjs/toolkit'
import { RootState, RootStateKeys } from './redux-store'

export function createReducerManager(initialReducers: RootState) {
	const reducers = { ...initialReducers }

	let combinedReducer = combineReducers(reducers)

	let keysToRemove: RootStateKeys[] = []

	return {
		getReducerMap: () => reducers,

		reduce: (state: RootState, action: Action) => {
			if (keysToRemove.length > 0) {
				state = { ...state }

				// @ts-ignore
				keysToRemove.forEach(key => delete state[key])

				keysToRemove = []
			}
			// @ts-ignore
			return combinedReducer(state, action)
		},

		add: (key: RootStateKeys, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return
			}
			// @ts-ignore
			reducers[key] = reducer

			combinedReducer = combineReducers(reducers)
		},

		remove: (key: RootStateKeys) => {
			if (!key || !reducers[key]) {
				return
			}

			// @ts-ignore
			delete reducers[key]

			keysToRemove.push(key)

			combinedReducer = combineReducers(reducers)
		},
	}
}
