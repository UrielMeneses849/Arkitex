import Navegacion from './Navegacion/Navegacion'
import Header from './Header/Header';
import Publicaciones from './Publicaciones/Publicaciones';
import { useLocation } from 'react-router-dom';
import { getDatabase, ref, child, get } from "firebase/database";
import app from '../Firebase/credenciales';
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useState } from 'react';

function InicioTrabajador() {
  const [nombre, setNombre] = useState('');
  const { state } = useLocation();
  const { id, logged, auth } = state;
  const db = getFirestore(app);

  const docRef = doc(db, "prueba3/qBinWL8e8GpvdYPHaEhQ");
  // Utiliza async/await
const getData = async () => {
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log(docSnap.data());
    setNombre(docSnap.data().nombre)
  }
};

getData();
  return (
    <>
        <Navegacion nombre={nombre}/>
        <Header/>
        <Publicaciones/>
    </>
  )
}

export default InicioTrabajador