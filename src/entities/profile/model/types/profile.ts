import { Currency } from '@/shared/types/currency'
import { Сities } from '@/shared/types/cities'
import { ValidationError } from './validation-error'

export interface Profile {
	id: string
	firstName?: string
	lastName?: string
	age?: number
	currency?: Currency
	city?: Сities
	country?: string
	username?: string
	avatar?: string
}

export interface ProfileSchema {
	isLoading: boolean
	readonly: boolean
	data?: Profile
	form?: Profile
	error?: string
	validateErrors?: ValidationError[]
}
