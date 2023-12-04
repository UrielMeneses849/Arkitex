import { onAuthStateChanged } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "../Firebase/credenciales";
import { useEffect, useState } from "react";
import { getAuth } from 'firebase/auth';
import usuario from '/assets/usuario.svg';
import { Box, Button, Grid } from "@mui/material";
import Navegacion from "../InicioTrabajador/Navegacion/Navegacion";
function PerfilEmpleador() {
  const { state } = useLocation();
  const { id, postulado, idEmpleador} = state;
  const navigate = useNavigate();
  window.onpopstate = function () {
    if(postulado){
      navigate('/Arkitex/InicioTrabajador', {
        state: { id: idEmpleador, logged: true }
      });
    }else{
      navigate('/Arkitex/InicioEmpleador', {
        state: { id: id, logged: true }
      });
    }
  };
  const auth = getAuth(app);
  const db = getFirestore(app);
  const docRef = collection(db, "Usuarios");
  const q = query(docRef, where('id', '==', id));
  const [publicaciones, setPublicaciones ] = useState({});
  const [email, setEmail] = useState('');
  const [datos, setDatos] = useState({
    nombre: '',
    apellidos: '',
    area: '',
    decoracionConstruccion: '',
    telefono: '',
    img: '',
    correo: ''
  });
  useEffect(() => {
    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          // Encontraste documentos que coinciden con el UID
          querySnapshot.forEach((doc) => {
            setDatos({
              nombre: doc.data().nombre, apellidos: doc.data().apellidos, area: doc.data().area,
              decoracionConstruccion: doc.data().decoracionConstruccion, telefono: doc.data().telefono, img: doc.data().url,
              correo: doc.data().correo
            });
          });
          onAuthStateChanged(auth, (user) => {
            setEmail(user.email);
          });
        }
        console.log(datos);
        console.log(email);
      });
    const snapShotPublicaciones = async () => {
      const referenciaPublicaciones = collection(db, 'publicacionesEmpleador');
      const getPublicaciones = query(referenciaPublicaciones, where("id", '==', id));
      const datosPublicacion = [];
      getDocs(getPublicaciones)
        .then((query) => {
          if (!query.empty) {
            query.forEach((doc) => {
              datosPublicacion.push({
                titulo: doc.data().titulo,
                descripcion: doc.data().descripcion,
                ubicacion: doc.data().ubicacion,
                fotos: doc.data().fotos,
                id: doc.data().id,
                presupuestoMax: doc.data().presupuestoMax,
                presupuestoMin: doc.data().presupuestoMin,
                idPublicacion: doc.id
              })
            })
            setPublicaciones(datosPublicacion);
          }
        })
    }
    snapShotPublicaciones();
  }, [])
  const goPublicacion = (id2) => {
    navigate('/Arkitex/PerfilEmpleador/Publicacion', {
      state: { id: id, logged: true, idPublicacion: id2 }
    });
  };
  return (
    <>
      {postulado? <div style={{marginTop:'10rem'}}></div>:<Navegacion nombre={datos.nombre} img={datos.img} ruta='InicioEmpleador/PerfilEmpleador'></Navegacion>}
      <Box display='flex' justifyContent='center' gap='3rem'>
        <img src={datos.img ? datos.img : usuario} style={{ width: '200px', borderRadius: '50%' }}></img>
        <Box textAlign='start' display='flex' flexDirection='column' gap='1rem'>
          <p style={{ fontSize: '20px', fontWeight: '500' }}>{datos.nombre + ' ' + datos.apellidos}</p>
          <p><span style={{ fontWeight: 'bold' }}>Tipo de trabajo que necesito: </span>{datos.decoracionConstruccion}</p>
          <p><span style={{ fontWeight: 'bold' }}>En el área de: </span>{datos.area}</p>
          <p><span style={{ fontWeight: 'bold' }}>Telefono de contacto: </span>{datos.telefono}</p>
          <p><span style={{ fontWeight: 'bold' }}>Correo: </span>{datos.correo}</p>
        </Box>
      </Box>
      {postulado?<></>:
      <Grid container columns={3} gap='3rem' padding='0 3rem' display='flex' justifyContent='center'>
        {publicaciones[0] ? Object.keys(publicaciones).map((claveExterna) => (
          // onClick={() => goPublicacion(datos[claveExterna].idPublicacion)}
          <Button onClick={() => goPublicacion(publicaciones[claveExterna].idPublicacion)} key={claveExterna} >
            <Grid key={claveExterna} item sx={{
              border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
              boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
            }}>
              <Box display='flex' flexDirection='column' gap='0.2rem' marginBottom='0.2rem'>
                <p style={{ color: '#FF9500' }}>Busco - {publicaciones[claveExterna].titulo}</p>
                <p>En {publicaciones[claveExterna].ubicacion}</p>
                <p>Presupuesto de: ${publicaciones[claveExterna].presupuestoMin}</p>
                <p>A: ${publicaciones[claveExterna].presupuestoMax}</p>
              </Box>
              <img style={{ height: '300px' }} src={publicaciones[claveExterna].fotos}></img>
            </Grid>
          </Button>
        )) : <></>}
      </Grid>
    }
    </>
  )
}

export default PerfilEmpleador