/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react'

// export const LoginForm = lazy(() => import('./login-form'))
//  lazy(() => import())

export const Profile = lazy(
	() =>
		new Promise(resolve => {
			// @ts-ignore
			setTimeout(() => resolve(import('./profile')), 1000)
		})
)
