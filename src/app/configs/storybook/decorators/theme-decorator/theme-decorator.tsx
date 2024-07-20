import { Decorator } from '@storybook/react'
import '@/app/styles/index.scss'

export const ThemeDecorator: Decorator = (Story, context) => (
	<div className={`app ${context.parameters.theme}`}>
		<Story />
	</div>
)
