import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile } from '../../types/profile'
import { ThunkConfig } from '@/shared/config/redux/redux-store.types'
import { getForm } from '../../selectors/get-form/get-form'
import { validateProfileData } from '../validate-profile-data/validate-profile-data'
import { ValidationError } from '../../types/validation-error'

export const updateProfileData = createAsyncThunk<
	Profile,
	void,
	ThunkConfig<ValidationError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI
	try {
		const formData = getForm(getState())

		const validateErrors = validateProfileData(formData)

		if (validateErrors.length) {
			return rejectWithValue(validateErrors)
		}

		const response = await extra.api.put('/profile', formData)
		const responseData = response.data

		if (!responseData) {
			throw new Error()
		}

		return responseData
	} catch (error) {
		rejectWithValue([ValidationError.INCORRECT_DATA])
	}
})
