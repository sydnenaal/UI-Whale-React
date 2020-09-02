const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const pkg = require("./package.json");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: { main: "./index.ts" },
  target: "web",
  output: {
    path: path.join(__dirname, "lib"),
    filename: "[name].bundle.js",
    library: "erokhin-react-ui-kit",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
  externals: {
    react: "commonjs react",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.sass$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
