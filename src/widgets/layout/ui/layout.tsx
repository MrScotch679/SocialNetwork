import { memo } from 'react'

import styles from './layout.module.scss'
import { Navbar } from '@/widgets/navbar'
import { Outlet } from 'react-router-dom'

export const Layout = memo(() => {
	return (
		<div className={styles.layout}>
			<Navbar />
			<Outlet />
		</div>
	)
})
