import { ArticleList } from '@/entities/article/ui/article-list/article-list'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks'
import { ModuleLoader } from '@/shared/lib/module-loader'
import { memo, MutableRefObject, useCallback, useEffect, useRef } from 'react'
import {
	articlesPageReducer,
	getArticlesPage,
} from '../../model/slice/articles-page.slice'
import { getArticles } from '../../model/services/get-articles/get-articles'
import { getArticlesLoading } from '../../model/selectors/get-articles-loading/get-articles-loading'
import { getArticlesView } from '../../model/selectors/get-articles-view/get-articles-view'
import { useInfinityScroll } from '@/shared/hooks/use-infinity-scroll'
import { loadMoreArticles } from '../../model/services/load-more-articles/load-more-articles'

const Articles = memo(() => {
	const dispatch = useAppDispatch()
	const articlesPage = useAppSelector(getArticlesPage?.selectAll)
	const isLoading = useAppSelector(getArticlesLoading)
	const view = useAppSelector(getArticlesView)

	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

	const onLoadMore = useCallback(() => {
		dispatch(loadMoreArticles())
	}, [dispatch])

	useInfinityScroll({
		callback: () => console.log('callback'),
		triggerRef,
		wrapperRef,
	})

	useEffect(() => {
		dispatch(getArticles())
	}, [])

	return (
		<ModuleLoader reducerKey='articlesPage' reducer={articlesPageReducer}>
			<div ref={wrapperRef}>
				<ArticleList
					articles={articlesPage}
					view={view}
					isLoading={isLoading}
				/>

				<div ref={triggerRef} />
			</div>
		</ModuleLoader>
	)
})

export default Articles
