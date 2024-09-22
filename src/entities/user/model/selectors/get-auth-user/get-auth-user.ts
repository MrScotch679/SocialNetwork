import { RootState } from '@/shared/config/redux/redux-store.types'

export const getAuthUser = (state: RootState) => state.user.authData
