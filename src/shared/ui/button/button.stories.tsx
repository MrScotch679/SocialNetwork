import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonMode } from './button'
import { Theme } from '@/shared/types/theme/theme.enum'

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	parameters: {
		theme: Theme.DARK,
	},
	args: {
		mode: ButtonMode.CLEAR,
		children: 'Text',
	},
}
