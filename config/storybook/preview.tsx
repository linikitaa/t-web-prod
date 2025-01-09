import type { Preview } from '@storybook/react'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StyleDecorator, RouterDecorator],
}

export default preview
