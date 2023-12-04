import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Box, Button, Grid, Step, StepButton, Stepper } from '@mui/material';
import elipse13 from '/assets/Ellipse 13.svg';
import elipse14 from '/assets/Ellipse 14.svg';
import Navegacion from '../InicioTrabajador/Navegacion/Navegacion';
import guardar from '/assets/guardar.svg';
import corazon from '/assets/corazon.svg';
import icono1 from '/assets/Group 87.svg';
import icono2 from '/assets/Group 65.svg';
import icono3 from '/assets/Group 66.svg';
import icono4 from '/assets/Group 18.svg';
import '../PublicacionFinalTrabajador/PublicacionFinalT.css'
import app from '../Firebase/credenciales';
function PresupuestoPT() {
    const { state } = useLocation();
    const { id, idPublicacion } = state;
    const [datos, setDatos] = useState({})
    const [activeStep, setActiveStep] = useState(0);
    const [activo, setActivo] = useState(elipse13);
    const [inactivo, setInactivo] = useState(elipse14);
    const [indice, setIndice] = useState(0);
    const [nombre, setNombre] = useState('');
    const [usuario, setUsuario] = useState({ nombre: '', img: '' })
    const steps = [];
    const navigate = useNavigate();
    const db = getFirestore(app);
    const docRef = collection(db, "Usuarios");
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
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const nuevosDatos = {
        titulo: '', fotos: [], materiales1: '', materiales2: '', materiales3: '',
        materiales4: '', presupuestoMateriales1: '', presupuestoMateriales2: '', presupuestoMateriales3: '',
        presupuestoMateriales4: '', descripcion: '', id: ''
    };
    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "publicacionesTrabajador"));
            querySnapshot.forEach((doc) => {
                if (doc.id === idPublicacion) {
                    nuevosDatos.titulo = doc.data().titulo;
                    nuevosDatos.fotos = doc.data().fotos.split(',').filter(item => item.trim() !== '');
                    nuevosDatos.descripcion = doc.data().descripcion;
                    nuevosDatos.materiales1 = doc.data().materiales1;
                    nuevosDatos.materiales2 = doc.data().materiales2;
                    nuevosDatos.materiales3 = doc.data().materiales3;
                    nuevosDatos.materiales4 = doc.data().materiales4;
                    nuevosDatos.presupuestoMateriales1 = doc.data().presupuestoMateriales1;
                    nuevosDatos.presupuestoMateriales2 = doc.data().presupuestoMateriales2;
                    nuevosDatos.presupuestoMateriales3 = doc.data().presupuestoMateriales3;
                    nuevosDatos.presupuestoMateriales4 = doc.data().presupuestoMateriales4;
                    nuevosDatos.id = doc.data().id;
                }
            });

            setDatos(nuevosDatos);
            const coleccion = collection(db, "Usuarios");
            const q = query(coleccion, where("id", "==", nuevosDatos.id));

            console.log(nuevosDatos.id);
            const querySnapshot2 = await getDocs(q);
            querySnapshot2.forEach((doc) => {
                setNombre(doc.data().nombre);
            });
        };
        fetchData();
        setActiveStep(0);
        setIndice(0);
    }, [idPublicacion]);
    const handleStep = (step) => () => {
        setActiveStep(step);
    };
    const perfil = (trabajador) => {
        navigate('/Arkitex/InicioTrabajador/PerfilTrabajador', {
            state: { id: trabajador, logged: true, empleador: true, idEmpleador:id }
        });
    }
    const presupuesto = () => {
        navigate('/Arkitex/InicioEmpleador/Presupuesto', {
            state: { logged: true }
        });
    }
    return (
        <>

            {datos.fotos ? (datos.fotos).map((nose, index) => (
                <div style={{ display: 'none' }} key={index}>{steps.push(<img style={{ width: '100%', height: '100%', borderRadius: '25px' }} key={index} src={datos.fotos[index]}></img>)}</div>
            )) : <></>}
            <Navegacion nombre={usuario.nombre} img={usuario.img} id={id} ruta='InicioEmpleador/PerfilEmpleador' />
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100vh', padding: '0.5rem 5rem', gap: '3rem' }}>
                <Box sx={{ width: '100%', height: '75%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
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
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, position: 'absolute', bottom: '0', marginBottom: '2rem' }}>
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
                    <h1 style={{ color: '#FF9500', fontWeight: '500', textAlign: 'start' }}>{datos.titulo}</h1>
                    <Box display='flex' justifyContent='space-between'>
                        <p>CDMX, Col Roma</p>
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
                    <h3 style={{textAlign:'start'}}>Presupuesto estimado</h3>
                    <Box>
                    <Grid container columns={2} display='flex' gap='5rem'>
                        <Grid item>
                            {datos.materiales1?<p style={{textAlign:'start'}}>{datos.materiales1}</p>:<></>}
                            {datos.materiales2?<p style={{textAlign:'start'}}>{datos.materiales2}</p>:<></>}
                            {datos.materiales3?<p style={{textAlign:'start'}}>{datos.materiales3}</p>:<></>}
                            {datos.materiales4?<p style={{textAlign:'start'}}>{datos.materiales4}</p>:<></>}
                        </Grid>
                        <Grid item>
                            {datos.presupuestoMateriales1?<p>${datos.presupuestoMateriales1}</p>:<></>}
                            {datos.presupuestoMateriales2?<p>${datos.presupuestoMateriales2}</p>:<></>}
                            {datos.presupuestoMateriales3?<p>${datos.presupuestoMateriales3}</p>:<></>}
                            {datos.presupuestoMateriales4?<p>${datos.presupuestoMateriales4}</p>:<></>}
                        </Grid>
                    </Grid>
                    </Box>
                    <Button onClick={() => perfil(datos.id)} variant='contained' sx={{ width: '150px', borderRadius: '25px', display: 'flex', gap: '1rem' }}>
                        Me Interesa</Button>
                </Box>
            </Box>
        </>
    )
}

export default PresupuestoPT