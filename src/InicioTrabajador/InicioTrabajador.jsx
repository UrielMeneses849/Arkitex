import Navegacion from './Navegacion/Navegacion'
import Header from './Header/Header';
import Publicaciones from './Publicaciones/Publicaciones';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../Firebase/credenciales';
import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import Plus from '/assets/plus-circle-svgrepo-com 1.svg';
const Icono = () => {
  return <img src={Plus} style={{ height: '2rem' }}></img>
}
function InicioTrabajador() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [img, setImg] = useState('');
  const { state } = useLocation();
  const { id } = state;
  const db = getFirestore(app);
  const currentPath = window.location.pathname;
  if (currentPath === '/Login') {
    window.onpopstate = function (event) {
      navigate('/Login', {
      });
    };
  }
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
  const cambio = () => {
    setTimeout(() => {
      navigate('CrearPublicacion', {
        state: { id: id, logged: true }
      });
    }, 0);
  }
  const titulo = "Busca alguna obra, postúlate y aumenta tus oportunidades";
  return (
    <>
      <Navegacion nombre={nombre} img={img} id={id} ruta='InicioTrabajador/PerfilTrabajador' />
      <Header titulo={titulo} />
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
        <Button onClick={cambio} variant="contained" sx={{ color: '#fff', padding: '1rem 1rem' }} endIcon={<Icono />}>
          Publicar Trabajo
        </Button>
      </Box>
      <Publicaciones />
    </>
  )
}

export default InicioTrabajador