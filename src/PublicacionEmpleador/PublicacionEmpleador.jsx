import { useLocation, useNavigate } from "react-router-dom";
import Navegacion from "../InicioTrabajador/Navegacion/Navegacion";
import { useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "../Firebase/credenciales";

function PublicacionEmpleador() {
  const navigate = useNavigate();
 const { state } = useLocation();
  const { id } = state;
  const [nombre, setNombre] = useState('');
  const [img, setImg] = useState('');
  const db = getFirestore(app);
  window.onpopstate = function (event) {
    navigate('/Arkitex/InicioEmpleador', {
      state: { id: id, logged: true }
    });
  };
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
      <Navegacion nombre={nombre} img={img} id={id}></Navegacion>
    </>
  )
}

export default PublicacionEmpleador