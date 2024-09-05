/* eslint-disable @typescript-eslint/ban-ts-comment */
import { userReducer } from '@/entities/user'

import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { createReducerManager } from './reducer-manager'
import { LoginSchema } from '@/features/auth-by-username/model/types/login.types'

export const staticReducers = {
	user: userReducer,
}
// @ts-ignore
export const reducerManager = createReducerManager(staticReducers)

export const reduxStore = configureStore({
	reducer: staticReducers,
})

// @ts-ignore
reduxStore.reducerManager = reducerManager

export interface RootState extends ReturnType<typeof reduxStore.getState> {
	login?: LoginSchema
}
export type AppDispatch = typeof reduxStore.dispatch
export type RootStateKeys = keyof RootState

export interface AppStore extends EnhancedStore<RootState> {
	reducerManager: ReturnType<typeof createReducerManager>
}
