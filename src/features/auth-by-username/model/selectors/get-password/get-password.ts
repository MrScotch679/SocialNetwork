import { RootState } from '@/shared/config/redux/redux-store.types'

export const getPassword = (state: RootState) => state?.login?.password || ''
