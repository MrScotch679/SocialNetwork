import { reduxStore } from '@/shared/config/redux/redux-store'
import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
	return <Provider store={reduxStore}>{children}</Provider>
}
