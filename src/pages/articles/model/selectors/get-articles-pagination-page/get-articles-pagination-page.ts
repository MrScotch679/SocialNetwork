import { RootState } from '@/shared/config/redux/redux-store.types'

export const getArticlesPaginationPage = (state: RootState) =>
	state?.articlesPage?.page || 1
