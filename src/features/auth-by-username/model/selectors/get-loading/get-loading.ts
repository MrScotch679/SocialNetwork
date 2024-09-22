import { RootState } from '@/shared/config/redux/redux-store.types'

export const getLoading = (state: RootState) => state?.login?.isLoading || false
