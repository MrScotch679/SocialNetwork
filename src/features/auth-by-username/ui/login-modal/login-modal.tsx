import { Modal } from '@/shared/ui/modal/modal'
import { FC, memo, Suspense } from 'react'
import { LoginForm } from '../login-form'
import { Loader } from '@/shared/ui/loader'
import { LoginModalProps } from './login-modal.types'

export const LoginModal: FC<LoginModalProps> = memo(props => {
	return (
		<Modal {...props}>
			<Suspense fallback={<Loader />}>
				<LoginForm />
			</Suspense>
		</Modal>
	)
})
