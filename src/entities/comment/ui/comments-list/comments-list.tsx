import { FC, memo } from 'react'
import { Comment as CommentType } from '../../model/types/comment'

import { Comment } from '../comment/comment'

interface CommentsListProps {
	isLoading?: boolean
	error?: string
	comments: CommentType[]
}

export const CommentsList: FC<CommentsListProps> = memo(props => {
	const { comments } = props

	return (
		<div>
			{comments?.length
				? comments.map(comment => (
						<Comment key={comment?.id} comment={comment} />
					))
				: null}
		</div>
	)
})
