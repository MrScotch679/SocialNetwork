import { RootState } from '@/shared/config/redux/redux-store.types'

export const getForm = (state: RootState) => state?.profile?.form
