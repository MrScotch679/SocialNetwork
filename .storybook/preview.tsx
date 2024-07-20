import type { Preview } from '@storybook/react'
import { ThemeDecorator } from '../src/app/configs/storybook/decorators/theme-decorator'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [ThemeDecorator],
}

export default preview
