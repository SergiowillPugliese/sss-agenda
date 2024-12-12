import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4P1D6t6gOxDTic6ZqyZIO-Ha0hbtydXk",
  authDomain: "sss-agenda.firebaseapp.com",
  projectId: "sss-agenda",
  storageBucket: "sss-agenda.firebasestorage.app",
  messagingSenderId: "801916775543",
  appId: "1:801916775543:web:d77794c9fb7bf7ee33ea72",
  measurementId: "G-MKGPF2SEZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
