import { RootState } from '@/shared/config/redux/redux-store.types'

export const getCommentError = (state: RootState) => state?.commentForm?.error
