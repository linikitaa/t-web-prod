import React from 'react'
import { StoryFn } from '@storybook/react'

export const ThemeDecorator = (theme: string) => (Story: any) => {
  return <div className={`theme-${theme}`}>{Story()}</div>
}
