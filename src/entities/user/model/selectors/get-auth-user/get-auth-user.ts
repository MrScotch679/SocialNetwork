import { RootState } from '@/shared/config/redux/redux-store'

export const getAuthUser = (state: RootState) => state.user.authData
