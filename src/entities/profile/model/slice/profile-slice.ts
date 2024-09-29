import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { getProfileData } from '../services/get-profile-data/get-profile-data'

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
	extraReducers: builder => {
		builder
			.addCase(getProfileData.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(getProfileData.fulfilled, (state, action) => {
				state.isLoading = false
				state.data = action.payload
			})
			.addCase(getProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
