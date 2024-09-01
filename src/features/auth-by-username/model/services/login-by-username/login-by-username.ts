import { User } from '@/entities/user'
import { userActions } from '@/entities/user/model/slice/user-slice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface loginByUsernameProps {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<
	User,
	loginByUsernameProps,
	{ rejectValue: string }
>('login/loginByUserName', async (userData, thunkAPI) => {
	try {
		const response = await axios.post('http://localhost:3000/login', userData)
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
