import { ArticleBlock } from './article-block'
import { ArticleType } from './article-type'

export interface Article {
	id: string
	title: string
	subtitle: string
	img: string
	views: number
	createdAt: string
	type: ArticleType[]
	blocks: ArticleBlock[]
}
