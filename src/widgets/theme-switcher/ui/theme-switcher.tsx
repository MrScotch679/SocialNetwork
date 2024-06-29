import { useTheme } from '@/app/providers/theme-provider'
import { FC, memo } from 'react'
import styles from './theme-switcher.module.scss'
import { className } from '@/shared/lib/className/className'
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
						className={className(styles.crater, undefined, [styles.craterOne])}
					/>
					<span
						className={className(styles.crater, undefined, [styles.craterTwo])}
					/>
					<span
						className={className(styles.crater, undefined, [
							styles.craterThree,
						])}
					/>
				</span>
				<span className={className(styles.star, undefined, [styles.starOne])} />
				<span className={className(styles.star, undefined, [styles.starTwo])} />
				<span
					className={className(styles.star, undefined, [styles.starThree])}
				/>
				<span
					className={className(styles.star, undefined, [styles.starFour])}
				/>
				<span
					className={className(styles.star, undefined, [styles.starFive])}
				/>
				<span className={className(styles.star, undefined, [styles.starSix])} />
			</label>
		</div>
	)
})
