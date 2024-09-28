import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/local-storage'

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		// setUser: (state, action: PayloadAction<Profile>) => {
		// 	state.authData = action.payload
		// 	localStorage.setItem(
		// 		USER_LOCAL_STORAGE_KEY,
		// 		JSON.stringify(action.payload)
		// 	)
		// },
		// initAuthUser: state => {
		// 	const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
		// 	if (user) {
		// 		state.authData = JSON.parse(user)
		// 	}
		// },
		// logout: state => {
		// 	state.authData = undefined
		// 	localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
		// },
	},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
