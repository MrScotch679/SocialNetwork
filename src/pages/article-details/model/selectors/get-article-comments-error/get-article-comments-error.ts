import { RootState } from '@/shared/config/redux/redux-store.types'

export const getArticleCommentsError = (state: RootState) =>
	state?.articleComments?.error
