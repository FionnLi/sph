module.exports = {
  //关闭eslint ，关闭prettier见 ..eslintrc.js文件中的rules
  lintOnSave: false,

  devServer: {
    proxy: {
      //检测请求地址中拦截代理的标识符 /api
      "/api": {
        target: "http://39.98.123.211",
        //由于请求的真实接口地址中也有一个api,所以这里并不需要重写为空字符
        //pathRewrite: { '^/api': '' },
      },
    },
  },
};
