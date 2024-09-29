import { User } from '@/entities/user'
import { userActions } from '@/entities/user/model/slice/user-slice'
import { ThunkConfig } from '@/shared/config/redux/redux-store.types'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface loginByUsernameProps {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<
	User,
	loginByUsernameProps,
	ThunkConfig<string>
>('login/loginByUserName', async (userData, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.post('/login', userData)
		const responseData = response.data

		if (!responseData) {
			throw new Error()
		}

		thunkAPI.dispatch(userActions.setUser(responseData))
		return responseData
	} catch (error) {
		thunkAPI.rejectWithValue('error')
	}
})
