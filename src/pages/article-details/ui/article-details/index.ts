/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react'

export const ArticleDetails = lazy(
	() =>
		new Promise(resolve => {
			// @ts-ignore
			setTimeout(() => resolve(import('./article-details')), 1000)
		})
)
