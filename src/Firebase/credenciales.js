import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBTeltUnJP-f2JEV1DN_eieWrvqBM7cpUM",
  authDomain: "prueba2-8b44d.firebaseapp.com",
  projectId: "prueba2-8b44d",
  storageBucket: "prueba2-8b44d.appspot.com",
  messagingSenderId: "317953910189",
  appId: "1:317953910189:web:f074b88ff84d52a9b1ad24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;