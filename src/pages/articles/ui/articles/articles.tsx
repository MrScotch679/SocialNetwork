import { useAppDispatch } from '@/shared/hooks/redux-hooks'
import { memo } from 'react'

const Articles = memo(() => {
	const dispatch = useAppDispatch()

	return <div>Articles</div>
})

export default Articles
