import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolves(option: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    mainFiles: ["index"],
    modules: [option.paths.src, "node_modules"],
    alias: {},
  };
}
