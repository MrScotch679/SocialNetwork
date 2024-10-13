import { RootState } from '@/shared/config/redux/redux-store.types'

export const getArticleData = (state: RootState) => state?.article?.data
