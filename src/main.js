import Vue, { createApp } from '@vue/compat';
import BootstrapVue from 'bootstrap-vue';
import router from './router/index.js'

import APP from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

// const app = createApp(HelloBootstrap);
const app = createApp(APP);
app.use(router)
app.mount('#app');
