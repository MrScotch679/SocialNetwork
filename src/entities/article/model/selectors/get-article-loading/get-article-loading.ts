import { RootState } from '@/shared/config/redux/redux-store.types'

export const getArticleLoading = (state: RootState) => state?.article?.isLoading
