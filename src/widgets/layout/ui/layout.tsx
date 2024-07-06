import { memo, Suspense } from 'react'

import styles from './layout.module.scss'
import { Navbar } from '@/widgets/navbar'
import { Outlet } from 'react-router-dom'
import { PageLoader } from '@/widgets/page-loader'

export const Layout = memo(() => {
	return (
		<div className={styles.layout}>
			<Navbar />
			<Suspense fallback={<PageLoader />}>
				<Outlet />
			</Suspense>
		</div>
	)
})
