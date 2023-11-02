import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import app from '../Firebase/credenciales';
import { Box, Button, Grid } from "@mui/material";
import heart from '/assets/heart.svg';
function InicioAdmin() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [img, setImg] = useState('');
    const { state } = useLocation();
    const { id } = state;
    const db = getFirestore(app);
    const docRef = collection(db, "prueba3");
    const q = query(docRef, where('id', '==', id))
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
    window.onpopstate = function () {
        const popstateExecuted = localStorage.getItem("popstateExecuted");
        if (!popstateExecuted) {
            localStorage.setItem("popstateExecuted", "true");
            // Realiza la acción que deseas, por ejemplo, redirigir a una ruta
            navigate('/Login');
        } else {
            localStorage.setItem("popstateExecuted", "false");
        }
    };
    const goPublicacion = (id2) => {
        localStorage.setItem("popstateExecuted", "true");
        navigate('/Arkitex/InicioEmpleador/PublicacionT', {
            state: { id: id, logged: true, idPublicacion: id2, admin: true }
        });
    };
    const goPublicacion2 = (id2) => {
        localStorage.setItem("popstateExecuted", "true");
        navigate('/Arkitex/InicioTrabajador/PublicacionE', {
            state: { id: id, logged: true, idPublicacion: id2, admin:true }
        });
    };
    const [datos, setDatos] = useState({});
    const [datos2, setDatos2] = useState({});
    useEffect(() => {
        (async () => {
            const querySnapshot = await getDocs(collection(db, "publicacionesTrabajador"));
            const nuevosDatos = [];
            querySnapshot.forEach((doc, index) => {
                nuevosDatos.push({
                    titulo: doc.data().titulo,
                    descripcion: doc.data().descripcion,
                    ubicacion:doc.data().ubicacion,
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
                    idPublicacion: doc.id
                })
            });
            setDatos(nuevosDatos);
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
                setDatos2(nuevosDatos);
            })();
        })();
    }, [])
    return (
        <>
            <Box padding={{ xs: '2rem 1rem 1.2rem 1rem', sm: '2rem 3rem 1.2rem 3rem' }} >
                <Box display='flex' justifyContent='space-between' paddingBottom='1rem' flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '500' }}>ARKITEX |</h2>
                    <Box display='flex' alignItems='center' gap={{ xs: '0.4rem', sm: '0.8rem' }} className='navInicioTrabajador'>
                        <p>Favoritos </p>
                        <img style={{ width: '15px' }} src={heart} className='heart'></img>
                        <p>|</p>
                        <p>Contactanos |</p>
                        <img style={{ width: '25px', borderRadius: '50%' }} src={img}></img>
                        <p>{nombre}</p>
                    </Box>
                </Box>
                <hr style={{ backgroundColor: '#767474' }}></hr>
            </Box>
            <Grid container columns={3} gap='3rem' padding='0 3rem' display='flex' justifyContent='center'>
                {datos[0] ? Object.keys(datos).map((claveExterna) => (
                    <Button onClick={() => goPublicacion(datos[claveExterna].idPublicacion)} key={claveExterna} >
                        <Grid item sx={{
                            border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
                            boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
                        }}>
                            <p style={{ color: '#FF9500' }}>Realice - {datos[claveExterna].titulo}</p>
                            {datos[claveExterna].ubicacion ?<p>{datos[claveExterna].ubicacion}</p>:<></>}
                            {datos[claveExterna].materiales1 ? <p>Material Utilizado: {datos[claveExterna].materiales1}</p> : <></>}
                            {datos[claveExterna].materiales1 ? <p>Precio: {datos[claveExterna].presupuestoMateriales1}</p> : <></>}
                            {datos[claveExterna].materiales2 ? <p>Material Utilizado: {datos[claveExterna].materiales2}</p> : <></>}
                            {datos[claveExterna].materiales2 ? <p>Precio: {datos[claveExterna].presupuestoMateriales2}</p> : <></>}
                            <img style={{ height: '300px' }} src={datos[claveExterna].fotos}></img>
                        </Grid>
                    </Button>
                )) : <></>}
            </Grid>
            <Grid container columns={3} gap='3rem' padding='0 3rem' display='flex' justifyContent='center'>
                {datos2[0] ? Object.keys(datos2).map((claveExterna) => (
                    <Button onClick={() => goPublicacion2(datos2[claveExterna].idPublicacion)} key={claveExterna} >
                        <Grid key={claveExterna} item sx={{
                            border: '1px solid #FF9500', borderRadius: '20px', padding: '1rem 2rem', textAlign: 'start',
                            boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)', maxWidth: '350px', '&:hover': { cursor: 'pointer' }
                        }}>
                            <Box display='flex' flexDirection='column' gap='0.2rem' marginBottom='0.2rem'>
                                <p style={{ color: '#FF9500' }}>Busco - {datos2[claveExterna].titulo}</p>
                                <p>En {datos2[claveExterna].ubicacion}</p>
                                <p>Presupuesto de: ${datos2[claveExterna].presupuestoMin}</p>
                                <p>A: ${datos2[claveExterna].presupuestoMax}</p>
                            </Box>
                            <img style={{ height: '300px' }} src={datos2[claveExterna].fotos}></img>
                        </Grid>
                    </Button>
                )) : <></>}
            </Grid>
        </>
    )
}

export default InicioAdmin