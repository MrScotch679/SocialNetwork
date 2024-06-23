import { THEME_LOCAL_STORAGE_KEY } from '@/constants/theme'
import { ThemeContext } from '@/contexts/theme/theme-context'
import { Theme } from '@/types/theme/theme.enum'
import { FC, PropsWithChildren, useMemo, useState } from 'react'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const themeLocalStorage = localStorage.getItem(
		THEME_LOCAL_STORAGE_KEY
	) as Theme

	const [theme, setTheme] = useState<Theme>(themeLocalStorage || Theme.LIGHT)

	const providerValue = useMemo(() => ({ theme, setTheme }), [theme])

	return (
		<ThemeContext.Provider value={providerValue}>
			{children}
		</ThemeContext.Provider>
	)
}
