var webpack = require('webpack')
var path = require('path')

console.log(process.env.NODE_ENV)

/* entry */
var pages = {
  'home': {
    entry: 'src/main.js', // 入口js,
    filename: 'index.html', // 入口html文件
    template: 'index.html', // html文件所引用的模板[多个入口可以共用一个模板]
    inject: 'body', // js在生成html中的注入位置，默认为body标签
    chunks: ['chunk-vendors', 'chunk-common', 'home'] // 打包后的文件名，为保持结构清晰，与pages的key保持一致
  }
}

/* proc fun */
function resolve(dir) {
  // return path.join(__dirname, '..', dir)
  return path.join(__dirname, dir)
}

/* */
if (process.env.NODE_ENV === 'production') {
} else if (process.env.NODE_ENV === 'development') {
}

module.exports = {
  /* output */
  outputDir: 'dist',

  /* 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 */
  // lintOnSave: true,

  /* assets */
  // assetsDir: '',

  /* single、multi page */
  pages: pages,

  /* webpack 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中 */
  configureWebpack: {
    plugins: [
    ]
  },

  /* 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改 */
  chainWebpack: (config) => {
    config.resolve.alias
        // .set('vue$', 'vue/dist/vue.esm.js')
        .set('@', resolve('src'))
  },

  /* css */
  css: {
    // extract: true,
    // sourceMap: true,
    loaderOptions: {
    }
  },

  /* devServer */
  // devServer: {
  // }
}
