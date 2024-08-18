import { FC, memo } from 'react'
import styles from './navbar.module.scss'
import { ThemeSwitcher } from '@/widgets/theme-switcher'
import { useTranslation } from 'react-i18next'
import { LanguageSelect } from '@/widgets/language-select'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = memo(() => {
	const { t } = useTranslation()

	return (
		<div className={styles.navbar}>
			{t('Title')}

			<div className={styles.platformSettings}>
				<LanguageSelect />
				<ThemeSwitcher />
			</div>
		</div>
	)
})
