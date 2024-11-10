import { memo } from 'react'

import styles from './sidebar.module.scss'
import { SidebarItem } from '../sidebar-item/sidebar-item'
import { getSidebarItems } from '../../model/selectors/get-sidebar-items/get-sidebar-items'
import { useAppSelector } from '@/shared/hooks/redux-hooks'

export const Sidebar = memo(() => {
	const sidebarItems = useAppSelector(getSidebarItems)

	return (
		<nav className={styles.sidebar}>
			{sidebarItems.map(item => (
				<SidebarItem key={item.path} {...item} />
			))}
		</nav>
	)
})
