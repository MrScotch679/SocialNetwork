import {
	AnimationEvent,
	MouseEvent,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { ModalState } from './modal.types'

export const useModal = (onClose: () => void) => {
	const [modalAnamation, setModalAnamation] = useState(ModalState.OPEN)

	const handleClose = useCallback(() => {
		setModalAnamation(ModalState.CLOSE)
	}, [onClose])

	const handleClickOverlay = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (event.target === event.currentTarget) {
				handleClose()
			}
		},
		[onClose]
	)

	const onAnimationEnd = useCallback(
		(event: AnimationEvent<HTMLDivElement>) => {
			if (event?.animationName?.includes('modalFadeOut')) {
				onClose()
			}
		},
		[onClose]
	)

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

	return {
		modalAnamation,
		handleClose,
		handleClickOverlay,
		onAnimationEnd,
	}
}
