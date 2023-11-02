import { Box, Button, Grid } from "@mui/material"
import './Publicaciones.css'
import casa from '/assets/Group 68.svg';
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import app from "../../Firebase/credenciales";
import { useLocation, useNavigate } from "react-router-dom";

export default function Publicaciones() {
  const db = getFirestore(app);
  const [datos, setDatos] = useState({});
  const { state } = useLocation();
  const { id } = state;
  const navigate = useNavigate();
  const goPublicacion = (id2) => {
    localStorage.setItem("popstateExecuted", "true");
    navigate('/Arkitex/InicioTrabajador/PublicacionE', {
      state: { id: id, logged: true, idPublicacion: id2 }
    });
  };
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "publicacionesEmpleador"));
      const nuevosDatos = [];
      querySnapshot.forEach((doc, index) => {
        console.log(doc.data().fotos);
        nuevosDatos.push({
          titulo: doc.data().titulo,
          descripcion: doc.data().descripcion,
          ubicacion: doc.data().ubicacion,
          fotos: doc.data().fotos,
          id: doc.data().id,
          presupuestoMax: doc.data().presupuestoMax,
          presupuestoMin: doc.data().presupuestoMin,
          idPublicacion: doc.id
        })
      });
      setDatos(nuevosDatos);
    })();
  }, [])
  return (
    <>
      <Grid container columns={3} gap='3rem' padding='0 3rem' display='flex' justifyContent='center'>
        {datos[0] ? Object.keys(datos).map((claveExterna) => (
          <Button onClick={() => goPublicacion(datos[claveExterna].idPublicacion)} key={claveExterna} >
            <Grid key={claveExterna} item sx={{
              border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
              boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
            }}>
              <Box display='flex' flexDirection='column' gap='0.2rem' marginBottom='0.2rem'>
                <p style={{ color: '#FF9500' }}>Busco - {datos[claveExterna].titulo}</p>
                <p>En {datos[claveExterna].ubicacion}</p>
                <p>Presupuesto de: ${datos[claveExterna].presupuestoMin}</p>
                <p>A: ${datos[claveExterna].presupuestoMax}</p>
              </Box>
              <img style={{ height: '300px' }} src={datos[claveExterna].fotos}></img>
            </Grid>
          </Button>
        )) : <></>}
      </Grid>
    </>
  )
}