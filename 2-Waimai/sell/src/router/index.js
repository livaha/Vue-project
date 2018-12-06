import Vue from 'vue';
import Router from 'vue-router';
/* 引入组件 */
import Goods from '../components/goods/goods.vue';
import Seller from '../components/seller/seller.vue';
import Star from '../components/star/star.vue';

Vue.use(Router);

const routes = [
  { path: '/goods', component: Goods },
  { path: '/seller', component: Seller },
  { path: '/star', component: Star }
];

export default new Router({
  routes,
  linkActiveClass: 'active'
});
