import { Decorator, StoryFn } from '@storybook/react'
import React from 'react'
import 'app/styles/index.scss'

export const StyleDecorator: Decorator = (Story) => <div>{Story()}</div>
