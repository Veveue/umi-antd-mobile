import { resolve } from "path";

export default {
    // externals: {
    //   react: "window.React",
    //   "react-dom": "window.ReactDOM",
    // },
    proxy: {
        "/api": {
            target: "http://localhost:9100", // 开发环境 数据来源开发服务器
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        },
    },
    alias: {
        pages: resolve(__dirname, "./src/pages"),
        assets: resolve(__dirname, "./src/assets"),
        layouts: resolve(__dirname, "./src/pages/layouts"),
        components: resolve(__dirname, "./src/components"),
        utils: resolve(__dirname, "./src/utils"),
    },
    urlLoaderExcludes: [/\.(svg)$/],
    disableCSSModules: true,
    ignoreMomentLocale: true,
    publicPath: "",
    define: {
        __DEV__: true,
    },
    env: {
        production: {
            extraBabelPlugins: ["transform-remove-console"], //打包发布时去除console
        },
    },
};
