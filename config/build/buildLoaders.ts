import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildLoaders = (isDev: boolean) => {
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader', // Обрабатывает CSS
        options: {
          modules: {
            auto: /\.module\.\w+$/, // Включить CSS Modules для *.module.scss
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]' // Формат классов в dev
              : '[hash:base64:8]', // Формат классов в prod
          },
        },
      },
      'sass-loader', // Компилирует SCSS в CSS
    ],
  }

  return [tsLoader, cssLoader, fileLoader, svgLoader]
}
