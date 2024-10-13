import { FC, memo } from 'react'
import { ArticleImageBlock } from '../../model/types/article-block'

interface ImageBlockProps {
	block: ArticleImageBlock
}

export const ImageBlock: FC<ImageBlockProps> = memo(props => {
	const { block } = props

	return (
		<div>
			<img src={block.src} alt={block.title} />

			{block.title ? <p>{block.title}</p> : null}
		</div>
	)
})
