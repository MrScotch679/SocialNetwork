import { RootState } from '@/shared/config/redux/redux-store'

export const getLoginState = (state: RootState) => state?.login
