import { Comment } from '@/entities/comment'
import { RootState } from '@/shared/config/redux/redux-store.types'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { ArticlesCommentsSchema } from '../types/articles-comments-schema'
import { getCommentsByActicleId } from '../services/get-comments-by-acticle-id/get-comments-by-acticle-id'

const commentsAdapter = createEntityAdapter<Comment>()

export const getArticleComments = commentsAdapter.getSelectors<RootState>(
	state => state.articleComments || commentsAdapter?.getInitialState()
)

export const articlesCommentsSlice = createSlice({
	name: 'articlesComments',
	initialState: commentsAdapter?.getInitialState<ArticlesCommentsSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getCommentsByActicleId.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(getCommentsByActicleId.fulfilled, (state, action) => {
				state.isLoading = false
				commentsAdapter.setAll(state, action.payload)
			})
			.addCase(getCommentsByActicleId.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: articlesCommentsActions } = articlesCommentsSlice
export const { reducer: articlesCommentsReducer } = articlesCommentsSlice
