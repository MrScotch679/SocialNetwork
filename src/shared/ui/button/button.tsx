import {
	ButtonHTMLAttributes,
	FC,
	PropsWithChildren,
	memo,
	useMemo,
} from 'react'

import styles from './button.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ButtonMode } from './button.types'

interface ButtonProps
	extends PropsWithChildren,
		ButtonHTMLAttributes<HTMLButtonElement> {
	mode?: ButtonMode
}

export const Button: FC<ButtonProps> = memo(props => {
	const { children, mode = ButtonMode.CLEAR, className, ...restProps } = props

	const buttonClasses = useMemo(
		() => classNames(styles.button, {}, [styles[mode], className]),
		[]
	)

	return (
		<button className={buttonClasses} {...restProps}>
			{children}
		</button>
	)
})
