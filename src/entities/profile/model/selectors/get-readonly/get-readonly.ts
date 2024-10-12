import { RootState } from '@/shared/config/redux/redux-store.types'

export const getReadonly = (state: RootState) => state?.profile?.readonly
