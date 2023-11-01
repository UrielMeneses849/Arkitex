import { Grid } from "@mui/material"
import './Publicaciones.css'
import casa from '/assets/Group 68.svg';
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import app from "../../Firebase/credenciales";

export default function Publicaciones() {
  const db = getFirestore(app);
  const [datos, setDatos] = useState({});


  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "publicacionesEmpleador"));
      const nuevosDatos = [];
      querySnapshot.forEach((doc, index) => {
        console.log(doc.data().fotos);
        nuevosDatos.push({
          titulo: doc.data().titulo,
          descripcion: doc.data().descripcion,
          fotos: doc.data().fotos,
          id: doc.data().id,
          presupuestoMax: doc.data().presupuestoMax,
          presupuestoMin: doc.data().presupuestoMin
        })
      });
      setDatos(nuevosDatos);
    })();
  }, [])
  return (
    <>
      <Grid container columns={3} gap='3rem' padding='0 3rem' display='flex' justifyContent='center'>
        {datos[0] ? Object.keys(datos).map((claveExterna) => (
          <Grid key={claveExterna} item sx={{
            border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
            boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
          }}>
          <p style={{color:'#FF9500'}}>Realice - {datos[claveExterna].titulo}</p>
          <p>Presupuesto de: ${datos[claveExterna].presupuestoMin}</p>
          <p>A: ${datos[claveExterna].presupuestoMax}</p>
          <img style={{height:'300px'}} src={datos[claveExterna].fotos}></img>
          </Grid>
      )):<></>}

    </Grid>
    </>
  )
}