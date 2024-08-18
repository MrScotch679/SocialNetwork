import { memo } from 'react'

import styles from './sidebar.module.scss'

export const Sidebar = memo(() => {
	return <nav className={styles.sidebar}></nav>
})
