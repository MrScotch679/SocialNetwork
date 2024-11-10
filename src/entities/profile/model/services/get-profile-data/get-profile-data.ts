import { ThunkConfig } from '@/shared/config/redux/redux-store.types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile } from '../../types/profile'

export const getProfileData = createAsyncThunk<
	Profile,
	string,
	ThunkConfig<string>
>('profile/getProfileData', async (profileId, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.get(`/profile/${profileId}`)
		const responseData = response.data

		if (!responseData) {
			throw new Error()
		}

		return responseData
	} catch (error) {
		thunkAPI.rejectWithValue('error')
	}
})
