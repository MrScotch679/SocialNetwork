import { RootState } from '@/shared/config/redux/redux-store.types'

export const getArticlesLoading = (state: RootState) =>
	state?.articlesPage?.isLoading
