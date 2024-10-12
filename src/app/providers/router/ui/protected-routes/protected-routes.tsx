import { getAuthUserId } from '@/entities/user'
import { useAppSelector } from '@/shared/hooks/redux-hooks'
import { AppRoute } from '@/shared/types/route/route.enum'
import { FC, memo, PropsWithChildren } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes: FC<PropsWithChildren> = memo(() => {
	const userId = useAppSelector(getAuthUserId)

	return userId ? <Outlet /> : <Navigate to={AppRoute.MAIN} />
})
