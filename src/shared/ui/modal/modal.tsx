import {
	FC,
	memo,
	PropsWithChildren,
	useCallback,
	useEffect,
	useState,
} from 'react'

import styles from './modal.module.scss'
import { className } from '@/shared/lib/className/className'
import { Button } from '@/shared/ui/button'
import { ButtonMode } from '../button/button.types'
import { createPortal } from 'react-dom'
import { ModalState } from './modal.types'

interface ModalProps extends PropsWithChildren {
	isOpen: boolean
	onClose: () => void
}

export const Modal: FC<ModalProps> = memo(props => {
	const { isOpen, onClose, children } = props

	if (!isOpen) {
		return null
	}

	const [modalAnamation, setModalAnamation] = useState(ModalState.OPEN)

	const handleClose = useCallback(() => {
		setModalAnamation(ModalState.CLOSE)
	}, [onClose])

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.code === 'Escape') {
				handleClose()
			}
		}

		window.addEventListener('keydown', handleEsc)

		return () => {
			window.removeEventListener('keydown', handleEsc)
		}
	}, [])

	const modalComponent = (
		<div
			className={styles.modalOverlay}
			onClick={event => {
				if (event.target === event.currentTarget) {
					handleClose()
				}
			}}
		>
			<div
				className={className(styles.modal, undefined, [styles[modalAnamation]])}
				onAnimationEnd={event => {
					if (event?.animationName?.includes('modalFadeOut')) {
						onClose()
					}
				}}
			>
				<Button
					onClick={handleClose}
					className={styles.closeButton}
					mode={ButtonMode.PRIMARY}
				>
					X
				</Button>

				{children}
			</div>
		</div>
	)

	return createPortal(
		modalComponent,
		document?.getElementsByClassName('app')?.[0] as HTMLElement
	)
})
