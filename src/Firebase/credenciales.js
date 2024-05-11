import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Credenciales de la base de datos
const firebaseConfig = {
  apiKey: "AIzaSyA_NSzUyddqqm4S0q2ieMUb9XTUgjlOWLY",
  authDomain: "networking2-b7901.firebaseapp.com",
  projectId: "networking2-b7901",
  storageBucket: "networking2-b7901.appspot.com",
  messagingSenderId: "54171644003",
  appId: "1:54171644003:web:bc7c5d1eee13b9c9958856"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Incializamos Cloud Firestore
export const db = getFirestore(app);
// Exportamos la inicializacion
export default app;