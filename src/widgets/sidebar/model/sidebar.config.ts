import { AppRoute } from '@/shared/types/route/route.enum'

import { FaHome } from 'react-icons/fa'
import { FaInfoCircle } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'
import { SidebarItemProps } from '../ui/sidebar-item/sidebar-item.type'

export const sidebarConfig: SidebarItemProps[] = [
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
	{
		path: AppRoute.PROFILE,
		Icon: FaRegUserCircle,
		text: 'Profile',
	},
]
