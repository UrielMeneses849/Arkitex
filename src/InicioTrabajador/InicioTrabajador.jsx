import Navegacion from './Navegacion/Navegacion'
import Header from './Header/Header';
import Publicaciones from './Publicaciones/Publicaciones';
import { useLocation } from 'react-router-dom';
import app from '../Firebase/credenciales';
import { collection,getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useState } from 'react';

function InicioTrabajador() {
  const [nombre, setNombre] = useState('');
  const [img, setImg] = useState('');
  const { state } = useLocation();
  const { id } = state;
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
        setImg(doc.data().url);
      });
    }
  });


  return (
    <>
        <Navegacion nombre={nombre} img={img} id={id}/>
        <Header/>
        <Publicaciones/>
    </>
  )
}

export default InicioTrabajador