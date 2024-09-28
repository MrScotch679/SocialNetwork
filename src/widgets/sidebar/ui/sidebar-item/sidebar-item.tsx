import { AppLink } from '@/shared/ui/app-link'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './sidebar-item.module.scss'
import { SidebarItemProps } from './sidebar-item.type'

export const SidebarItem: FC<SidebarItemProps> = memo(props => {
	const { text, path, Icon } = props
	const { t } = useTranslation()

	return (
		<AppLink to={path} className={styles.link}>
			{Icon ? <Icon /> : null}
			<p className={styles.text}>{t(text)}</p>
		</AppLink>
	)
})
