import { AppRoute } from '@/shared/types/route/route.enum'
import { createBrowserRouter } from 'react-router-dom'

import { Main } from '@/pages/main'
import { About } from '@/pages/about'
import { Layout } from '@/widgets/layout'
import { Profile } from '@/pages/profile'
import { ProtectedRoutes } from '@/app/providers/router/ui/protected-routes/protected-routes'

export const routeConfig = createBrowserRouter([
	{
		path: AppRoute.ROOT,
		element: <Layout />,
		errorElement: <div>ERROR ROOT</div>,

		children: [
			{
				path: AppRoute.MAIN,
				element: <Main />,
				errorElement: <div>ERROR MAIN</div>,
			},
			{
				path: AppRoute.ABOUT,
				element: <About />,
				errorElement: <div>ERROR ABOUT</div>,
			},

			{
				element: <ProtectedRoutes />,
				children: [
					{
						path: AppRoute.PROFILE,
						element: <Profile />,
						errorElement: <div>ERROR PROFILE</div>,
					},
				],
			},
		],
	},
])
