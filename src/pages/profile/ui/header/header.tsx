import { memo, useCallback } from 'react'

import styles from './header.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/button'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks'
import {
	getProfile,
	getReadonly,
	profileActions,
	updateProfileData,
} from '@/entities/profile'
import { getAuthUser } from '@/entities/user'

export const Header = memo(() => {
	const { t } = useTranslation('profile')

	const dispatch = useAppDispatch()
	const readonly = useAppSelector(getReadonly)

	const authUserId = useAppSelector(getAuthUser)?.id
	const profileUserId = useAppSelector(getProfile)?.data?.id

	const isMyProfile = authUserId === profileUserId

	const onClickEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false))
	}, [])

	const onClickSave = useCallback(() => {
		dispatch(updateProfileData())
	}, [])

	const onClickCancel = useCallback(() => {
		dispatch(profileActions.cancelEdit())
	}, [])

	return (
		<div className={styles.header}>
			<p>{t('Profile')}</p>

			{isMyProfile ? (
				<>
					{readonly ? (
						<Button onClick={onClickEdit}>{t('Edit')}</Button>
					) : (
						<div>
							<Button onClick={onClickSave}>{t('Save')}</Button>
							<Button onClick={onClickCancel}>{t('Cancel')}</Button>
						</div>
					)}
				</>
			) : null}
		</div>
	)
})
