import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { BuildPath } from "../build/types/types";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push(".ts", ".tsx");

  config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config!.module!.rules.push(buildCssLoaders(true));

  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(""),
    }),
  );

  return config;
};
