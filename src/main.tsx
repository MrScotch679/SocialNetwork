import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app/App.tsx'
import { ThemeProvider } from './app/providers/theme-provider/index.ts'

import './shared/config/translation/translation.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
