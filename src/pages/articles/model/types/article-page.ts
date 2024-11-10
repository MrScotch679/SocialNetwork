import { ArticleView } from '@/entities/article'
import { Article } from '@/entities/article/model/types/article'
import { EntityState } from '@reduxjs/toolkit'

export interface ArticlePageSchema extends EntityState<Article, string> {
	view: ArticleView

	isLoading: boolean
	error?: string
}
