/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react'

export const Articles = lazy(
	() =>
		new Promise(resolve => {
			// @ts-ignore
			setTimeout(() => resolve(import('./articles')), 1000)
		})
)
