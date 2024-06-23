import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			types: `${path.resolve(__dirname, './src/types')}`,
			assets: `${path.resolve(__dirname, './src/assets')}`,
			components: `${path.resolve(__dirname, './src/components')}`,
			contexts: `${path.resolve(__dirname, './src/contexts')}`,
			pages: `${path.resolve(__dirname, './src/pages')}`,
			styles: `${path.resolve(__dirname, './src/styles')}`,
			providers: `${path.resolve(__dirname, './src/providers')}`,
			constants: `${path.resolve(__dirname, './src/constants')}`,
			hooks: `${path.resolve(__dirname, './src/hooks')}`,
			utils: `${path.resolve(__dirname, './src/hooks')}`,
		},
	},
})
