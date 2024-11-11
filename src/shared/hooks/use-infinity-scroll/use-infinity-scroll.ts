import { MutableRefObject, useEffect } from 'react'

interface UseInfinityScrollProps {
	callback: () => void
	triggerRef: MutableRefObject<HTMLElement>
	wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfinityScroll = ({
	callback,
	triggerRef,
	wrapperRef,
}: UseInfinityScrollProps) => {
	useEffect(() => {
		const options = {
			root: wrapperRef?.current,
			rootMargin: '0px',
			threshold: 1.0,
		}

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				callback()
			}
		}, options)

		observer.observe(triggerRef.current)

		return () => {
			if (observer) {
				observer.unobserve(triggerRef.current)
				observer.disconnect()
			}
		}
	}, [triggerRef, wrapperRef])
}
