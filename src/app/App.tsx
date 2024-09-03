import { classNames } from '@/shared/lib/classNames/classNames'
import './styles/index.scss'
import { useTheme } from './providers/theme-provider'
import { AppRouter } from './providers/router'
import { useEffect } from 'react'
import { userActions } from '@/entities/user/model/slice/user-slice'
import { useAppDispatch } from '@/shared/hooks/redux-hooks'

export const App = () => {
	const { theme } = useTheme()
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(userActions.initAuthUser())
	}, [])

	return (
		<div id='app' className={classNames('app', undefined, [theme])}>
			<AppRouter />
		</div>
	)
}
