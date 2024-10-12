/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FC, memo } from 'react'

import styles from './select.module.scss'

export interface SelectOption {
	label: string
	value: string
}

export interface SelectProps {
	value?: any
	label?: string
	options?: SelectOption[]
	onChange?: (value: any) => void
}

export const Select: FC<SelectProps> = memo(props => {
	const { label, options, value, onChange } = props

	const optionsList = options?.map(currentOption => (
		<option key={currentOption.value} value={currentOption.value}>
			{currentOption.label}
		</option>
	))

	const onChangeHandler = (value: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(value.target.value)
	}

	return (
		<div>
			{label ? <p>{label}</p> : null}

			<select
				value={value}
				onChange={onChangeHandler}
				className={styles.select}
			>
				{optionsList}
			</select>
		</div>
	)
})
