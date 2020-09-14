module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '互联网+监管数据填报'
                return args
            })
    },
    devServer: {
        proxy: {
            '/report': {
                target: 'http://192.168.200.233:8081/report/',
                changeOrigin: true,
                pathRewrite: {
                    '^/report': ''
                }
            }
        }
    },
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "assets",
    lintOnSave: false,
    productionSourceMap: true,
    runtimeCompiler: true
}