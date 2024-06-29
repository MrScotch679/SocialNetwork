import { AppLink } from '@/shared/ui/app-link'
import { FC, memo } from 'react'

const Main: FC = memo(() => {
	return (
		<div>
			<AppLink to={'/about'}>{'about'}</AppLink>
		</div>
	)
})

export default Main
