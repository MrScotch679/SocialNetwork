import { Loader } from '@/shared/ui/loader'
import { FC, memo } from 'react'

import styles from './page-loader.module.scss'

export const PageLoader: FC = memo(() => {
	return (
		<div className={styles.pageloaderWrapper}>
			<Loader />
		</div>
	)
})
