import { ArticleBlockType } from './article-block-type'

export interface ArticleBaseBlock {
	id: string
	type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
	type: ArticleBlockType.CODE
	code: string
}

export interface ArticleTextBlock extends ArticleBaseBlock {
	type: ArticleBlockType.TEXT
	title?: string
	paragraphs: string[]
}

export interface ArticleImageBlock extends ArticleBaseBlock {
	type: ArticleBlockType.IMAGE
	src: string
	title: string
}

export type ArticleBlock =
	| ArticleCodeBlock
	| ArticleTextBlock
	| ArticleImageBlock
