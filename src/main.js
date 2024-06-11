import { createApp } from 'vue'
import App from './App.vue'
import NavHead from './components/NavHead.vue'
import GenInfo from './components/GenInfo.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.component('nav-head',NavHead);
app.component('gen-info',GenInfo);

app.mount('#app')
