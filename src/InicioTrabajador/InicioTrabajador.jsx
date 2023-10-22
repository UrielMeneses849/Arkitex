import Navegacion from './Navegacion/Navegacion'
import Header from './Header/Header';
import Publicaciones from './Publicaciones/Publicaciones';
import { useLocation } from 'react-router-dom';
import { getDatabase, ref, child, get } from "firebase/database";
import app from '../Firebase/credenciales';
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useState } from 'react';

function InicioTrabajador() {
  const [nombre, setNombre] = useState('');
  const { state } = useLocation();
  const { id, logged, auth } = state;
  const db = getFirestore(app);

  const docRef = collection(db, "prueba3");
  const q = query(docRef, where('id', '==', id)); // Reemplaza 'campo_uid' con el nombre real del campo que contiene el UID
  // Utiliza async/await
  getDocs(q)
  .then((querySnapshot) => {
    if (!querySnapshot.empty) {
      // Encontraste documentos que coinciden con el UID
      querySnapshot.forEach((doc) => {
        setNombre(doc.data().nombre);
      });
    }
  });


  return (
    <>
        <Navegacion nombre={nombre}/>
        <Header/>
        <Publicaciones/>
    </>
  )
}

export default InicioTrabajador