import { RootState } from '@/shared/config/redux/redux-store.types'

export const getUsername = (state: RootState) => state?.login?.username || ''
