import { getAuthUser } from '@/entities/user'
import { ThunkConfig } from '@/shared/config/redux/redux-store.types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getArticleData } from '@/entities/article/model/selectors/get-article-data/get-article-data'
import { getCommentText } from '@/features/add-comment/model/selectors/get-comment-text/get-comment-text'
import { getCommentsByActicleId } from '../get-comments-by-acticle-id/get-comments-by-acticle-id'

export const sendComment = createAsyncThunk<
	Comment,
	string,
	ThunkConfig<string>
>('article/sendComment', async (text, thunkAPI) => {
	try {
		const { dispatch, rejectWithValue, getState } = thunkAPI

		const userId = getAuthUser(getState())?.id
		const comment = getCommentText(getState())
		const articleId = getArticleData(getState())?.id

		if (!userId || !comment || !articleId) {
			return rejectWithValue('error')
		}

		const response = await thunkAPI.extra.api.post('/comments', {
			articleId,
			text,
			userId,
		})
		const responseData = response.data

		if (!responseData) {
			throw new Error()
		}

		dispatch(getCommentsByActicleId(articleId))
		return responseData
	} catch (error) {
		thunkAPI.rejectWithValue('error')
	}
})
