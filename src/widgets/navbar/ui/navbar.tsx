import { FC, memo } from 'react'
import styles from './navbar.module.scss'
import { ThemeSwitcher } from '@/widgets/theme-switcher'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = memo(() => {
	return (
		<div className={styles.navbar}>
			<ThemeSwitcher />
		</div>
	)
})
