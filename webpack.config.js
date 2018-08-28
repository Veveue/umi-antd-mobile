const path = require("path");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
module.exports = webpackConfig => {
    webpackConfig.module.rules.unshift(
        {
            test: /\.svg$/,
            use: [
                {
                    loader: "svg-sprite-loader",
                    options: {
                        extract: true,
                    },
                },
                {
                    loader: "svgo-loader",
                    options: {
                        plugins: [{ removeTitle: true }, { removeStyleElement: true }],
                    },
                },
            ],
        },
        {
            test: /.js$/,
            loader: "babel-loader",
            include: [path.resolve(__dirname, "node_modules/cn-holiday")],
            query: {
                presets: ["env"],
            },
        }
    );

    webpackConfig.plugins = webpackConfig.plugins.concat([new SpriteLoaderPlugin()]);
    return webpackConfig;
};
