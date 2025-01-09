import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button, ButtonTheme, SizeButton } from './Button'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import 'app/styles/index.scss'
const meta = {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} as Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: ButtonTheme.PRIMARY,
    children: 'Button',
  },
  decorators: [StyleDecorator],
}

export const Clear: Story = {
  args: {
    variant: ButtonTheme.CLEAR,
    children: 'Button',
  },
}

export const INVERTED_PRIMARY: Story = {
  args: {
    variant: ButtonTheme.INVERTED_PRIMARY,
    children: 'Button',
  },
}

export const Outline: Story = {
  args: {
    variant: ButtonTheme.OUTLINE,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK), StyleDecorator],
}

export const Large: Story = {
  args: {
    size: SizeButton.L,
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: SizeButton.S,
    children: 'Button',
  },
}
