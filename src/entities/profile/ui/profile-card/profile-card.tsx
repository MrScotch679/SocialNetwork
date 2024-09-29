import { memo } from 'react'

import { useAppSelector } from '@/shared/hooks/redux-hooks'
import { getProfile } from '../../model/selectors/get-profile/get-profile'

import { getProfileLoading } from '../../model/selectors/get-profile-loading/get-profile-loading'
import { getProfileError } from '../../model/selectors/get-profile-error/get-profile-error'

import styles from './profile-card.module.scss'

export const ProfileCard = memo(() => {
	const profileData = useAppSelector(getProfile)
	const isLoading = useAppSelector(getProfileLoading)
	const errorProfile = useAppSelector(getProfileError)

	return <div>{'ProfileCard'}</div>
})
