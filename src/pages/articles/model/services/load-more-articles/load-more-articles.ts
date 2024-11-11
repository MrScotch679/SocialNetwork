import { ThunkConfig } from '@/shared/config/redux/redux-store.types'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getArticlesPaginationPage } from '../../selectors/get-articles-pagination-page/get-articles-pagination-page'
import { getArticles } from '../get-articles/get-articles'
import { articlesPageActions } from '../../slice/articles-page.slice'

export const loadMoreArticles = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>('articlesPage/loadMoreArticles', async (_, thunkAPI) => {
	const { getState, dispatch } = thunkAPI

	const page = getArticlesPaginationPage(getState())

	const nextPage = page + 1

	dispatch(articlesPageActions.setPage(nextPage))
	dispatch(getArticles())
})
