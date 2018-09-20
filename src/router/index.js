import Vue from 'vue';
import Router from 'vue-router';
import home from '@/pages/home';
import about from '@/pages/about';
import notFound from '@/pages/notFound';
import study from '@/pages/study';
import work from '@/pages/work';
import hobby from '@/pages/hobby';
import document from '@/pages/document';
import slider from '@/pages/slider';
import user from '@/pages/user';
import login from '@/pages/login';

Vue.use(Router);

export default new Router({
	scrollBehavior(to, from, saveposition) {
		//点击浏览器前进后退或者切换导航的时候触发
		// to是要进入的目标路由对象，from是离开的路由项
		// saveposition记录滚动条的坐标，切换的时候是null,
		// 点击前进后退的时候记录值
		// console.log(to);
		// console.log(from);
		// console.log(saveposition);
		// if (saveposition) {
		// 	return saveposition;
		// } else {
		// 	return { x: 0, y: 0 };
		// }

		if (to.hash) {
			return {
				selector: to.hash
			};
		}
	},
	mode: 'history',
	linkActiveClass: 'isactive',
	routes: [
		{
			path: '/',
			component: home,
			meta: {
				index: 0,
				title: 'home'
			}
		},
		{
			path: '/about',
			component: about,
			children: [
				{
					path: '',
					name: 'About',
					component: study,
					meta: {
						index: 1,
						title: 'about'
					}
				},
				{
					path: '/work', ///about/work
					name: 'Work',
					component: work
				},
				{
					path: '/hobby',
					name: 'Hobby',
					component: hobby
				}
			]
		},
		{
			path: '/home',
			component: home,
			alias: '/index'
		},
		{
			path: '/login',
			component: login
		},
		{
			path: '/document',
			beforeEnter(to, from, next) {
				next();
			},
			meta: {
				index: 2,
				login: true,
				title: 'document'
			},
			components: {
				default: document,
				slider: slider
			}
		},
		{
			path: '/user/:tip?/:id?',
			component: user,
			meta: {
				index: 3,
				title: 'user'
			}
		},
		{
			path: '*',
			// component: notFound,
			// redirect: '/home'
			// redirect:{path:'/home'},
			redirect: (to) => {
				console.log(to);
				return '/home';
			}
		}
	]
});
