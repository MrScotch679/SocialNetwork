import './styles/index.scss'
import { useTheme } from './hooks/theme/use-theme'
import { className } from './utils/className/className'

export const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={className('app', undefined, [theme])}>
			<button onClick={toggleTheme}>Change theme</button>
			<p>{'Hello World'}</p>
		</div>
	)
}
