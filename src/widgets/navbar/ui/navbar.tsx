import { FC, memo, useCallback } from 'react'
import styles from './navbar.module.scss'
import { ThemeSwitcher } from '@/widgets/theme-switcher'
import { useTranslation } from 'react-i18next'
import { LanguageSelect } from '@/widgets/language-select'
import { Button } from '@/shared/ui/button'
import { useModalState } from '@/shared/hooks/use-modal-state'
import { LoginModal } from '@/features/auth-by-username'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks'
import { getAuthUser } from '@/entities/user'
import { userActions } from '@/entities/user/model/slice/user-slice'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = memo(() => {
	const { t } = useTranslation()
	const { modalProps, onOpen } = useModalState()
	const dispatch = useAppDispatch()
	const userData = useAppSelector(getAuthUser)

	const onLogout = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])

	return (
		<div className={styles.navbar}>
			{t('Title')}

			<div className={styles.platformSettings}>
				<LanguageSelect />
				<ThemeSwitcher />

				<Button onClick={userData ? onLogout : onOpen}>
					{t([userData ? 'Logout' : 'Login'])}
				</Button>
			</div>

			<LoginModal {...modalProps} />
		</div>
	)
})
