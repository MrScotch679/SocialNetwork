import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { getProfileData } from '../services/get-profile-data/get-profile-data'
import { updateProfileData } from '../services/update-profile-data/update-profile-data'

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		},

		updateProfile: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.form,
				...action.payload,
			}
		},

		cancelEdit: state => {
			state.form = state.data
			state.readonly = true
			state.validateErrors = undefined
		},
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
				state.form = action.payload
			})
			.addCase(getProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})

			.addCase(updateProfileData.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(updateProfileData.fulfilled, (state, action) => {
				state.isLoading = false
				state.data = action.payload
				state.form = action.payload
				state.readonly = true
				state.validateErrors = undefined
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.validateErrors = action.payload
			})
	},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
