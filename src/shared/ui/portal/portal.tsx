import { FC, memo, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps extends PropsWithChildren {
	portalElement?: HTMLElement
}

export const Portal: FC<PortalProps> = memo(props => {
	const { children, portalElement = document?.getElementById('app') } = props

	return createPortal(children, portalElement as HTMLElement)
})
