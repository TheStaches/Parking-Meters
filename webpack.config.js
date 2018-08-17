const path = require("path")

module.exports = {
  context: path.join(__dirname, "/src"),
  mode: "development",

  entry: {
    javascript: "./index"
  },

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/dist"),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, "node_modules", "react")
    },
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [  
          {
            loader: "babel-loader",
            test: /\.jsx?$/,
            exclude: /node_modules/,
          },
          {
            loader: "file?name=[name].[ext]",
            test: /\.html$/,
          },
        ],
  },
};