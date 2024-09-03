import { FC, memo } from 'react'

import styles from './loader.module.scss'

export const Loader: FC = memo(() => {
	return <span className={styles.loader} />
})
