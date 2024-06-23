import { AppRoute } from '@/shared/types/route/route.enum'

export const routePath: Record<AppRoute, string> = {
	[AppRoute.MAIN]: '/',
	[AppRoute.ABOUT]: '/about',
}
