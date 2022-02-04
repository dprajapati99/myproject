import Vue from 'vue';
import { createApp } from 'vue'
import  firebase from "firebase/app";
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { firebaseConfig } from './firebase.js'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore

console.log(db);


const app = createApp(App)
app.use(router)


app.use(VueAxios, axios)
//app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')




export const eventBus = new Vue();

// creating an event bus.

new Vue({
  render: h => h(App),
}).$mount('#app')






// createApp(App).use(router).mount('#app')
