import path from 'path'
import { BuildEnv, BuildMode, BuildPath } from './config/build/types/types'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode: BuildMode = env.mode || 'development'
  const isDev: boolean = mode === 'development'
  const PORT = env.port || 3000

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })
}
