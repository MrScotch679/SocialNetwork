import { RootStateKey } from '@/shared/config/redux/redux-store.types'
import {
	useAppDispatch,
	useAppStore,
} from '@/shared/hooks/redux-hooks/redux-hooks'
import { Reducer } from '@reduxjs/toolkit'
import { FC, memo, PropsWithChildren, useEffect } from 'react'

interface ModuleLoaderProps extends PropsWithChildren {
	key: RootStateKey
	reducer: Reducer
}

export const ModuleLoader: FC<ModuleLoaderProps> = memo(props => {
	const { key, reducer, children } = props

	const store = useAppStore()
	const dispatch = useAppDispatch()

	useEffect(() => {
		store.reducerManager.add(key, reducer)
		dispatch({ type: `@${key} INIT` })

		return () => {
			store.reducerManager.remove(key)
			dispatch({ type: `@${key} DESTROY` })
		}
	})

	return <>{children}</>
})
