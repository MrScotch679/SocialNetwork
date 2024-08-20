import { FC, memo, PropsWithChildren } from 'react'

import styles from './modal.module.scss'
import { className } from '@/shared/lib/className/className'

interface ModalProps extends PropsWithChildren {
	isOpen: boolean
	onClose: () => void
}

export const Modal: FC<ModalProps> = memo(({ isOpen, onClose }) => {
	console.log('isOpen :>> ', isOpen)

	return (
		<div
			className={className(styles.modal, undefined, [
				isOpen ? styles.open : styles.close,
			])}
		>
			<div className={styles.modalContent}></div>
		</div>
	)
})
