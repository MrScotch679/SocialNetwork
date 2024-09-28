import { AppRoute } from '@/shared/types/route/route.enum'

export const routePath: Record<AppRoute, string> = {
	[AppRoute.ROOT]: '/',
	[AppRoute.MAIN]: '/main',
	[AppRoute.ABOUT]: '/about',
	[AppRoute.PROFILE]: '/profile',
}
