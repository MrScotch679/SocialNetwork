import { FC, memo } from 'react'
import { InputProps } from './input.types'
import styles from './input.module.scss'

export const Input: FC<InputProps> = memo(props => {
	const { label, type = 'text', ...restProps } = props

	return (
		<div className={styles.customInputWrapper}>
			{label ? (
				<label className={styles.customInputLabel}>{label}</label>
			) : null}
			<input type={type} className={styles.customInput} {...restProps} />
		</div>
	)
})
