import Navegacion from '../InicioTrabajador/Navegacion/Navegacion';
import Header from '../InicioTrabajador/Header/Header';
import Publicaciones from '../InicioTrabajador/Publicaciones/Publicaciones';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../Firebase/credenciales';
import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import Plus from '/assets/plus-circle-svgrepo-com 1.svg';
const Icono = ()=>{
  return <img src={Plus} style={{height:'2rem'}}></img>
}
function InicioEmpleador() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [img, setImg] = useState('');
  const { state } = useLocation();
  const { id } = state;
  const cambio = ()=>{
    setTimeout(() => {
      navigate('CrearPublicacion',{
        state: { id: id, logged: true}
      });
    }, 0);
  }
  const db = getFirestore(app);
  window.onpopstate = function (event) {
    navigate('/Login', {
    });
  };
  const docRef = collection(db, "prueba3");
  const q = query(docRef, where('id', '==', id))
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
  const titulo = "Explora perfiles y trabajos y encuentra un profesional";
  return (
    <>
      <Navegacion nombre={nombre} img={img} id={id} />
      <Header titulo={titulo}/>
      <Box className='filtros'>
        <li>Recomendado</li>
        <li>Pared</li>
        <li>Piso</li>
        <li>Remodelación</li>
        <li>3er piso</li>
        <li>Baño</li>
        <li>Decoración</li>
        <li>Construcciones mayores</li>
      </Box>
      <Box display='flex' margin='3rem 0 3rem 6rem'>
          <Button onClick={cambio} variant="contained" sx={{color:'#fff',padding:'1rem 1rem'}} endIcon={<Icono/>}>
            Publicar Trabajo
          </Button>
      </Box>
      <Publicaciones />
    </>

  )
}

export default InicioEmpleador