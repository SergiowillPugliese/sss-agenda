// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA4P1D6t6gOxDTic6ZqyZIO-Ha0hbtydXk',
  authDomain: 'sss-agenda.firebaseapp.com',
  projectId: 'sss-agenda',
  storageBucket: 'sss-agenda.firebasestorage.app',
  messagingSenderId: '801916775543',
  appId: '1:801916775543:web:d77794c9fb7bf7ee33ea72',
  measurementId: 'G-MKGPF2SEZ0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
