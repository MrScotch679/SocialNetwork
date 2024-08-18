import { memo, Suspense } from 'react'

import styles from './layout.module.scss'
import { Navbar } from '@/widgets/navbar'
import { Outlet } from 'react-router-dom'
import { PageLoader } from '@/widgets/page-loader'
import { Sidebar } from '@/widgets/sidebar'

export const Layout = memo(() => {
	return (
		<div className={styles.layout}>
			<Sidebar />

			<div className={styles.layoutContent}>
				<Navbar />

				<Suspense fallback={<PageLoader />}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	)
})
