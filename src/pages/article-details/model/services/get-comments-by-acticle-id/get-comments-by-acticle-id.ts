import { ThunkConfig } from '@/shared/config/redux/redux-store.types'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { Comment } from '@/entities/comment'

export const getCommentsByActicleId = createAsyncThunk<
	Comment[],
	string,
	ThunkConfig<string>
>('article/getCommentsByActicleId', async (articleId, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.get('/comments', {
			params: {
				articleId,
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
