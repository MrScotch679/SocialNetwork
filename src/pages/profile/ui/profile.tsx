import {
	getForm,
	getProfileData,
	getProfileError,
	getProfileLoading,
	getReadonly,
	getValidateErrors,
	profileActions,
	ProfileCard,
	profileReducer,
} from '@/entities/profile'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks'
import { ModuleLoader } from '@/shared/lib/module-loader'
import { ChangeEvent, memo, useCallback, useEffect } from 'react'
import { Header } from './header'
import { Currency } from '@/shared/types/currency'
import { Сities } from '@/shared/types/cities'

const Profile = memo(() => {
	const dispatch = useAppDispatch()

	const profileForm = useAppSelector(getForm)
	const isLoading = useAppSelector(getProfileLoading)
	const errorProfile = useAppSelector(getProfileError)
	const readonly = useAppSelector(getReadonly)
	const validateErrors = useAppSelector(getValidateErrors)

	const onChangeFirstName = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			dispatch(profileActions.updateProfile({ firstName: event.target.value }))
		},
		[]
	)

	const onChangeLastName = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			dispatch(profileActions.updateProfile({ lastName: event.target.value }))
		},
		[]
	)

	const onChangeAge = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		const regexNumberAndEmptyValue = /^[0-9]+$|$/

		if (!regexNumberAndEmptyValue.test(event.target.value)) {
			return
		}

		dispatch(
			profileActions.updateProfile({ age: Number(event.target.value) || 0 })
		)
	}, [])

	const onChangeCountry = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			dispatch(profileActions.updateProfile({ country: event.target.value }))
		},
		[]
	)

	const onChangeCity = useCallback((value: Сities) => {
		dispatch(profileActions.updateProfile({ city: value }))
	}, [])

	const onChangeCurrency = useCallback((value: Currency) => {
		dispatch(profileActions.updateProfile({ currency: value }))
	}, [])

	const onChangeUsername = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			dispatch(profileActions.updateProfile({ username: event.target.value }))
		},
		[]
	)

	const onChangeAvatar = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		dispatch(profileActions.updateProfile({ avatar: event.target.value }))
	}, [])

	// 	username
	// avatar

	useEffect(() => {
		dispatch(getProfileData())
	}, [])

	return (
		<ModuleLoader reducerKey='profile' reducer={profileReducer}>
			<Header />

			<ProfileCard
				readonly={readonly}
				profileData={profileForm}
				isLoading={isLoading}
				errorProfile={errorProfile}
				onChangeFirstName={onChangeFirstName}
				onChangeLastName={onChangeLastName}
				onChangeAge={onChangeAge}
				onChangeCity={onChangeCity}
				onChangeCountry={onChangeCountry}
				onChangeCurrency={onChangeCurrency}
				onChangeUsername={onChangeUsername}
				onChangeAvatar={onChangeAvatar}
			/>
		</ModuleLoader>
	)
})

export default Profile
