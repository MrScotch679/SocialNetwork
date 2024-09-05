import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input/input'
import { ChangeEvent, FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { loginActions, loginReducer } from '../../model/slice/login.slice'
import { getLoginState } from '../../model/selectors/select-login-state/get-login-state'
import { loginByUsername } from '../../model/services/login-by-username/login-by-username'
import { useAppStore } from '@/shared/hooks/redux-hooks/redux-hooks'

const LoginForm: FC = memo(() => {
	const store = useAppStore()
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const { username, password } = useAppSelector(getLoginState)

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

		return () => {
			store.reducerManager.remove('login')
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
