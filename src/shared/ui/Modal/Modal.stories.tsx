import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from 'shared/ui/Modal/Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import 'app/styles/index.scss'
const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, temporibus.',
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.DARK), StyleDecorator],
}
export const Light: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, temporibus.',
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StyleDecorator],
}
