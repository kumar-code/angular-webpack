const HtmlWebpackPlugin = require('html-webpack-plugin');
const scriptOrder = ['runtime', 'polyfills', 'styles', 'vendor', 'main'];
const fs = require('fs');
const path = require('path');

module.exports = {
  output: {
    "publicPath": "angular-ui/"
  },


  plugins: [
    new HtmlWebpackPlugin({
        "template": "./src/index.ftl",
        "filename": "./index.ftl",
        "inject": false,
        "inject": true,
        "xhtml": true,
        "minify": false
    })
    // {
    //   apply: (compile) => {
    //     compile.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
    //       fs.unlink(path.join(process.cwd(), "./backend/src/main/webapp/angular-ui/index.html"), (error) => {
    //         if (error) throw error;
    //       });
    //     });
    //   }
    // }
  ]
}