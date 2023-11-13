import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../../Firebase/credenciales';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { Box, Button, Step, StepButton, Stepper } from '@mui/material';
import img from '/assets/Group 157.svg';
import casa from '/assets/Group 68.svg';
import elipse13 from '/assets/Ellipse 13.svg';
import elipse14 from '/assets/Ellipse 14.svg';
import prueba from '/assets/casaPrueba.jpg';
import descarga from '/assets/prueba2.png';
import Navegacion from '../../InicioTrabajador/Navegacion/Navegacion';
import guardar from '/assets/guardar.svg';
import corazon from '/assets/corazon.svg';
import icono1 from '/assets/Group 87.svg';
import icono2 from '/assets/Group 65.svg';
import icono3 from '/assets/Group 66.svg';
import icono4 from '/assets/Group 18.svg';
import userOrange from '/assets/userOrange.svg'
import '../../PublicacionFinalTrabajador/PublicacionFinalT.css'
import app from '../../Firebase/credenciales';
import heart from '/assets/heart.svg';
import aceptar from '/assets/aceptar.svg';
function Publicacion() {
  const { state } = useLocation();
  const { id, idPublicacion, admin } = state; //id del emplador, id de la publicacion
  const [datos, setDatos] = useState({})
  const [activeStep, setActiveStep] = useState(0);
  const [activo, setActivo] = useState(elipse13);
  const [inactivo, setInactivo] = useState(elipse14);
  const [indice, setIndice] = useState(0);
  const [nombre, setNombre] = useState('');
  const [nombreTrabajador, setNombreTrabajador] = useState('');
  const [usuario, setUsuario] = useState({ nombre: '', img: '' })
  const [postulado, setPostulado] = useState(false);
  const [postulados, setPostulados] = useState({});
  const [actualizar, setActualizar] = useState(true);
  const steps = [];
  const navigate = useNavigate();
  const db = getFirestore(app);
  const docRef = collection(db, "prueba3");
  const q = query(docRef, where('id', '==', id))
  getDocs(q)
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        // Encontraste documentos que coinciden con el UID
        querySnapshot.forEach((doc) => {
          setUsuario({ nombre: doc.data().nombre, img: doc.data().url })
        });
      }
    });
  const handleNext = (posicion) => {
    setActiveStep(posicion);
    setIndice(posicion);
  };
  const nuevosDatos = {
    titulo: '', fotos: [], descripcion: '', id: '', ubicacion: '', presupuestoMax: '', presupuestoMin: ''
  };
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "publicacionesEmpleador"));
      querySnapshot.forEach((doc) => {
        if (doc.id === idPublicacion) {
          nuevosDatos.titulo = doc.data().titulo;
          nuevosDatos.fotos = doc.data().fotos.split(',').filter(item => item.trim() !== '');
          nuevosDatos.descripcion = doc.data().descripcion;
          nuevosDatos.ubicacion = doc.data().ubicacion;
          nuevosDatos.presupuestoMax = doc.data().presupuestoMax;
          nuevosDatos.presupuestoMin = doc.data().presupuestoMin;
          nuevosDatos.id = doc.data().id; //Id de quien realizo la publicacion
        }
      });

      setDatos(nuevosDatos);
      const coleccion = collection(db, "prueba3");
      const q = query(coleccion, where("id", "==", nuevosDatos.id));

      const querySnapshot2 = await getDocs(q);
      querySnapshot2.forEach((doc) => {
        setNombre(doc.data().nombre);
      });
      const queryTrabajador = query(coleccion, where("id", "==", id));
      const snapShotTrabajador = await getDocs(queryTrabajador);
      snapShotTrabajador.forEach((doc) => {
        setNombreTrabajador(doc.data().nombre);
      })
    };
    const getPostulaciones = async () => {
      const postulaciones = collection(db, 'postulaciones');
      const snapShotPostulaciones = await getDocs(postulaciones);
      const pushPostulados = [];
      snapShotPostulaciones.forEach((doc) => {
        if (doc.data().id_publicacion == idPublicacion && doc.data().id_empleador == id) {
          pushPostulados.push({
            id_empleador: doc.data().id_empleador,
            id_trabajador: doc.data().id_trabajador,
            id_publicacion: doc.data().id_publicacion,
            nombre_empleador: doc.data().nombre_empleador,
            nombre_trabajador: doc.data().nombre_trabajador,
            id_postulacion:doc.id,
            estado:doc.data().estado
          })
        }
      })
      setPostulados(pushPostulados);
    }
    fetchData();
    getPostulaciones();
    setActiveStep(0);
    setIndice(0);
  }, [idPublicacion,actualizar]);
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const procesarPostulaciones = async (empleador) => {
    const trabajador = id;
    const publicacion = idPublicacion;
    addDoc(collection(db, 'postulaciones'), {
      id_trabajador: trabajador,
      id_empleador: empleador,
      id_publicacion: publicacion,
      nombre_trabajador: nombreTrabajador,
      nombre_empleador: nombre
    })
  }
  const Eliminar = () => {
    const fetchData = async () => {
      await deleteDoc(doc(db, "publicacionesEmpleador", idPublicacion));
    };
    fetchData();
    navigate('/Arkitex/InicioAdmin', {
      state: { id: id, logged: true }
    });
  }
  const perfil = (trabajador) => {
    navigate('/Arkitex/InicioTrabajador/PerfilTrabajador', {
      state: { id: trabajador, logged: true, empleador: true, idEmpleador: id },
    });
  }
  const EliminarPostulacion = (idPostulacion)=>{
    const fetchPostulacion = async()=>{
        await deleteDoc(doc(db,"postulaciones",idPostulacion))
    }
    fetchPostulacion();
    setActualizar(false);
  }
  const actualizarPostulacion = async (idPostulacion)=>{
    const postulacion = doc(db, "postulaciones", idPostulacion);
    await updateDoc(postulacion,{
      "estado":"Aceptado"
    })
    setActualizar(false);
  }
  return (
    <>
      {datos.fotos ? (datos.fotos).map((nose, index) => (
        <div style={{ display: 'none' }} key={index}>{steps.push(<img style={{ width: '100%', height: '100%', borderRadius: '25px' }} key={index} src={datos.fotos[index]}></img>)}</div>
      )) : <></>}
      <Navegacion nombre={usuario.nombre} img={usuario.img} id={id} ruta='InicioEmpleador/PerfilEmpleador'></Navegacion>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100vh', padding: '0.5rem 5rem', gap: '3rem' }}>
        <Box sx={{ width: '100%', height: '85%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Stepper nonLinear activeStep={activeStep} sx={{ display: 'none' }}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepButton color='inherit' onClick={handleStep(index)}>
                </StepButton>
              </Step>
            ))}
          </Stepper>

          {steps[indice]}
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, position: 'absolute', bottom: '0', marginBottom: '0rem' }}>
              {steps.map((valor, index) => (
                <Button key={index} color='inherit'
                  disabled={index === activeStep}
                  onClick={() => handleNext(index)}
                  sx={{ mr: 1 }}>
                  <img style={{ width: '15px' }} src={index == activeStep ? activo : inactivo}></img>
                </Button>
              ))}
            </Box>
          </React.Fragment>
        </Box>
        <Box display='flex' flexDirection='column' gap='1rem'>
          <h1 style={{ color: '#FF9500', fontWeight: '500', textAlign: 'start' }}>Busco - {datos.titulo}</h1>
          <Box display='flex' justifyContent='space-between'>
            {datos.ubicacion ? <p>{datos.ubicacion}</p> : <></>}
            <Box display='flex' gap='1rem'>
              <img className='iconosTrabajador' style={{ width: '20px' }} src={corazon}></img>
              <img className='iconosTrabajador' src={guardar}></img>
            </Box>
          </Box>
          <Box display='flex' gap='2rem'>
            <Box className='iconosTrabajador2' display='flex' flexDirection='column'>
              <img src={icono1}></img>
              <span>Piso</span>
            </Box>
            <Box className='iconosTrabajador2' display='flex' flexDirection='column'>
              <img src={icono2}></img>
              <span>Remodelación</span>
            </Box>
            <Box className='iconosTrabajador2' display='flex' flexDirection='column'>
              <img src={icono3}></img>
              <span>Escaleras</span>
            </Box>
            <Box className='iconosTrabajador2' display='flex' flexDirection='column'>
              <img src={icono4}></img>
              <span>Decoración</span>
            </Box>
          </Box>
          <h3 style={{ textAlign: 'start', fontWeight: '500', fontSize: '1.5rem' }}>Presupuesto</h3>
          <p style={{ textAlign: 'start', maxWidth: '25rem' }}>Presupuesto de: ${datos.presupuestoMin}</p>
          <p style={{ textAlign: 'start', maxWidth: '25rem' }}>A: ${datos.presupuestoMax}</p>
          <h3 style={{ textAlign: 'start', fontWeight: '500', fontSize: '1.5rem' }}>Descripción</h3>
          <p style={{ textAlign: 'start', maxWidth: '30rem' }}>{datos.descripcion}</p>
          <Button onClick={Eliminar} variant='contained' sx={{ width: '150px', borderRadius: '25px', display: 'flex', gap: '1rem', backgroundColor: 'red', color: '#fff' }}>Eliminar</Button>
        </Box>
      </Box>
      <Box>
        <h2>Postulados</h2>
        <Box paddingBottom='1rem'>
          {(postulados) ? Object.keys(postulados).map((claveExterna) => (
            <Box key={claveExterna} sx={{ padding: '0 3rem' }}>
              <Box  gap='1rem' sx={{display:postulados[claveExterna].estado=='Aceptado'?'none':'flex'}}>
                <Button onClick={() => perfil(postulados[claveExterna].id_trabajador)} variant='outlined' sx={{ width: '150px', borderRadius: '25px', display: 'flex', gap: '1rem' }}>
                  <img src={userOrange} style={{ width: '20px' }}></img>{postulados[claveExterna].nombre_trabajador}
                </Button>
                <Button onClick={()=>actualizarPostulacion(postulados[claveExterna].id_postulacion)} sx={{height:'100%',width:'1px',borderRadius:'50%'}} variant='contained'>
                  <img src={aceptar}></img>
                </Button>
                <Button onClick={()=>EliminarPostulacion(postulados[claveExterna].id_postulacion)} sx={{height:'100%',width:'1px',borderRadius:'50%'}} variant='contained'>
                  <img src={aceptar}></img>
                </Button>
              </Box>
            </Box>
          )) : <></>}
        </Box>
      </Box>
    </>
  )
}

export default Publicacion