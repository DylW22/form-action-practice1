// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDtWjXvFOvcQ9rBwHU1POh7rk1Ok9TLV4o",
    authDomain: "test-project-5b536.firebaseapp.com",
    projectId: "test-project-5b536",
    storageBucket: "test-project-5b536.appspot.com",
    messagingSenderId: "333310165215",
    appId: "1:333310165215:web:b501c21573dd8efcdd696a",
    measurementId: "G-Y15LVSKXMM"
  };

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export { storage, firebaseApp };