import { AppRoute } from '@/shared/types/route/route.enum'
import { IconType } from 'react-icons'

export interface SidebarItemProps {
	text: string
	path: AppRoute
	Icon: IconType
}
