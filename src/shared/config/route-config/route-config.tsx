import { AppRoute } from '@/shared/types/route/route.enum'
import { createBrowserRouter } from 'react-router-dom'

import { Main } from '@/pages/main'
import { About } from '@/pages/about'
import { Layout } from '@/widgets/layout'
import { Profile } from '@/pages/profile'
import { ProtectedRoutes } from '@/app/providers/router/ui/protected-routes/protected-routes'
import { ArticleDetails } from '@/pages/article-details'
import { Articles } from '@/pages/articles'

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
				path: `${AppRoute.ARTICLE_DETAILS}:id`,
				element: <ArticleDetails />,
				errorElement: <div>ERROR ARTICLE DETAILS</div>,
			},

			{
				path: AppRoute.ARTICLES,
				element: <Articles />,
				errorElement: <div>ERROR ARTICLE DETAILS</div>,
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
