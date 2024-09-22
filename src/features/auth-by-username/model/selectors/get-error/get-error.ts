import { RootState } from '@/shared/config/redux/redux-store.types'

export const getError = (state: RootState) => state?.login?.error || ''
