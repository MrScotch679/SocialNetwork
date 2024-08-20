import { className } from '@/shared/lib/className/className'
import './styles/index.scss'
import { useTheme } from './providers/theme-provider'
import { AppRouter } from './providers/router'

export const App = () => {
	const { theme } = useTheme()

	return (
		<div className={className('app', undefined, [theme])}>
			<AppRouter />
		</div>
	)
}
