import { ThunkConfig } from '@/shared/config/redux/redux-store.types'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { Article } from '../../types/article'

export const getArticleById = createAsyncThunk<
	Article,
	string,
	ThunkConfig<string>
>('article/getProfileData', async (atricleId, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.get(`/articles/${atricleId}`)
		const responseData = response.data

		if (!responseData) {
			throw new Error()
		}

		return responseData
	} catch (error) {
		thunkAPI.rejectWithValue('error')
	}
})
