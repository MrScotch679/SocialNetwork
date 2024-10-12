import { RootState } from '@/shared/config/redux/redux-store.types'

export const getValidateErrors = (state: RootState) =>
	state?.profile?.validateErrors
