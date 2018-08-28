export default {
    plugins: [
        [
            "umi-plugin-dva",
            {
                immer: true, //default:false
                exclude: [/^\_/], //这里是以_开头的model不会被引用
            },
        ],
        [
            "umi-plugin-routes",
            {
                exclude: [/models/, /services/, /forms/, /views/],
            },
        ],
        [
            "umi-plugin-dll",
            {
                include: ["dva", "dva/router", "dva/saga", "dva/fetch"],
            },
        ],
        'umi-plugin-polyfill'
    ],
    hashHistory: true,
    disableServiceWorker: true,
    disableFastClick: true,
    disableCSSSourceMap: true,
    hd: false,
};
