import { RootState } from '@/shared/config/redux/redux-store.types'

export const getArticleError = (state: RootState) => state?.article?.error
