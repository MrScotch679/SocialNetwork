import { Comment } from '@/entities/comment'
import { EntityState } from '@reduxjs/toolkit'

export interface ArticlesCommentsSchema extends EntityState<Comment, string> {
	isLoading?: boolean
	error?: string
}
