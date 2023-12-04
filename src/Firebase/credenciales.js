import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Credenciales de la base de datos
const firebaseConfig = {
  apiKey: "AIzaSyCWQfJ8yvCmzuns2vuX72_wQZUH1X-4kBs",
  authDomain: "networking-97389.firebaseapp.com",
  projectId: "networking-97389",
  storageBucket: "networking-97389.appspot.com",
  messagingSenderId: "281906087662",
  appId: "1:281906087662:web:75bd1d1484108f9851d5ff"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Incializamos Cloud Firestore
export const db = getFirestore(app);
// Exportamos la inicializacion
export default app;