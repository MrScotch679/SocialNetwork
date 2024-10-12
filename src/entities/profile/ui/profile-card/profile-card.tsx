import { ChangeEvent, FC, memo } from 'react'

import { Profile } from '../../model/types/profile'
import { Input } from '@/shared/ui/input/input'
import { useTranslation } from 'react-i18next'
import { Avatar } from '@/shared/ui/avatar'
import { Currency } from '@/shared/types/currency'
import { Сities } from '@/shared/types/cities'
import { Select } from '@/shared/ui/select'

export interface ProfileCardProps {
	profileData?: Profile
	isLoading?: boolean
	errorProfile?: string
	readonly?: boolean
	onChangeFirstName?: (event: ChangeEvent<HTMLInputElement>) => void
	onChangeLastName?: (event: ChangeEvent<HTMLInputElement>) => void
	onChangeAge?: (event: ChangeEvent<HTMLInputElement>) => void
	onChangeCountry?: (event: ChangeEvent<HTMLInputElement>) => void
	onChangeCity?: (value: Сities) => void
	onChangeCurrency?: (value: Currency) => void
	onChangeUsername?: (event: ChangeEvent<HTMLInputElement>) => void
	onChangeAvatar?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const ProfileCard: FC<ProfileCardProps> = memo(props => {
	const {
		profileData,
		isLoading,
		errorProfile,
		readonly,
		onChangeFirstName,
		onChangeLastName,
		onChangeAge,
		onChangeCountry,
		onChangeCity,
		onChangeCurrency,
		onChangeUsername,
		onChangeAvatar,
	} = props

	const { t } = useTranslation()

	return (
		<div>
			<Avatar src={profileData?.avatar} />

			<Input
				disabled={readonly}
				label={t('First name')}
				value={profileData?.firstName}
				onChange={onChangeFirstName}
			/>

			<Input
				disabled={readonly}
				label={t('Last name')}
				value={profileData?.lastName}
				onChange={onChangeLastName}
			/>

			<Input
				disabled={readonly}
				label={t('Username')}
				value={profileData?.username}
				onChange={onChangeUsername}
			/>

			<Input
				disabled={readonly}
				label={t('Avatar')}
				value={profileData?.avatar}
				onChange={onChangeAvatar}
			/>

			<Input
				disabled={readonly}
				label={t('Age')}
				value={profileData?.age}
				onChange={onChangeAge}
			/>

			<Input
				disabled={readonly}
				label={t('Country')}
				value={profileData?.country}
				onChange={onChangeCountry}
			/>

			<Select
				value={''}
				label={t('City')}
				options={[
					{
						value: Сities.MOSCOW,
						label: t('City.MOSCOW'),
					},
				]}
				onChange={onChangeCity}
			/>

			<Select
				label={t('Currency')}
				value={''}
				options={[
					{
						value: Currency.USD,
						label: t('Currency.USD'),
					},
				]}
				onChange={onChangeCurrency}
			/>
		</div>
	)
})
