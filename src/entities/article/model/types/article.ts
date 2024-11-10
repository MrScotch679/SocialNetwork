import { User } from '@/entities/user'
import { ArticleBlock } from './article-block'
import { ArticleType } from './article-type'

export interface Article {
	id: string
	user: User
	title: string
	subtitle: string
	img: string
	views: number
	createdAt: string
	type: ArticleType[]
	blocks: ArticleBlock[]
}
