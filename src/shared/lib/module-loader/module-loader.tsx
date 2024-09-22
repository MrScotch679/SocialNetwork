import { RootStateKey } from '@/shared/config/redux/redux-store.types'
import {
	useAppDispatch,
	useAppStore,
} from '@/shared/hooks/redux-hooks/redux-hooks'
import { Reducer } from '@reduxjs/toolkit'
import { FC, memo, PropsWithChildren, useEffect } from 'react'

interface ModuleLoaderProps extends PropsWithChildren {
	reducerKey: RootStateKey
	reducer: Reducer
}

export const ModuleLoader: FC<ModuleLoaderProps> = memo(props => {
	const { reducerKey, reducer, children } = props

	const store = useAppStore()
	const dispatch = useAppDispatch()

	useEffect(() => {
		store.reducerManager.add(reducerKey, reducer)
		dispatch({ type: `@${reducerKey} INIT` })

		return () => {
			store.reducerManager.remove(reducerKey)
			dispatch({ type: `@${reducerKey} DESTROY` })
		}
	}, [])

	return <>{children}</>
})
