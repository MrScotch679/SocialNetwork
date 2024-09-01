import { userReducer } from '@/entities/user'
import { loginReducer } from '@/features/auth-by-username'

import { configureStore } from '@reduxjs/toolkit'

export const reduxStore = configureStore({
	reducer: {
		user: userReducer,
		login: loginReducer,
	},
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
