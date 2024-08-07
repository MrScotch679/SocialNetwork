import { FC, memo } from 'react'
import styles from './navbar.module.scss'
import { ThemeSwitcher } from '@/widgets/theme-switcher'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/button'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = memo(() => {
	const { t, i18n } = useTranslation()

	return (
		<div className={styles.navbar}>
			<ThemeSwitcher />

			<Button onClick={() => i18n.changeLanguage('ru')}>S</Button>

			{t('Title')}
		</div>
	)
})
