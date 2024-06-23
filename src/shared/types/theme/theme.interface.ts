import { Theme } from './theme.enum'

export interface ITheme {
	theme: Theme
	setTheme: (theme: Theme) => void
}
