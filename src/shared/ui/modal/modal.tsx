import { FC, memo } from 'react'

import styles from './modal.module.scss'
import { Button } from '@/shared/ui/button'
import { ButtonMode } from '../button/button.types'
import { ModalProps } from './modal.types'
import { Portal } from '@/shared/ui/portal'
import { useModal } from './modal.hooks'
import { classNames } from '@/shared/lib/classNames/classNames'

export const Modal: FC<ModalProps> = memo(props => {
	const { isOpen, onClose, children, className } = props

	if (!isOpen) {
		return null
	}

	const { modalAnamation, handleClose, handleClickOverlay, onAnimationEnd } =
		useModal(onClose)

	return (
		<Portal>
			<div className={styles.modalOverlay} onClick={handleClickOverlay}>
				<div
					className={classNames(styles.modal, {}, [
						styles[modalAnamation],
						className,
					])}
					onAnimationEnd={onAnimationEnd}
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
		</Portal>
	)
})
