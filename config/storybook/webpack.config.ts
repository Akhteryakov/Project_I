import path from "path";
import webpack, { RuleSetRule } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoasers";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    html: "",
    entry: "",
    output: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  // eslint-disable-next-line no-param-reassign,
  config.module!.rules = config.module!.rules!.map((rule: any) => {
    // хз как это типизировать
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  });
  config.module?.rules?.push(buildCssLoader(true));

  return config;
};