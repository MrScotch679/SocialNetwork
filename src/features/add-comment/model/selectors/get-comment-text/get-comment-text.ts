import { RootState } from '@/shared/config/redux/redux-store.types'

export const getCommentText = (state: RootState) => state?.commentForm?.text
