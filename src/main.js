// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAPLtxmATYXUVBXXBkziYvGiQaI4M8gLBk",
  authDomain: "vuefirebase-ee5e4.firebaseapp.com",
  databaseURL: "https://vuefirebase-ee5e4.firebaseio.com",
  projectId: "vuefirebase-ee5e4",
  storageBucket: "vuefirebase-ee5e4.appspot.com",
  messagingSenderId: "827996896342",
  appId: "1:827996896342:web:693961074bf9878c990ff7",
  measurementId: "G-V8G5XZHL37"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

window.firebase=firebase;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
