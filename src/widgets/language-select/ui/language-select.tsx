import { Languages } from '@/shared/config/translation/translation.types'
import { Button } from '@/shared/ui/button'
import { ButtonMode } from '@/shared/ui/button/button.types'
import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageSelect: FC = memo(() => {
	const { t, i18n } = useTranslation()

	const currentLanguage = useMemo(() => i18n.language, [i18n.language])

	const changeLanguage = useCallback(() => {
		i18n.changeLanguage(
			currentLanguage === Languages.RU ? Languages.EN : Languages.RU
		)
	}, [currentLanguage, i18n])

	return (
		<Button mode={ButtonMode.PRIMARY} onClick={changeLanguage}>
			{t(currentLanguage === Languages.RU ? 'RU' : 'EN')}
		</Button>
	)
})
