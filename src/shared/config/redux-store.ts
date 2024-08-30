import { userReducer } from '@/entities/user'
import { configureStore } from '@reduxjs/toolkit'

export const reduxStore = configureStore({
	reducer: {
		user: userReducer,
	},
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
