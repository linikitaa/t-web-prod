import { BuildOptions } from "./types/types";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: BuildOptions,
): webpack.Configuration => {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
  // return {
  //   entry: paths.entry,
  //   mode: mode,
  //   output: {
  //     filename: "[contenthash].[name].js",
  //     path: paths.build,
  //     clean: true,
  //   },
  //   module: {
  //     rules: buildLoaders(isDev),
  //   },
  //   devServer: isDev ? buildDevServer(options) : undefined,
  //   devtool: isDev ? "inline-source-map" : undefined,
  //   resolve: buildResolvers(options),
  //   plugins: buildPlugins(options),
  // };
};
