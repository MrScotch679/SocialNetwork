import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input/input'
import { ChangeEvent, FC, memo, useCallback } from 'react'
import { getCommentText } from '../../model/selectors/get-comment-text/get-comment-text'
import { getCommentError } from '../../model/selectors/get-comment-error/get-comment-error'
import {
	commentFormActions,
	commentFormReducer,
} from '../../model/slice/comment-form.slice'
import { ModuleLoader } from '@/shared/lib/module-loader'

import styles from './comment-form.module.scss'

export interface CommentFormProps {
	onSendComment: (text: string) => void
}

const CommentForm: FC<CommentFormProps> = memo(({ onSendComment }) => {
	const dispatch = useAppDispatch()

	const commentText = useAppSelector(getCommentText)
	const commentError = useAppSelector(getCommentError)

	const onChangeCommentText = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			dispatch(commentFormActions.setText(event.target.value))
		},
		[dispatch]
	)

	const onSendCommentHandler = () => {
		onSendComment(commentText || '')
		dispatch(commentFormActions.setText(''))
	}

	return (
		<ModuleLoader reducerKey='commentForm' reducer={commentFormReducer}>
			<div className={styles.commentForm}>
				<Input
					type='text'
					placeholder='Add comment...'
					value={commentText}
					onChange={onChangeCommentText}
				/>

				<Button onClick={onSendCommentHandler}>{'Send'}</Button>
			</div>
		</ModuleLoader>
	)
})

export default CommentForm
