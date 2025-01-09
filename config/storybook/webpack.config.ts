import webpack from 'webpack'
import { BuildPath } from '../build/types/types'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default ({ config }: { config: webpack.Configuration }) => {
  const isDev = process.env.NODE_ENV === 'development'
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  // config.module.rules.push(buildCssLoaders(true))
  //
  // config.plugins?.push(
  //   new MiniCssExtractPlugin({
  //     filename: isDev ? '[name].css' : '[name].[contenthash].css',
  //     chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
  //   }),
  // )
  return config
}
