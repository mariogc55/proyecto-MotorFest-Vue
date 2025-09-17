import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el enrutador aquí

const app = createApp(App);

app.use(router); // Utiliza el enrutador en la aplicación

app.mount('#app');