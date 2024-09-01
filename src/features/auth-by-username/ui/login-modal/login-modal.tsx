import { Modal } from '@/shared/ui/modal/modal'
import { FC, memo } from 'react'
import { LoginForm } from '../login-form/login-form'

interface LoginModalProps {
	isOpen: boolean
	onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = memo(props => {
	return (
		<Modal {...props}>
			<LoginForm />
		</Modal>
	)
})
