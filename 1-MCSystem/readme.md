npm init -y

下面的包忽略 ，用现有的package.json

npm i mint-ui vue-review axios vue-router moment vue -S ;npm i webpack html-webpack-plugin css-loader style-loader less less-loader autoprefixer-loader babel-loader babel-core babel-preset-es2015 babel-plugin-transform-runtime url-loader file-loader vue-loader vue-template-compiler webpack-dev-server -D



package.json修改



webpack.config.js 



项目搭建



引入插件



头部用mint ui

底部用hello mui





# vue-router 

https://router.vuejs.org/zh/api/#append

router-link

### active-class

- 类型: `string`

- 默认值: `"router-link-active"`

  设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 `linkActiveClass`来全局配置。

~~~

let router = new VueRouter({
    linkActiveClass:'mui-active',
	routes:[
		{path:'/',redirect:{name:'home'}},//重定向
		{name:'home',path:'/home',component:Home}
	]
})
~~~













































