import { Decorator, StoryFn } from '@storybook/react'
import React from 'react'
import 'app/styles/index.css'

export const StyleDecorator: Decorator = (Story) => (
  <div className="global-styles">{Story()}</div>
)
