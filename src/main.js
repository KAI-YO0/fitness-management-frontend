import './assets/main.css'
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Carousel3d from 'vue-carousel-3d'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import naive from "naive-ui";


const app = createApp(App)
app.use(Toast)
app.use(router)
app.use(Carousel3d)
app.use(VueSweetalert2);
// app.use(naive);
app.mount('#app')


