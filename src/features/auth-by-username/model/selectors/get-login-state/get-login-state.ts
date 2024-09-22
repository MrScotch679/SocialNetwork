import { RootState } from '@/shared/config/redux/redux-store.types'

export const getLoginState = (state: RootState) => state?.login
