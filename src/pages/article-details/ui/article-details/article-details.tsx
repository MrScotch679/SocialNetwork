import { Article } from '@/entities/article'
import { memo } from 'react'
import { useParams } from 'react-router-dom'

const ArticleDetails = memo(() => {
	const { id } = useParams()

	return <>{id ? <Article articleId={id} /> : 'Not found'}</>
})

export default ArticleDetails
