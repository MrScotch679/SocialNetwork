import { userReducer } from '@/entities/user'
import { configureStore } from '@reduxjs/toolkit'
import { createReducerManager } from './reducer-manager'
import { AppStore } from './redux-store.types'
import { api } from '@/shared/api/api'

export const staticReducers = {
	user: userReducer,
}

const reducerManager = createReducerManager(staticReducers)

export const reduxStore = configureStore({
	reducer: reducerManager.reduce,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: api,
				},
			},
		}),
}) as AppStore

reduxStore.reducerManager = reducerManager
