import { FC, memo, useCallback } from 'react'

import styles from './code.module.scss'
import { FaRegCopy } from 'react-icons/fa6'
import { Button } from '../button'
import { Icon } from '../icon'
import { ButtonMode } from '../button/button.types'

interface CodeProps {
	code: string
}

export const Code: FC<CodeProps> = memo(props => {
	const { code: curretntCode } = props

	const onClickCopy = useCallback(() => {
		navigator.clipboard.writeText(curretntCode)
	}, [])

	return (
		<pre className={styles.code}>
			<Button
				mode={ButtonMode.CLEAR}
				className={styles.copyButton}
				onClick={onClickCopy}
			>
				<Icon icon={FaRegCopy} />
			</Button>
			<code>{curretntCode}</code>
		</pre>
	)
})
