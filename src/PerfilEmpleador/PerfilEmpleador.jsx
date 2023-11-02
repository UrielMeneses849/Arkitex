import { onAuthStateChanged } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "../Firebase/credenciales";
import { useEffect, useState } from "react";
import { getAuth } from 'firebase/auth';
import usuario from '/assets/usuario.svg';
import { Box, Grid } from "@mui/material";
import casa from '/assets/Group 68.svg';
import Navegacion from "../InicioTrabajador/Navegacion/Navegacion";
function PerfilEmpleador() {
  const { state } = useLocation();
  const { id } = state;
  const navigate = useNavigate();
  window.onpopstate = function () {
    navigate('/Arkitex/InicioEmpleador', {
      state: { id: id, logged: true }
    });
  };
  const auth = getAuth(app);
  const db = getFirestore(app);
  const docRef = collection(db, "prueba3");
  const q = query(docRef, where('id', '==', id));
  const [email, setEmail] = useState('');
  const [datos, setDatos] = useState({
    nombre: '',
    apellidos: '',
    area: '',
    decoracionConstruccion: '',
    telefono: '',
    img: '',
  });
  useEffect(() => {
    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          // Encontraste documentos que coinciden con el UID
          querySnapshot.forEach((doc) => {
            setDatos({
              nombre: doc.data().nombre, apellidos: doc.data().apellidos, area: doc.data().area,
              decoracionConstruccion: doc.data().decoracionConstruccion, telefono: doc.data().telefono, img: doc.data().url
            });
          });
          onAuthStateChanged(auth, (user) => {
            setEmail(user.email);
          });
        }
        console.log(datos);
        console.log(email);
      });
  }, [])
  return (
    <>
      <Navegacion nombre={datos.nombre} img={datos.img} ruta='InicioEmpleador/PerfilEmpleador'></Navegacion>
      <Box display='flex' justifyContent='center' gap='3rem'>
        <img src={datos.img ? datos.img : usuario} style={{ width: '200px', borderRadius: '50%' }}></img>
        <Box textAlign='start' display='flex' flexDirection='column' gap='1rem'>
        <p style={{ fontSize: '20px', fontWeight: '500' }}>{datos.nombre + ' ' + datos.apellidos}</p>
        <p><span style={{fontWeight:'bold'}}>Tipo de trabajo que necesito: </span>{datos.decoracionConstruccion}</p>
        <p><span style={{fontWeight:'bold'}}>En el área de: </span>{datos.area}</p>
        <p><span style={{fontWeight:'bold'}}>Telefono de contacto: </span>{datos.telefono}</p>
        <p><span style={{fontWeight:'bold'}}>Correo: </span>{email}</p>
        </Box>
      </Box>
    </>
  )
}

export default PerfilEmpleador