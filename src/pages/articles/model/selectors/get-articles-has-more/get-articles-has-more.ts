import { RootState } from '@/shared/config/redux/redux-store.types'

export const getArticlesHasMore = (state: RootState) =>
	state?.articlesPage?.hasMore
