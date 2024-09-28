import { memo } from 'react'

import styles from './sidebar.module.scss'
import { sidebarConfig } from '../../model/sidebar.config'
import { SidebarItem } from '../sidebar-item/sidebar-item'

export const Sidebar = memo(() => {
	return (
		<nav className={styles.sidebar}>
			{sidebarConfig.map(item => (
				<SidebarItem key={item.path} {...item} />
			))}
		</nav>
	)
})
