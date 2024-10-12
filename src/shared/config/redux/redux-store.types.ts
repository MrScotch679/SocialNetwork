import { UserSchema } from '@/entities/user'
import { LoginSchema } from '@/features/auth-by-username/model/types/login.types'
import { Action, EnhancedStore, Reducer, ThunkDispatch } from '@reduxjs/toolkit'
import { staticReducers } from './redux-store'
import { createReducerManager } from './reducer-manager'
import { ProfileSchema } from '@/entities/profile'
import { AxiosInstance } from 'axios'

export type StaticReducers = typeof staticReducers
export type ReducerManager = ReturnType<typeof createReducerManager>
export type Reducers = Record<RootStateKey, Reducer>

export interface RootState {
	user: UserSchema
	login?: LoginSchema
	profile?: ProfileSchema
}
export type RootStateKey = keyof RootState

export interface AppStore extends EnhancedStore<RootState> {
	reducerManager: ReducerManager
}

export type AppDispatch = ThunkDispatch<RootState, ThinkExtraArgs, Action>

export interface ThinkExtraArgs {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThinkExtraArgs
	state: RootState
}
