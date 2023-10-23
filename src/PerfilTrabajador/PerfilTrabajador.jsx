import { collection,getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "../Firebase/credenciales";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function PerfilTrabajador() {
  const auth = getAuth(app);
  const { state } = useLocation();
  const { id } = state;
  const db = getFirestore(app);
  const docRef = collection(db, "prueba3");
  const q = query(docRef, where('id', '==', id));
  const [email, setEmail] = useState('');
  const [datos, setDatos] = useState({
    telefono: '',
    url: '',
    apellidos: '',
    distancia: '',
    construccion: '',
    municipio: '',
    nombre: '',
    remodelacion: '',
    correo: ''
  });
  getDocs(q)
  .then((querySnapshot) => {
    if (!querySnapshot.empty) {
      // Encontraste documentos que coinciden con el UID
      querySnapshot.forEach((doc) => {
        setDatos({telefono: doc.data().telefono, url:doc.data().url,apellidos:doc.data().apellidos,
        distancia:doc.data().distancia ,construccion:doc.data().construccion, municipio:doc.data().municipio,
        nombre:doc.data().nombre, remodelacion:doc.data().remodelacion});
      });
      onAuthStateChanged(auth, (user) => {
        setEmail(user.email);
      });
    }
  });
        // Accede al correo electrónico del usuario
        //setDatos({correo:userRecord.email});

  return (
    <div>
      <img src={datos.url} style={{width:'200px', borderRadius:'50%'}}></img>
      <p>{datos.nombre}</p>
      <p>{datos.apellidos}</p>
      <p>{email}</p>
      <p>{datos.telefono}</p>
      <p>{datos.municipio}</p>
      <p>{datos.distancia}</p>
      <p>{datos.construccion}</p>
      <p>{datos.remodelacion}</p>
    </div>
  )
}

export default PerfilTrabajador