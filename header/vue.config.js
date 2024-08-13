const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "header",
        filename: "remoteEntry.js",
        exposes: {
          "./MyHeader": path.resolve(__dirname, "src/components/MyHeader.vue"),
        },
        shared: {
          vue: { singleton: true, eager: true },
        },
      }),
    ],
  },
  devServer: {
    port: 8080,
  },
  pages: {
    index: {
      entry: "./src/index.js",
    },
  },
};
