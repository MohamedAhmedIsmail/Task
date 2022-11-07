import Vue from 'vue';
import App from './App.vue';
import "./bootstrap.js";
import BootstrapVue from 'bootstrap-vue';
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate';
import VueSweetalert2 from 'vue-sweetalert2';
import vco from "v-click-outside";
import router from './router';
import store from './state/store';
import iziToast from './assets/plugin/iziToastPlugin';
import Permissions from './mixins/Permissions';
import _ from 'lodash';
import FormValidation from '@/components/form-validation.vue';
import moment from 'moment-hijri';
// import VueQRCodeComponent from 'vue-qrcode-component';
import VueI18n from 'vue-i18n'
import messages from '../lang/language';
Vue.use(VueI18n);
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);

var i18n = new VueI18n({
    locale: 'en',
    messages
});




require('@/assets/scss/appen.scss');




Vue.prototype.moment = moment;
Vue.prototype.axios = window.axios;
Vue.prototype._ = _;
Vue.config.productionTip = false;
Vue.use(BootstrapVue, {"BFormDatepicker": {"locale" : "ar-SA"}} );
Vue.use(iziToast);
Vue.use(vco);
Vue.use(Vuelidate);
Vue.use(VueSweetalert2);
Vue.component('apexchart', VueApexCharts)
Vue.component('FormValidation', FormValidation);
// Vue.component('qr-code', VueQRCodeComponent);
Vue.mixin(Permissions);
Vue.mixin(i18n);
new Vue({
    router: router,
    i18n,
    store: store,
    render: h => h(App)
}).$mount('#app')
