import { lazy } from 'react'

export const Main = lazy(
	() =>
		new Promise(resolve => {
			// @ts-ignore
			setTimeout(() => resolve(import('./ui/main')), 10000)
		})
)
