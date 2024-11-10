import { FC, memo } from 'react'
import { Comment as CommentType } from '../../model/types/comment'
import styles from './comment.module.scss'
import { Avatar } from '@/shared/ui/avatar'
import { AppRoute } from '@/shared/types/route/route.enum'
import { AppLink } from '@/shared/ui/app-link'

interface CommentProps {
	comment: CommentType
}

export const Comment: FC<CommentProps> = memo(props => {
	const { comment } = props

	return (
		<div>
			<AppLink
				to={`${AppRoute.PROFILE}${comment.user.id}`}
				className={styles.commentHeader}
			>
				<Avatar size={30} src={comment.user?.avatar} />
				<p>{comment.user.name}</p>
			</AppLink>

			<p>{comment.text}</p>
		</div>
	)
})
