import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input/input'
import { ChangeEvent, FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { loginActions, loginReducer } from '../../model/slice/login.slice'
import { loginByUsername } from '../../model/services/login-by-username/login-by-username'
import { getUsername } from '../../model/selectors/get-username/get-username'
import { getPassword } from '../../model/selectors/get-password/get-password'
import { useAppStore } from '@/shared/hooks/redux-hooks/redux-hooks'

const LoginForm: FC = memo(() => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()

	const username = useAppSelector(getUsername)
	const password = useAppSelector(getPassword)
	const store = useAppStore()

	const onChangeUsername = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			dispatch(loginActions.setUsername(event.target.value))
		},
		[dispatch]
	)

	const onChangePassword = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			dispatch(loginActions.setPassword(event.target.value))
		},
		[dispatch]
	)

	const onLogin = useCallback(() => {
		dispatch(loginByUsername({ username, password }))
	}, [dispatch, username, password])

	useEffect(() => {
		store.reducerManager.add('login', loginReducer)
		store.dispatch({ type: '@login init' })

		return () => {
			store.reducerManager.remove('login')
			store.dispatch({ type: '@login remove' })
		}
	}, [])

	return (
		<div>
			<Input value={username} onChange={onChangeUsername} />
			<Input value={password} onChange={onChangePassword} />
			<Button onClick={onLogin}>{t('Login')}</Button>
		</div>
	)
})

export default LoginForm
