import { Decorator, StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router'
import React from 'react'
export const RouterDecorator: Decorator = (Story, context) => (
  <BrowserRouter>
    <Story {...context.args} />
  </BrowserRouter>
)
