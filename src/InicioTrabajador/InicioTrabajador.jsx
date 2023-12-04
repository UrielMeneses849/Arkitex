import Navegacion from './Navegacion/Navegacion'
import Header from './Header/Header';
import Publicaciones from './Publicaciones/Publicaciones';
import { useLocation, useNavigate } from 'react-router-dom';
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
    window.onpopstate = function () {
      navigate('/Login', {
      });
    };
  }
  const docRef = collection(db, "Usuarios");
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
  const postulaciones = ()=>{
    navigate('/Arkitex/InicioTrabajador/Postulaciones', {
      state: { id: id, logged: true,nombre1:nombre,imagen:img } //Manda id del trabajador
    });
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
      <Box display='flex' gap='2rem' sx={{margin:{xs:'2rem 0',sm:'3rem 0 3rem 6rem'}, padding:'1rem'}} justifyContent={{xs:'center',sm:'start'}}>
        <Button onClick={cambio} variant="contained" sx={{ color: '#fff', padding: '1rem 1rem' }} endIcon={<Icono />}>
          Publicar Trabajo
        </Button>
        <Button onClick={postulaciones} variant="outlined" sx={{ color: 'primary', padding: '1rem 1rem' }}>
          Ver Mis Postulaciones
        </Button>
      </Box>
      <Publicaciones />
    </>
  )
}

export default InicioTrabajador