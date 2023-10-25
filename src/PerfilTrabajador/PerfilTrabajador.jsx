import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "../Firebase/credenciales";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import usuario from '/assets/usuario.svg';
import { Box, Grid } from "@mui/material";
import casa from '/assets/Group 68.svg';
import Navegacion from "../InicioTrabajador/Navegacion/Navegacion";
function PerfilTrabajador(props) {
  const { state } = useLocation();
  const { id } = state;
  const navigate = useNavigate();
  window.onpopstate = function (event) {
    navigate('/Arkitex/InicioTrabajador', {
      state: { id: id, logged: true }
    });
  };
  const auth = getAuth(app);
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
          setDatos({
            telefono: doc.data().telefono, url: doc.data().url, apellidos: doc.data().apellidos,
            distancia: doc.data().distancia, construccion: Array.from(doc.data().construccion.split(',').map(item => item.trim())), municipio: doc.data().municipio,
            nombre: doc.data().nombre, remodelacion: doc.data().remodelacion.split(',').map(item => item.trim())
          });
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
      <Navegacion nombre={datos.nombre} img={datos.url} id ={id}/>
      <img src={datos.url ? datos.url : usuario} style={{ width: '150px', borderRadius: '50%' }}></img>
      {/*datos.url*/}
      {/* <p>{datos.nombre}</p>
      <p>{datos.apellidos}</p>
      <p>{email}</p>
      <p>{datos.telefono}</p>
      <p>{datos.municipio}</p>
      <p>{datos.distancia}</p>
      <p>{datos.construccion}</p>
      <p>{datos.remodelacion}</p> */}

      <p style={{ fontSize: '20px', fontWeight: '500' }}>{datos.nombre + ' ' + datos.apellidos}</p>
      <Grid container columns={3} sx={{ margin: '3rem 0', display: 'flex', gap: '3rem', justifyContent: 'center' }}>
        <Grid item sx={{
          backgroundColor: '#efefef', display: 'flex', gap: '1rem', flexDirection: 'column', padding: '1rem', height: '250px'
          , justifyContent: 'center', width: '350px'
        }}>
          <h3>Informacion de contacto</h3>
          <Box>
            <h3>Correo Electrónico</h3>
            <p>{email}</p>
          </Box>
          <Box>
            <h3>Número de teléfono</h3>
            <p>{datos.telefono}</p>
          </Box>
        </Grid>
        <Grid item sx={{
          backgroundColor: '#efefef', display: 'flex', gap: '1rem', flexDirection: 'column', padding: '1rem', height: '250px'
          , justifyContent: 'center', width: '350px'
        }}>
          <h3>Zona de Trabajo</h3>
          <Box>
            <h3>C.P ó Municipio / Alcaldia</h3>
            <p>{datos.municipio}</p>
          </Box>
          <Box>
            <h3>Distancia máxima a la que me traslado</h3>
            <p>{datos.distancia}</p>
          </Box>
        </Grid>
        <Grid item sx={{
          backgroundColor: '#efefef', display: 'flex', gap: '1rem', flexDirection: 'column', padding: '1rem', height: '250px'
          , justifyContent: 'center', width: '350px'
        }}>
          <h3>Especialidades</h3>
          <Box display='flex' gap='2rem' paddingLeft='1.5rem'>
            <Box>
              <h3 style={{ textAlign: 'start' }}>Construccion</h3>
              {datos.construccion ? datos.construccion.map((item, index) => (
                <p style={{ textAlign: 'start' }} key={index}>{item}</p>
              )) : <></>}
            </Box>
            <Box>
              <h3 style={{ textAlign: 'start' }}>Decoración</h3>
              {datos.remodelacion ? datos.remodelacion.map((item, index) => (
                <p style={{ textAlign: 'start' }} key={index}>{item}</p>
              )) : <></>}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <h2 style={{ marginBottom: '3rem', textAlign: 'start', marginLeft: '6rem', fontWeight: '500', fontSize: '2.2rem' }}>Mis Trabajos</h2>
      <Grid container columns={3} gap='3rem' padding='0 3rem' display='flex' justifyContent='center'>
        <Grid item sx={{
          border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
          boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
        }}>
          <p style={{ color: '#FF9500' }}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
        <Grid item sx={{
          border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
          boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
        }}>
          <p style={{ color: '#FF9500' }}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
        <Grid item sx={{
          border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
          boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
        }}>
          <p style={{ color: '#FF9500' }}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
        <Grid item sx={{
          border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
          boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
        }}>
          <p style={{ color: '#FF9500' }}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
        <Grid item sx={{
          border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
          boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
        }}>
          <p style={{ color: '#FF9500' }}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
        <Grid item sx={{
          border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
          boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
        }}>
          <p style={{ color: '#FF9500' }}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
      </Grid>
    </div>
  )
}

export default PerfilTrabajador