import { ITheme } from '@/types/theme/theme.interface'
import { createContext } from 'react'

export const ThemeContext = createContext<ITheme>({} as ITheme)
