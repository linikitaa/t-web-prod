import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { BuildOptions } from "./types/types";

export const buildLoaders = ({ isDev }: BuildOptions) => {
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  const cssLoader = buildCssLoaders(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [babelLoader, tsLoader, cssLoader, fileLoader, svgLoader];
};
