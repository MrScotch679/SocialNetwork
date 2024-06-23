import { THEME_LOCAL_STORAGE_KEY } from '@/constants/theme'
import { ThemeContext } from '@/contexts/theme/theme-context'
import { Theme } from '@/types/theme/theme.enum'
import { useContext } from 'react'

interface IUseThemeReturn {
	theme: Theme
	toggleTheme: () => void
}

export const useTheme = (): IUseThemeReturn => {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		if (setTheme) {
			const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
			localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme)
			setTheme(newTheme)
		}
	}

	return {
		theme,
		toggleTheme,
	}
}
