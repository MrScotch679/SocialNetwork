/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react'

// export const LoginForm = lazy(() => import('./login-form'))
//  lazy(() => import())

export const LoginForm = lazy(
	() =>
		new Promise(resolve => {
			// @ts-ignore
			setTimeout(() => resolve(import('./login-form')), 10000)
		})
)
