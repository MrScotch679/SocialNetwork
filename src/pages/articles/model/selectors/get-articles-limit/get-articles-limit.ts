import { RootState } from '@/shared/config/redux/redux-store.types'

export const getArticlesLimit = (state: RootState) => state?.articlesPage?.limit
