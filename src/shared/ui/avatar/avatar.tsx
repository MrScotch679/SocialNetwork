import { CSSProperties, FC, memo, useMemo } from 'react'

import styles from './avatar.module.scss'

interface AvatarProps {
	src?: string
	size?: number
}

export const Avatar: FC<AvatarProps> = memo(({ src, size = 50 }) => {
	const style = useMemo<CSSProperties>(
		() => ({ width: size, height: size }),
		[]
	)

	return <img src={src} alt='avatar' className={styles.avatar} style={style} />
})
