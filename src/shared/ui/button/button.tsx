import { ButtonHTMLAttributes, FC, PropsWithChildren, memo } from 'react'

import styles from './button.module.scss'
import { className } from '@/shared/lib/className/className'
import { ButtonMode } from './button.types'

interface ButtonProps
	extends PropsWithChildren,
		ButtonHTMLAttributes<HTMLButtonElement> {
	mode?: ButtonMode
}

export const Button: FC<ButtonProps> = memo(props => {
	const { children, mode = ButtonMode.CLEAR, ...restProps } = props

	return (
		<button
			className={className(styles.button, undefined, [styles[mode]])}
			{...restProps}
		>
			{children}
		</button>
	)
})
