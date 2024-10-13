import { FC, memo } from 'react'
import { ArticleCodeBlock } from '../../model/types/article-block'
import { Code } from '@/shared/ui/code'

interface CodeBlockProps {
	block: ArticleCodeBlock
}

export const CodeBlock: FC<CodeBlockProps> = memo(props => {
	const { block } = props

	return <Code code={block.code} />
})
