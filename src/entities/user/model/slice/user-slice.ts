import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/user.types'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/local-storage'

const initialState: UserSchema = {}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.authData = action.payload

			localStorage.setItem(
				USER_LOCAL_STORAGE_KEY,
				JSON.stringify(action.payload)
			)
		},

		initAuthUser: state => {
			const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
			if (user) {
				state.authData = JSON.parse(user)
			}
		},

		logout: state => {
			state.authData = undefined
			localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
		},
	},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
