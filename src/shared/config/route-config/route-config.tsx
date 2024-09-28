import { AppRoute } from '@/shared/types/route/route.enum'
import { createBrowserRouter } from 'react-router-dom'

import { Main } from '@/pages/main'
import { About } from '@/pages/about'
import { Layout } from '@/widgets/layout'
import { Profile } from '@/pages/profile'

export const routeConfig = createBrowserRouter([
	{
		path: AppRoute.ROOT,
		element: <Layout />,
		errorElement: <div>ERROR</div>,

		children: [
			{
				path: AppRoute.MAIN,
				element: <Main />,
				errorElement: <div>ERROR</div>,
			},
			{
				path: AppRoute.ABOUT,
				element: <About />,
				errorElement: <div>ERROR</div>,
			},
			{
				path: AppRoute.PROFILE,
				element: <Profile />,
				errorElement: <div>ERROR</div>,
			},
		],
	},
])
