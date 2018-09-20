// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});

// router.beforeEach((to, from, next) => {
// 	console.log(to);
// 	console.log(from);
// 	// next();
// 	// next(false);
// 	if (to.meta.login) {
// 		next('/login');
// 	} else {
// 		next();
// 	}
// });

router.afterEach((to, from) => {
	if (to.meta.title) {
		window.document.title = to.meta.title;
	} else {
		window.document.title = 'miaov';
	}
});
