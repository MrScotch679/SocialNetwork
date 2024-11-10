import { ThunkConfig } from '@/shared/config/redux/redux-store.types'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { Article } from '@/entities/article/model/types/article'

export const getArticles = createAsyncThunk<
	Article[],
	void,
	ThunkConfig<string>
>('articlesPage/getArticles', async (_, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.get('/articles', {
			params: {
				_expand: 'user',
			},
		})
		const responseData = response.data

		if (!responseData) {
			throw new Error()
		}

		return responseData
	} catch (error) {
		thunkAPI.rejectWithValue('error')
	}
})
