import { routeConfig } from '@/shared/config/route-config/route-config'
import { memo } from 'react'
import { RouterProvider } from 'react-router-dom'

export const AppRouter = memo(() => {
	return <RouterProvider router={routeConfig} />
})
