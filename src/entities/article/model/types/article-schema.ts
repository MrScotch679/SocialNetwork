import { Article } from './article'

export interface ArticleSchema {
	isLoading: boolean
	data?: Article
	error?: string
}
