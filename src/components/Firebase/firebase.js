import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAmKJ3GM_4eeagtD6tFE6NAkPY-imA6J_0",
    authDomain: "todolist-ed003.firebaseapp.com",
    databaseURL: "https://todolist-ed003.firebaseio.com",
    projectId: "todolist-ed003",
    storageBucket: "todolist-ed003.appspot.com",
    messagingSenderId: "957026729409",
    appId: "1:957026729409:web:1818ba9c565f9442f70340"
  };

  firebase.initializeApp(config);
   
  export default firebase;