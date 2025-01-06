import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoaders(isDev: boolean) {
  return {
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
}
