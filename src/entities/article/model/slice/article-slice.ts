import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleSchema } from '../types/article-schema'
import { getArticleById } from '../services/get-article-by-id/get-article-by-id'
import { Article } from '../types/article'

const initialState: ArticleSchema = {
	isLoading: false,
}

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(
				getArticleById.fulfilled,
				(state, action: PayloadAction<Article>) => {
					state.isLoading = false
					state.data = action.payload
				}
			)
			.addCase(getArticleById.pending, state => {
				state.isLoading = true
			})
			.addCase(getArticleById.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: articleActions } = articleSlice
export const { reducer: articleReducer } = articleSlice
