import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import 'app/styles/index.scss'

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Text_Error: Story = {
  args: {
    title: 'Error ',
    subtitle: 'some error message',
    theme: TextTheme.ERROR,
  },
}
