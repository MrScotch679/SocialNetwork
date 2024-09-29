import { getProfileData, ProfileCard, profileReducer } from '@/entities/profile'
import { useAppDispatch } from '@/shared/hooks/redux-hooks'
import { ModuleLoader } from '@/shared/lib/module-loader'
import { memo, useEffect } from 'react'

const Profile = memo(() => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getProfileData())
	}, [])

	return (
		<ModuleLoader reducerKey='profile' reducer={profileReducer}>
			<ProfileCard />
		</ModuleLoader>
	)
})

export default Profile
