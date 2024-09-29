import { RootState } from '@/shared/config/redux/redux-store.types'

export const getProfileLoading = (state: RootState) => state?.profile?.isLoading
