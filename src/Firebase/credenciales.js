import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyD8t4fH8FPDoyEFJvq8RzlyGVrKujdfLf0",
  authDomain: "prueba-397707.firebaseapp.com",
  projectId: "prueba-397707",
  storageBucket: "prueba-397707.appspot.com",
  messagingSenderId: "460458976459",
  appId: "1:460458976459:web:96f91e83e3c56cd1ac674e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;