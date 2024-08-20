import { FC, memo, PropsWithChildren, useEffect } from 'react'

import styles from './modal.module.scss'
import { className } from '@/shared/lib/className/className'
import { Button } from '@/shared/ui/button'
import { ButtonMode } from '../button/button.types'
import { createPortal } from 'react-dom'

interface ModalProps extends PropsWithChildren {
	isOpen: boolean
	onClose: () => void
}

export const Modal: FC<ModalProps> = memo(props => {
	const { isOpen, onClose, children } = props

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.code === 'Escape') {
				onClose()
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
					onClose()
				}
			}}
		>
			<div
				className={className(styles.modal, undefined, [
					isOpen ? styles.open : styles.close,
				])}
			>
				<Button
					onClick={onClose}
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
		document?.getElementById('modal-root') as HTMLElement
	)
})
