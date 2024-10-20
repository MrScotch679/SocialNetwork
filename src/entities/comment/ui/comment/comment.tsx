import { FC, memo } from 'react'
import { Comment as CommentType } from '../../model/types/comment'
import styles from './comment.module.scss'
import { Avatar } from '@/shared/ui/avatar'

interface CommentProps {
	comment: CommentType
}

export const Comment: FC<CommentProps> = memo(props => {
	const { comment } = props

	return (
		<div>
			<div className={styles.commentHeader}>
				<Avatar size={30} src={comment.user?.avatar} />
				<p>{comment.user.name}</p>
			</div>

			<p>{comment.text}</p>
		</div>
	)
})
