import { Configuration } from "webpack";
import { resolve } from "path";

export default () => {
  const config: Configuration = {
    entry: {
      clone: "./src/clone.ts",
      pull: "./src/pull.ts",
      push: "./src/push.ts",
      backup: "./src/backup.ts",
      restore: "./src/restore.ts",
    },
    output: {
      path: resolve(__dirname, "./dist"),
      libraryTarget: "commonjs"
    },
    mode: "production",
    // devtool: "source-map",
    target: "node",
    resolve: {
      extensions: [".js", ".ts", ".json"]
    },
    externals: [],
    node: {
      fs: true,
      net: true,
      __dirname: false,
      __filename: false
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/
        }
      ]
    }
  };
  return config;
};
