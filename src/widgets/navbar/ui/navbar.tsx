import { FC, memo } from 'react'
import styles from './navbar.module.scss'
import { routePath } from '@/shared/config/route-config/route-path'
import { AppRoute } from '@/shared/types/route/route.enum'
import { AppLink } from '@/shared/ui/app-link'
import { useTheme } from '@/app/providers/theme-provider'
import { ThemeSwitcher } from '@/widgets/theme-switcher'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = memo(() => {
	const { toggleTheme } = useTheme()

	return (
		<div className={styles.navbar}>
			<ThemeSwitcher />
		</div>
	)
})
