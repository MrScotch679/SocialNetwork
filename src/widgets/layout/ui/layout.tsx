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

			<div className={styles.contentWrapper}>
				<Navbar />

				<Suspense fallback={<PageLoader />}>
					<div className={styles.content}>
						<Outlet />
					</div>
				</Suspense>
			</div>
		</div>
	)
})
