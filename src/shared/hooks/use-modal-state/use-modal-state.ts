import { useCallback, useState } from 'react'

export const useModalState = () => {
	const [isOpen, setIsOpen] = useState(false)

	const onOpen = useCallback(() => {
		setIsOpen(true)
	}, [])

	const onClose = useCallback(() => {
		setIsOpen(false)
	}, [])

	return { onOpen, modalProps: { isOpen, onClose } }
}
