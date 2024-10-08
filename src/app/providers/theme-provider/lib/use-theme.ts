import { ThemeContext } from '@/app/providers/theme-provider/lib/theme-context'

import { useCallback, useContext } from 'react'
import { Theme } from '@/shared/types/theme/theme.enum'
import { THEME_LOCAL_STORAGE_KEY } from '@/shared/constants/local-storage'

interface IUseThemeReturn {
	theme: Theme
	toggleTheme: () => void
}

export const useTheme = (): IUseThemeReturn => {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = useCallback(() => {
		if (setTheme) {
			const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
			localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme)
			setTheme(newTheme)
		}
	}, [setTheme, theme])

	return {
		theme,
		toggleTheme,
	}
}
