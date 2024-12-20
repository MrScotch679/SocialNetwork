import { RootState } from '@/shared/config/redux/redux-store.types'
import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'
import { Article } from '@/entities/article/model/types/article'
import { ArticlePageSchema } from '../types/article-page'
import { ArticleView } from '@/entities/article'
import { getArticles } from '../services/get-articles/get-articles'

const articlesPageAdapter = createEntityAdapter<Article>()

export const getArticlesPage = articlesPageAdapter.getSelectors<RootState>(
	state => state.articlesPage || articlesPageAdapter?.getInitialState()
)

export const articlesPageSlice = createSlice({
	name: 'articlesPage',
	initialState: articlesPageAdapter?.getInitialState<ArticlePageSchema>({
		view: ArticleView.BLOCK,
		isLoading: false,

		ids: [],
		entities: {},

		page: 1,
		limit: 5,
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload
		},

		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},

		setLimit: (state, action: PayloadAction<number>) => {
			state.limit = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getArticles.pending, state => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(getArticles.fulfilled, (state, action) => {
				articlesPageAdapter.addMany(state, action.payload)
				state.isLoading = false
				state.error = undefined
				state.hasMore = action.payload.length >= state.limit
			})
			.addCase(getArticles.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: articlesPageActions } = articlesPageSlice
export const { reducer: articlesPageReducer } = articlesPageSlice
