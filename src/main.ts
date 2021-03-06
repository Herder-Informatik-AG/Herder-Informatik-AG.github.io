import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';
import VueHotkey from 'v-hotkey';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueHotkey);
Vue.use(BootstrapVue);
Vue.component('icon', Icon);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
