import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildPath } from './types/types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugins = (
  paths: BuildPath,
): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
