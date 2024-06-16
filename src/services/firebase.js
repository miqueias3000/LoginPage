import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-BhIJeEKvFlajU6dGxdEDe4YYhHdSrjs",
  authDomain: "membrus-d3c93.firebaseapp.com",
  projectId: "membrus-d3c93",
  storageBucket: "membrus-d3c93.appspot.com",
  messagingSenderId: "656487225891",
  appId: "1:656487225891:web:834da716e5c4e7da56ef96"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;