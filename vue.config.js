const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
        symlinks: false,
        alias: {
            vue$: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
        }
    }
}
})
