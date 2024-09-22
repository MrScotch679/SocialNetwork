import { Action, combineReducers, Reducer } from '@reduxjs/toolkit'
import {
	Reducers,
	RootState,
	RootStateKey,
	StaticReducers,
} from './redux-store.types'

export const createReducerManager = (initialReducers: StaticReducers) => {
	const reducers: Partial<Reducers> = {
		...initialReducers,
	}

	let combinedReducer = combineReducers(reducers as Reducers)

	let keysToRemove: RootStateKey[] = []

	return {
		getReducerMap: () => reducers,

		reduce: (state: Partial<RootState> = {}, action: Action) => {
			if (keysToRemove.length > 0) {
				state = { ...state }

				for (const key of keysToRemove) {
					delete state[key]
				}
				keysToRemove = []
			}

			return combinedReducer(state, action)
		},

		add: (key: RootStateKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return
			}

			reducers[key] = reducer

			combinedReducer = combineReducers(reducers as Reducers)
		},

		remove: (key: RootStateKey) => {
			if (!key || !reducers[key]) {
				return
			}

			delete reducers[key]

			keysToRemove.push(key)

			combinedReducer = combineReducers(reducers as Reducers)
		},
	}
}
