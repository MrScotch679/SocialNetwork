import { userReducer } from '@/entities/user'
import { configureStore } from '@reduxjs/toolkit'
import { createReducerManager } from './reducer-manager'
import { AppStore } from './redux-store.types'

export const staticReducers = {
	user: userReducer,
}

const reducerManager = createReducerManager(staticReducers)

export const reduxStore = configureStore({
	reducer: reducerManager.reduce,
}) as AppStore

reduxStore.reducerManager = reducerManager
