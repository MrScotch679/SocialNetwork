import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, memo } from 'react'
import { IconType } from 'react-icons'

import styles from './icon.module.scss'

interface IconProps {
	className?: string
	icon: IconType
}

export const Icon: FC<IconProps> = memo(props => {
	const { className, icon: Icon, ...restProps } = props

	return (
		<Icon className={classNames(styles.icon, {}, [className])} {...restProps} />
	)
})
