import { ModuleLoader } from '@/shared/lib/module-loader'
import { FC, memo, useCallback, useEffect } from 'react'
import { articleActions, articleReducer } from '../../model/slice/article-slice'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks'
import { getArticleById } from '../../model/services/get-article-by-id/get-article-by-id'
import { getArticleData } from '../../model/selectors/get-article-data/get-article-data'
import { getArticleError } from '../../model/selectors/get-article-error/get-article-error'
import { getArticleLoading } from '../../model/selectors/get-article-loading/get-article-loading'
import { Skeleton } from '@/shared/ui/skeleton'
import { IoCalendarOutline } from 'react-icons/io5'

import { FaEye } from 'react-icons/fa'

import styles from './article.module.scss'
import { Avatar } from '@/shared/ui/avatar'
import { Icon } from '@/shared/ui/icon'
import { ArticleBlock } from '../../model/types/article-block'
import { ArticleBlockType } from '../../model/types/article-block-type'
import { CodeBlock } from '../code-block/code-block'
import { TextBlock } from '../text-block/text-block'
import { ImageBlock } from '../image-block/image-block'

interface ArticleProps {
	articleId: string
}

export const Article: FC<ArticleProps> = memo(props => {
	const { articleId } = props

	const dispatch = useAppDispatch()

	const articleData = useAppSelector(getArticleData)
	const articleError = useAppSelector(getArticleError)
	const isLoading = useAppSelector(getArticleLoading)

	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
			case ArticleBlockType.CODE:
				return <CodeBlock block={block} />
			case ArticleBlockType.TEXT:
				return <TextBlock block={block} />
			case ArticleBlockType.IMAGE:
				return <ImageBlock block={block} />
			default:
				return null
		}
	}, [])

	useEffect(() => {
		dispatch(getArticleById(articleId))
	}, [])

	return (
		<ModuleLoader reducerKey='article' reducer={articleReducer}>
			<div className={styles.article}>
				<Avatar src={articleData?.img} size={50} />
				<p>{articleData?.title}</p>
				<p>{articleData?.subtitle}</p>

				<Icon icon={FaEye} />

				<p>{articleData?.views}</p>

				<Icon icon={IoCalendarOutline} />

				<p>{articleData?.createdAt}</p>

				{articleData?.blocks.map(renderBlock)}
			</div>
		</ModuleLoader>
	)
})
