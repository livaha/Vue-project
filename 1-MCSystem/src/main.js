'use strict';

/*引入第三方包*/
import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

//MUI:引入mui的样式
import './static/vendor/mui/dist/css/mui.css'
//全局样式
import './static/css/global.css';

import Axios from 'axios';
//挂载原型
Vue.prototype.$ajax = Axios;
Axios.defaults.baseUrl = 'http://127.0.0.1:8899/';

import Moment from 'moment';

/*引入全局组件*/
import NavBar from './components/common/navBar.vue'
Vue.component('navBar',NavBar);//使用最好以nav-bar

/*定义全局过滤器*/
/*convertDate为过滤器名，value为要过滤的值*/
Vue.filter('convertDate',function(value){
	//console.log(value);
	return Moment(value).format('YYYY-MM-DD');
});


/*引入自定义组件*/
import App from './app.vue';
import Home from './components/home/home.vue'
import VIP from './components/vip/vip.vue'
import Shopcar from './components/shopcar/shopcar.vue'
import Search from './components/search/search.vue'
import NewsList from './components/news/newsList.vue'
import NewsDetail from './components/news/newsDetail.vue'
import PhotoShare from './components/photo/photoShare.vue'
import PhotoDetail from './components/photo/photoDetail.vue'




/*VueRouter:创建对象并配置路由规则！--导航*/
let router = new VueRouter({
    linkActiveClass:'mui-active',
	routes:[
		{path:'/',redirect:{name:'home'}},//重定向
		{name:'home',path:'/home',component:Home},
		{name:'vip',path:'/vip',component:VIP},
		{name:'shopcar',path:'/shopcar',component:Shopcar},
		{name:'search',path:'/search',component:Search},
		{name:'news_list',path:'/news/list',component:NewsList},
		{name:'news_detail',path:'/news/detail',component:NewsDetail},
		{name:'photoShare',path:'/photo/share',component:PhotoShare},
		{name:'photoDetail',path:'/photo/detail/:id',component:PhotoDetail},
	]
})

new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})










