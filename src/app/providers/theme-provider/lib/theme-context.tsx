import { ITheme } from '@/shared/types/theme/theme.interface'
import { createContext } from 'react'

export const ThemeContext = createContext<ITheme>({} as ITheme)
