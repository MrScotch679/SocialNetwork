import { useTheme } from '@/app/providers/theme-provider'
import { FC, memo } from 'react'
import styles from './theme-switcher.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Theme } from '@/shared/types/theme/theme.enum'

export const ThemeSwitcher: FC = memo(() => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={styles.toggleWrapper}>
			<input
				id='dn'
				type='checkbox'
				checked={theme === Theme.DARK}
				onChange={toggleTheme}
			/>
			<label htmlFor='dn' className={styles.toggle}>
				<span className={styles.toggleHandler}>
					<span
						className={classNames(styles.crater, undefined, [styles.craterOne])}
					/>
					<span
						className={classNames(styles.crater, undefined, [styles.craterTwo])}
					/>
					<span
						className={classNames(styles.crater, undefined, [
							styles.craterThree,
						])}
					/>
				</span>
				<span
					className={classNames(styles.star, undefined, [styles.starOne])}
				/>
				<span
					className={classNames(styles.star, undefined, [styles.starTwo])}
				/>
				<span
					className={classNames(styles.star, undefined, [styles.starThree])}
				/>
				<span
					className={classNames(styles.star, undefined, [styles.starFour])}
				/>
				<span
					className={classNames(styles.star, undefined, [styles.starFive])}
				/>
				<span
					className={classNames(styles.star, undefined, [styles.starSix])}
				/>
			</label>
		</div>
	)
})
