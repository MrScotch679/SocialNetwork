import { FC, memo } from 'react'
import { ArticleView } from '../../model/types/article-view'
import { Article } from '../../model/types/article'
import { ArticleListItem } from '../article-list-item/article-list-item'

interface ArticleListProps {
	articles: Article[]
	view: ArticleView
	isLoading?: boolean
}

export const ArticleList: FC<ArticleListProps> = memo(props => {
	const { articles, view = ArticleView.BLOCK, isLoading } = props

	return (
		<div>
			{articles?.length
				? articles?.map(article => (
						<ArticleListItem key={article.id} article={article} view={view} />
					))
				: 'No articles'}
		</div>
	)
})
