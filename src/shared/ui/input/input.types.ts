import { ChangeEvent, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
