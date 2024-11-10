import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommentFormSchema } from '../types/comment-form'

const initialState: CommentFormSchema = {
	text: '',
}

export const commentFormSlice = createSlice({
	name: 'commentForm',
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload
		},
	},
	extraReducers: builder => {
		builder
	},
})

export const { actions: commentFormActions } = commentFormSlice
export const { reducer: commentFormReducer } = commentFormSlice
