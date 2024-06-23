import { AppRoute } from '@/shared/types/route/route.enum'
import { createBrowserRouter } from 'react-router-dom'
import { routePath } from './route-path'

import { Main } from '@/pages/main'
import { About } from '@/pages/about'

export const routeConfig = createBrowserRouter([
	{
		path: routePath[AppRoute.MAIN],
		element: <Main />,
	},
	{
		path: routePath[AppRoute.ABOUT],
		element: <About />,
	},
])
