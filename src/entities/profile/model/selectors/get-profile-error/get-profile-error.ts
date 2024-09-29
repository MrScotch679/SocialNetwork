import { RootState } from '@/shared/config/redux/redux-store.types'

export const getProfileError = (state: RootState) => state?.profile?.error
