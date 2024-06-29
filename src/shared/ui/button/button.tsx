import { ButtonHTMLAttributes, FC, PropsWithChildren, memo } from 'react'

import styles from './button.module.scss'
import { className } from '@/shared/lib/className/className'

enum ButtonMode {
	CLEAR = 'clear',
}

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
