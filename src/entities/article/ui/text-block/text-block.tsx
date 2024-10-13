import { FC, memo } from 'react'
import { ArticleTextBlock } from '../../model/types/article-block'

interface TextBlockProps {
	block: ArticleTextBlock
}

export const TextBlock: FC<TextBlockProps> = memo(props => {
	const { block } = props

	return (
		<div>
			{block.title ? <h1>{block.title}</h1> : null}
			{block.paragraphs.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))}
		</div>
	)
})
