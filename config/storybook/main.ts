import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'
const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  // webpackFinal: async (config) => {
  //   config.module?.rules?.push({
  //     test: /\.scss$/, // Обработка SCSS
  //     use: [
  //       'style-loader', // Вставляет стили в head страницы
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           modules: {
  //             localIdentName: '[name]__[local]__[hash:base64:5]', // Поддержка CSS-модулей
  //           },
  //         },
  //       },
  //       'sass-loader', // Компиляция SCSS в CSS
  //     ],
  //     include: path.resolve(__dirname, '../../src'), // Ограничиваем обработку только вашей src
  //   })
  //   return config
  // },
}
export default config
