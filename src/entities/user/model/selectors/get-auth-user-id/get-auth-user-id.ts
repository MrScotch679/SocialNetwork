import { RootState } from '@/shared/config/redux/redux-store.types'

export const getAuthUserId = (state: RootState) => state.user.authData?.id
