import { FC, PropsWithChildren, memo } from 'react'
import styles from './app-link.module.scss'
import { Link, LinkProps } from 'react-router-dom'

interface AppLinkProps extends PropsWithChildren, LinkProps {}

export const AppLink: FC<AppLinkProps> = memo(({ to, children }) => {
	return (
		<Link to={to} className={styles.link}>
			{children}
		</Link>
	)
})
