import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/app/App'
import { ThemeProvider } from '@/app/providers/theme-provider/index.ts'

import '@/shared/config/translation/translation.ts'
import { StoreProvider } from '@/app/providers/store-provider/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StoreProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</StoreProvider>
	</React.StrictMode>
)
