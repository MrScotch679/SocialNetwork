import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input/input'
import { ChangeEvent, FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { loginActions, loginReducer } from '../../model/slice/login.slice'
import { loginByUsername } from '../../model/services/login-by-username/login-by-username'
import { getUsername } from '../../model/selectors/get-username/get-username'
import { getPassword } from '../../model/selectors/get-password/get-password'
import { ModuleLoader } from '@/shared/lib/module-loader'
import { LoginFormProps } from './login-form.types'

const LoginForm: FC<LoginFormProps> = memo(({ handleCloseModal }) => {
	const { t } = useTranslation()
	const { t: loginT } = useTranslation('login')
	const dispatch = useAppDispatch()

	const username = useAppSelector(getUsername)
	const password = useAppSelector(getPassword)

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

	const onLogin = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }))

		if (result.meta?.requestStatus === 'fulfilled') {
			handleCloseModal()
		}
	}, [dispatch, username, password])

	return (
		<ModuleLoader reducerKey='login' reducer={loginReducer}>
			<Input
				label={loginT('Enter your email')}
				value={username}
				onChange={onChangeUsername}
			/>
			<Input
				label={loginT('Enter your password')}
				value={password}
				onChange={onChangePassword}
			/>
			<Button onClick={onLogin}>{t('Login')}</Button>
		</ModuleLoader>
	)
})

export default LoginForm
