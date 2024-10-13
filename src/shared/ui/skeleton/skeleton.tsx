import { CSSProperties, FC, memo, useMemo } from 'react'

import styles from './skeleton.module.scss'

interface SkeletonProps {
	width?: number
	height?: number
	borderRadius?: number
}

export const Skeleton: FC<SkeletonProps> = memo(props => {
	const { width = '100%', height = '100%', borderRadius } = props

	const style = useMemo<CSSProperties>(
		() => ({
			width,
			height,
			borderRadius,
		}),
		[]
	)

	return <div style={style} className={styles.skeleton}></div>
})
