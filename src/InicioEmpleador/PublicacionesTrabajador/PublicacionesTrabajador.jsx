import { Button, Grid } from "@mui/material"

import casa from '/assets/Group 68.svg';
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import app from "../../Firebase/credenciales";
import { Link, useLocation, useNavigate } from "react-router-dom";


function PublicacionesTrabajador() {
  //'/Arkitex/InicioTrabajador/Publicacion'
  const { state } = useLocation();
    const { id } = state;
    const navigate = useNavigate();
  const goPublicacion = (id2)=> {
    localStorage.setItem("popstateExecuted", "true");
    navigate('/Arkitex/InicioEmpleador/PublicacionT', {
        state: { id: id, logged: true, idPublicacion:id2 }
    });
};
  const db = getFirestore(app);
  const [datos, setDatos] = useState({});
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "publicacionesTrabajador"));
      const nuevosDatos = [];
      querySnapshot.forEach((doc, index) => {
        nuevosDatos.push({
          titulo: doc.data().titulo,
          descripcion: doc.data().descripcion,
          fotos: doc.data().fotos,
          id: doc.data().id,
          materiales1: doc.data().materiales1,
          materiales2: doc.data().materiales2,
          materiales3: doc.data().materiales3,
          materiales4: doc.data().materiales4,
          presupuestoMateriales1: doc.data().presupuestoMateriales1,
          presupuestoMateriales2: doc.data().presupuestoMateriales2,
          presupuestoMateriales3: doc.data().presupuestoMateriales3,
          presupuestoMateriales4: doc.data().presupuestoMateriales4,
          idPublicacion:doc.id
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
            <Grid item sx={{
              border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
              boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
            }}>
              <p style={{ color: '#FF9500' }}>Busco - {datos[claveExterna].titulo}</p>
              {datos[claveExterna].materiales1 ? <p>Material Utilizado: {datos[claveExterna].materiales1}</p> : <></>}
              {datos[claveExterna].materiales1 ? <p>Precio: {datos[claveExterna].presupuestoMateriales1}</p> : <></>}
              {datos[claveExterna].materiales2 ? <p>Material Utilizado: {datos[claveExterna].materiales2}</p> : <></>}
              {datos[claveExterna].materiales2 ? <p>Precio: {datos[claveExterna].presupuestoMateriales2}</p> : <></>}
              <img style={{ height: '300px' }} src={datos[claveExterna].fotos}></img>
            </Grid>
          </Button>
        )) : <></>}

      </Grid>
    </>
  )
}

export default PublicacionesTrabajador