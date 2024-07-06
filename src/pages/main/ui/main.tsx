import { AppLink } from '@/shared/ui/app-link'
import { FC, memo } from 'react'

import styles from './main.module.scss'

const Main: FC = memo(() => {
	return (
		<div className={styles.main}>
			<AppLink to={'/about'}>{'about'}</AppLink>
		</div>
	)
})

export default Main
