import { profileReducer } from '@/entities/profile'
import { ModuleLoader } from '@/shared/lib/module-loader'
import { memo } from 'react'

const Profile = memo(() => {
	return (
		<ModuleLoader reducerKey='profile' reducer={profileReducer}>
			<div>PROFILE</div>
		</ModuleLoader>
	)
})

export default Profile
