import { FC, memo, useCallback } from 'react'
import { ArticleView } from '../../model/types/article-view'
import { Article } from '../../model/types/article'

import styles from './article-list-item.module.scss'
import { AppRoute } from '@/shared/types/route/route.enum'
import { useNavigate } from 'react-router-dom'

interface ArticleListItemProps {
	article: Article
	view: ArticleView
}

export const ArticleListItem: FC<ArticleListItemProps> = memo(props => {
	const { article, view } = props

	const navigate = useNavigate()

	const onOpenArticle = useCallback(
		(article: Article) => {
			navigate(`${AppRoute.ARTICLE_DETAILS}${article.id}`)
		},
		[navigate, article.id]
	)

	return (
		<div
			className={styles.articleListItem}
			onClick={() => onOpenArticle(article)}
		>
			<div className={styles.header}>
				{view === ArticleView.BLOCK ? 'Block' : 'Row'}
				<p>{article.createdAt}</p>
			</div>

			<div>
				<p>{article.title}</p>
				<p>{article?.type.join(', ')}</p>
			</div>
		</div>
	)
})
