import { RootState } from '@/shared/config/redux/redux-store.types'

export const getArticleCommentsLoading = (state: RootState) =>
	state?.articleComments?.isLoading
