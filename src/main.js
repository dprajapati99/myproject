import Vue from 'vue';
import { createApp } from 'vue'

import App from './App.vue'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMawM1IZmoMXS2b0yqeXeiU7qfyjtmhMI",
  authDomain: "myproject-7acf3.firebaseapp.com",
  projectId: "myproject-7acf3",
  storageBucket: "myproject-7acf3.appspot.com",
  messagingSenderId: "31687430682",
  appId: "1:31687430682:web:3ab10929488e9212ed77a3",
  measurementId: "G-4J1VMV2ZD8"
};

const db = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig)
//export const db = firebase.firestore()
console.log(db)



const app = createApp(App)
app.use(router)


app.use(VueAxios, axios)
//app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')




//export const eventBus = new Vue();

// creating an event bus.

new Vue({
  render: h => h(App),
}).$mount('#app')






// createApp(App).use(router).mount('#app')
