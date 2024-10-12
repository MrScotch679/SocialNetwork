import { Profile } from '../../types/profile'
import { ValidationError } from '../../types/validation-error'

export const validateProfileData = (profile?: Profile) => {
	const errors: ValidationError[] = []

	if (!profile) {
		errors.push(ValidationError.NO_DATA)
		return errors
	}

	const { firstName, lastName, age, country, city, currency } = profile

	if (!firstName) {
		errors.push(ValidationError.INCORRECT_FIRST_NAME)
	}

	if (!lastName) {
		errors.push(ValidationError.INCORRECT_LAST_NAME)
	}

	if (!age) {
		errors.push(ValidationError.INCORRECT_AGE)
	}

	if (!country) {
		errors.push(ValidationError.INCORRECT_COUNTRY)
	}

	if (!city) {
		errors.push(ValidationError.INCORRECT_CITY)
	}

	if (!currency) {
		errors.push(ValidationError.INCORRECT_CURRENCY)
	}

	return errors
}
