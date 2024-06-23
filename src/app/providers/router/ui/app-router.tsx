import { routeConfig } from '@/shared/config/route-config/route-config'
import { Suspense, memo } from 'react'
import { RouterProvider } from 'react-router-dom'

export const AppRouter = memo(() => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={routeConfig} />
		</Suspense>
	)
})
