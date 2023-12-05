import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCartShopping,
  faSearch,
  faBars,
  faTrash,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap';
import '@/assets/scss/main.scss';

library.add(faCartShopping, faSearch, faBars, faTrash, faPlus, faMinus);

createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
