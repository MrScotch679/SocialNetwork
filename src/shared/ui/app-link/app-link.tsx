import { FC, PropsWithChildren, memo } from 'react'
import styles from './app-link.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'

interface AppLinkProps extends PropsWithChildren, LinkProps {
	className?: string
}

export const AppLink: FC<AppLinkProps> = memo(({ to, children, className }) => {
	return (
		<Link to={to} className={classNames(styles.link, {}, [className])}>
			{children}
		</Link>
	)
})
