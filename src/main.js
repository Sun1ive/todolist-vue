import Vue from 'vue';
import { plugin } from 'vue-function-api';
import App from './App.vue';
import router from './router';
import store from './store';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

Vue.use(plugin);

new Vue({
	router,
	store,
	apolloProvider: createProvider(),
	render: (h) => h(App),
}).$mount('#app');
