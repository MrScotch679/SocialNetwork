import { PropsWithChildren } from 'react'

export enum ModalState {
	OPEN = 'open',
	CLOSE = 'close',
}

export interface ModalProps extends PropsWithChildren {
	isOpen: boolean
	onClose: () => void
}
