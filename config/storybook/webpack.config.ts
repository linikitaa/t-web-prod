import webpack from 'webpack'
import { BuildPath } from '../build/types/types'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import path from 'path'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules.push(buildCssLoaders(true))
  return config
}
