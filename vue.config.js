
module.exports = {
	
  configureWebpack: {
	devServer:{
	      proxy: {
			  "/api": {
			    target: "https://easy-mock.com/mock/5bd273b32d219744ff849604/bilibili",
			    pathRewrite: {"^/api" : ""},
			    changeOrigin: true
			  },
			   "/bulletscreen": {
			    target: "https://comment.bilibili.com",
			    pathRewrite: {"^/bulletscreen" : ""},
			    changeOrigin: true
			  }
			}
	     }
  }
}





