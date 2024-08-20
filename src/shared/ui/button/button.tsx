import {
	ButtonHTMLAttributes,
	FC,
	PropsWithChildren,
	memo,
	useMemo,
} from 'react'

import styles from './button.module.scss'
import { className } from '@/shared/lib/className/className'
import { ButtonMode } from './button.types'

interface ButtonProps
	extends PropsWithChildren,
		ButtonHTMLAttributes<HTMLButtonElement> {
	mode?: ButtonMode
}

export const Button: FC<ButtonProps> = memo(props => {
	const {
		children,
		mode = ButtonMode.CLEAR,
		className: additionalClassName,
		...restProps
	} = props

	const buttonClasses = useMemo(
		() =>
			className(
				styles.button,
				{
					[additionalClassName as string]: !!additionalClassName,
				},
				[styles[mode]]
			),
		[]
	)

	return (
		<button className={buttonClasses} {...restProps}>
			{children}
		</button>
	)
})
