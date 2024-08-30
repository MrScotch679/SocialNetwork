import { Button } from '@/shared/ui/button'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

export const LoginForm = memo(() => {
	const { t } = useTranslation(['login', 'common'])

	return (
		<div>
			<input type='text' />
			<input type='text' />
			<Button>{t('login')}</Button>
		</div>
	)
})
