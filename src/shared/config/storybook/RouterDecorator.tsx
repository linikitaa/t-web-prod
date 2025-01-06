import { Decorator, StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router'

export const RouterDecorator: Decorator = (Story, context) => (
  <BrowserRouter>
    <Story {...context.args} />
  </BrowserRouter>
)
