import { className } from '@/shared/lib/className/className'
import './styles/index.scss'
import { useTheme } from './providers/theme-provider'
import { AppRouter } from './providers/router'
import { useState } from 'react'
import { Modal } from '@/shared/ui/modal/modal'

export const App = () => {
	const { theme } = useTheme()

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={className('app', undefined, [theme])}>
			<button onClick={() => setIsOpen(prev => !prev)}>Open</button>

			{isOpen ? (
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
					{'22222222222222222'}
				</Modal>
			) : null}

			<AppRouter />
		</div>
	)
}
