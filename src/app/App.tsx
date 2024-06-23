import { className } from '@/shared/lib/className/className'
import './styles/index.scss'
import { useTheme } from './providers/theme-provider'

export const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={className('app', undefined, [theme])}>
			<button onClick={toggleTheme}>Change theme</button>
			<p>{'Hello World'}</p>
		</div>
	)
}