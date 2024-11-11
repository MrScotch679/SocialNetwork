import { ThunkConfig } from '@/shared/config/redux/redux-store.types'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { Article } from '@/entities/article/model/types/article'
import { getArticlesLimit } from '../../selectors/get-articles-limit/get-articles-limit'
import { getArticlesPaginationPage } from '../../selectors/get-articles-pagination-page/get-articles-pagination-page'

export const getArticles = createAsyncThunk<
	Article[],
	void,
	ThunkConfig<string>
>('articlesPage/getArticles', async (_, thunkAPI) => {
	const { getState } = thunkAPI

	try {
		const limit = getArticlesLimit(getState())
		const page = getArticlesPaginationPage(getState())

		const response = await thunkAPI.extra.api.get('/articles', {
			params: {
				_expand: 'user',
				_limit: limit,
				_page: page,
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
