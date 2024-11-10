import { ArticleView } from '@/entities/article'
import { RootState } from '@/shared/config/redux/redux-store.types'

export const getArticlesView = (state: RootState) =>
	state?.articlesPage?.view || ArticleView.BLOCK
