const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "content",
        filename: "remoteEntry.js",
        exposes: {
          "./MyContent": path.resolve(
            __dirname,
            "src/components/MyContent.vue"
          ),
        },
        remotes: {
          header: "header@http://localhost:8080/remoteEntry.js",
        },
        shared: {
          vue: { singleton: true, eager: true },
        },
      }),
    ],
  },
  devServer: {
    port: 8081,
  },
  pages: {
    index: {
      entry: "./src/index.js",
    },
  },
};
