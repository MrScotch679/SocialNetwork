import { getAuthUserId } from '@/entities/user'
import { AppRoute } from '@/shared/types/route/route.enum'
import { SidebarItemProps } from '@/widgets/sidebar/ui/sidebar-item/sidebar-item.type'
import { createSelector } from '@reduxjs/toolkit'
import { FaHome } from 'react-icons/fa'
import { FaInfoCircle } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'

export const getSidebarItems = createSelector(getAuthUserId, userId => {
	const sidebarConfig: SidebarItemProps[] = [
		{
			path: AppRoute.MAIN,
			Icon: FaHome,
			text: 'Main',
		},
		{
			path: AppRoute.ABOUT,
			Icon: FaInfoCircle,
			text: 'About',
		},
	]

	if (userId) {
		sidebarConfig.push({
			path: `${AppRoute.PROFILE}${userId}`,
			Icon: FaRegUserCircle,
			text: 'Profile',
		})
	}

	return sidebarConfig
})
