import { Article } from '@/entities/article'
import { CommentsList } from '@/entities/comment'
import { ModuleLoader } from '@/shared/lib/module-loader'
import { memo, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
	articlesCommentsReducer,
	getArticleComments,
} from '../../model/slices/articles-comments-slice'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks'
import { getArticleCommentsLoading } from '../../model/selectors/get-article-comments-loading/get-article-comments-loading'
import { getArticleCommentsError } from '../../model/selectors/get-article-comments-error/get-article-comments-error'
import { getCommentsByActicleId } from '../../model/services/get-comments-by-acticle-id/get-comments-by-acticle-id'
import { CommentForm } from '@/features/add-comment'
import { sendComment } from '../../model/services/send-comment/send-comment'

const ArticleDetails = memo(() => {
	const { id } = useParams()

	const dispatch = useAppDispatch()

	const comments = useAppSelector(getArticleComments.selectAll)
	const commentsIsLoading = useAppSelector(getArticleCommentsLoading)
	const commentError = useAppSelector(getArticleCommentsError)

	const onSendComment = useCallback(
		(text: string) => {
			dispatch(sendComment(text))
		},
		[dispatch]
	)

	useEffect(() => {
		if (id) {
			dispatch(getCommentsByActicleId(id))
		}
	}, [id])

	return (
		<ModuleLoader
			reducerKey='articleComments'
			reducer={articlesCommentsReducer}
		>
			{id ? (
				<div>
					<Article articleId={id} />

					<CommentForm onSendComment={onSendComment} />

					<CommentsList
						isLoading={commentsIsLoading}
						error={commentError}
						comments={comments}
					/>
				</div>
			) : (
				'Not found'
			)}
		</ModuleLoader>
	)
})

export default ArticleDetails
