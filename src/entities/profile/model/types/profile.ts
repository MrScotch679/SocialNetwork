import { Currency } from '@/shared/types/currency'
import { Сities } from '@/shared/types/cities'

export interface Profile {
	firstName: string
	lastName: string
	age: number
	currency: Currency
	country: Сities
	city: string
	username: string
	avatar?: string
}

export interface ProfileSchema {
	isLoading: boolean
	readonly: boolean
	data?: Profile
	error?: string
}
