import { RootState } from '@/shared/config/redux/redux-store.types'

export const getArticlesError = (state: RootState) => state?.articlesPage?.error
