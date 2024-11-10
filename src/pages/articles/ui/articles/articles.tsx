import { ArticleList } from '@/entities/article/ui/article-list/article-list'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks'
import { ModuleLoader } from '@/shared/lib/module-loader'
import { memo, useEffect } from 'react'
import {
	articlesPageReducer,
	getArticlesPage,
} from '../../model/slice/articles-page.slice'
import { getArticles } from '../../model/services/get-articles/get-articles'
import { getArticlesLoading } from '../../model/selectors/get-articles-loading/get-articles-loading'
import { getArticlesView } from '../../model/selectors/get-articles-view/get-articles-view'

const Articles = memo(() => {
	const dispatch = useAppDispatch()
	const articlesPage = useAppSelector(getArticlesPage?.selectAll)
	const isLoading = useAppSelector(getArticlesLoading)
	const view = useAppSelector(getArticlesView)

	useEffect(() => {
		dispatch(getArticles())
	}, [])

	return (
		<ModuleLoader reducerKey='articlesPage' reducer={articlesPageReducer}>
			<div>
				<ArticleList
					articles={articlesPage}
					view={view}
					isLoading={isLoading}
				/>
			</div>
		</ModuleLoader>
	)
})

export default Articles
