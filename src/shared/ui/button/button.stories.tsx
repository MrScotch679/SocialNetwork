import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import { Theme } from '@/shared/types/theme/theme.enum'
import { ButtonMode } from './button.types'

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
