import { useEffect, useState } from "react";
import app from "../../Firebase/credenciales";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { Box, Button, Grid } from "@mui/material";
import Navegacion from "../Navegacion/Navegacion";

function Postulaciones() {
  const db = getFirestore(app);
  const [datos, setDatos] = useState({});
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id, nombre1,imagen } = state;
  //Iteramos en todas las postulaciones, obtenemos id de publicaciones relacionadas al id del trabajador
  //con el id de las publicaciones obtenemos todas las publicaciones en las que se postulo el trabajador
  const [idPublicacion, setIdPublicacion] = useState();
  const [infoPublicacion, setInfoPublicacion] = useState({});
  const idPublicaciones = [];
  const [estadoPublicacion, setEstadoPublicacion] = useState();
  const [idEmpleador,setIdEmpleador] = useState();
  useEffect(() => {
    const getPostulaciones = async () => {
      const queryPostulacion = query(collection(db, 'postulaciones'), where('id_trabajador', '==', id));
      const getPostulaciones = await getDocs(queryPostulacion);
      const estadoPublicacion1 = [];
      const idEmp = [];
      getPostulaciones.forEach((doc) => {
        idPublicaciones.push(doc.data().id_publicacion);
        estadoPublicacion1.push(doc.data().estado);
        idEmp.push(doc.data().id_empleador);
      })
      setIdPublicacion(idPublicaciones);
      setEstadoPublicacion(estadoPublicacion1);
      setIdEmpleador(idEmp);
    }
    const infoPublicaciones = async () => {
      const getPublicaciones = await getDocs(collection(db, 'publicacionesEmpleador'));
      const nuevosDatos = [];
      getPublicaciones.forEach((doc) => {
        if (idPublicaciones.includes(doc.id)) {
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
          setInfoPublicacion(nuevosDatos);
        }
      })

    }
    getPostulaciones();
    infoPublicaciones();
  }, [])
  const goPublicacion = (id2,estado,idEmpl) => {
    navigate('/Arkitex/InicioTrabajador/PublicacionE', {
      state: { id: id, logged: true, idPublicacion: id2,estadoP:estado,emp: idEmpl,post:true}
    });
  };
  return (
    <>
      <Navegacion nombre={nombre1} img={imagen} id={id} ruta='InicioTrabajador/PerfilTrabajador'/>
      <Grid container columns={3} gap='3rem' padding='0 3rem' display='flex' justifyContent='center'>
        {infoPublicacion[0] ? Object.keys(infoPublicacion).map((claveExterna,index) => (
          <Button onClick={() => goPublicacion(infoPublicacion[claveExterna].idPublicacion,estadoPublicacion[index],idEmpleador[index])} key={claveExterna} >
            <Grid key={claveExterna} item sx={{
              border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
              boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
            }}>
              <Box display='flex' flexDirection='column' gap='0.2rem' marginBottom='0.2rem'>
                <p style={{ color: '#FF9500' }}>Busco - {infoPublicacion[claveExterna].titulo}</p>
                <p>En {infoPublicacion[claveExterna].ubicacion}</p>
                <p>Presupuesto de: ${infoPublicacion[claveExterna].presupuestoMin}</p>
                <p>A: ${infoPublicacion[claveExterna].presupuestoMax}</p>
                <p>Estado:
                <span style={{color: estadoPublicacion[index]=='Esperando'?'red':'green'}}> {estadoPublicacion[index]}</span>
                </p>
              </Box>
              <img style={{ height: '300px' }} src={infoPublicacion[claveExterna].fotos}></img>
            </Grid>
          </Button>
        )) : <></>}
      </Grid>
    </>
  )
}

export default Postulaciones