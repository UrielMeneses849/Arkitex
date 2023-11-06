import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "../Firebase/credenciales";
import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material";
import heart from '/assets/heart.svg';
import usuario from '/assets/usuario.svg';
import './PublicacionesTrabajador.css';
import camara from '/assets/camara.svg';
import dinero from '/assets/dinero.svg';
import styled from "styled-components";
import add from '/assets/add.svg';
import { imagenPublicacionEmpleador, imagenPublicacionTrabajador } from "../Firebase/imagenes";
import back from '/assets/backsvg 1.svg';
import { validarDescripcion, validarFoto, validarTitulo, validarUbicacion } from "../Firebase/validaciones";
const Icono = () => {
    return <img src={camara} ></img>
}
const AddIcon = () => {
    return <img src={add}></img>
}
const DineroIcon = () => {
    return <img src={dinero}></img>
}
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function PublicacionTrabajador() {
    const { state } = useLocation();
    const { id } = state;
    const navigate = useNavigate();
    const cambio = () => {
        setTimeout(() => {
            navigate('/Arkitex/InicioTrabajador/PerfilTrabajador', {
                state: { id: id, logged: true }
            });
        },);
    }
    const cambio2 = () => {
        setTimeout(() => {
            navigate('/Arkitex/InicioTrabajador', {
                state: { id: id, logged: true }
            });
        },);
    }
    window.onpopstate = function () {
        const currentPath = window.location.pathname;
        if (currentPath === '/Arkitex/InicioTrabajador') {
            localStorage.setItem("popstateExecuted", "false");
            navigate('/Arkitex/InicioTrabajador', {
                state: { id: id, logged: true }
            });
        }
    };
    const [nombre, setNombre] = useState('');
    const [img, setImg] = useState('');
    const db = getFirestore(app);
    const docRef = collection(db, "prueba3");
    const q = query(docRef, where('id', '==', id));
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
    const [datosPublicacion, setDatosPublicacion] = useState({
        titulo: '',
        ubicacion: '',
        descripcion: '',
        foto: [],
        materiales1: '',
        materiales2: '',
        materiales3: '',
        materiales4: '',
        presupuestoMateriales1: '',
        presupuestoMateriales2: '',
        presupuestoMateriales3: '',
        presupuestoMateriales4: '',
        usuario: id
    });
    const [validacion, setValidacion] = useState(false);
    const [errores, setErrores] = useState({
        titulo: false,
        descripcion: false,
        ubicacion: false,
        foto: false,
        material: false,
        presupuesto: false
    });
    function validacionPublicacion() {
        setErrores((prevState) => ({
            ...prevState, // Clonamos el objeto previo
            ['titulo']: validarTitulo(datosPublicacion.titulo),
            ['ubicacion']: validarUbicacion(datosPublicacion.ubicacion),
            ['descripcion']: validarDescripcion(datosPublicacion.descripcion),
            ['foto']: validarFoto(datosPublicacion.foto)
        }))
        if (datosPublicacion.titulo != '' && datosPublicacion.descripcion != '' &&
            datosPublicacion.foto[0] != null && datosPublicacion.ubicacion != '') {
            return true
        } else {
            return false;
        }
    }
    const handleChangeDatos = (e) => {
        const id = e.target.id;
        let value;
        if (id === 'foto') {
            value = [...datosPublicacion.foto];
            value.push(e.target.files[0]);
            const fotos = document.querySelector(".fotosSubidas")
            const parrafo = document.createElement('P');
            parrafo.textContent = e.target.files[0].name;
            fotos.appendChild(parrafo);
        } else {
            value = e.target.value;
        }

        setDatosPublicacion((prevState) => ({
            ...prevState, // Clonamos el objeto previo
            [id]: value,   // Actualizamos el valor específico basado en el 'id'
        }));
    }
    const almacenarDatos = (e) => {
        e.preventDefault();
        console.log(datosPublicacion);
        (async () => {
            const promesas = datosPublicacion.foto.map(async (foto) => {
                return await imagenPublicacionTrabajador(foto) + ', ';
            });
            const fotos = await Promise.all(promesas);
            const cadenaFotos = fotos.join('');
            const enviar = collection(db, 'publicacionesTrabajador');
            addDoc(enviar, {
                id: datosPublicacion.usuario, titulo: datosPublicacion.titulo,
                descripcion: datosPublicacion.descripcion, ubicacion: datosPublicacion.ubicacion, fotos: cadenaFotos, materiales1: datosPublicacion.materiales1,
                materiales2: datosPublicacion.materiales2, materiales3: datosPublicacion.materiales3, materiales4: datosPublicacion.materiales4,
                presupuestoMateriales1: datosPublicacion.presupuestoMateriales1, presupuestoMateriales2: datosPublicacion.presupuestoMateriales2,
                presupuestoMateriales3: datosPublicacion.presupuestoMateriales3, presupuestoMateriales4: datosPublicacion.presupuestoMateriales4
            });
            navigate('/Arkitex/InicioTrabajador', {
                state: { id: id, logged: true }
            });
        })();
    }
    useEffect(() => {
        setValidacion(validacionPublicacion);
    }, [datosPublicacion])
    // const [componentes, setComponentes] = useState([]);
    // const agregarComponente = () => {

    //     const nuevoComponente = <>
    //         <Box>
    //             <TextField id='materiales' type='text' InputProps={{
    //             }} label='Presupuesto de: ' onChange={handleChangeDatos}></TextField>
    //         </Box>
    //         <Box>
    //             <TextField id='presupuestoMateriales' type='number' InputProps={{
    //                 startAdornment: (
    //                     <InputAdornment position="start">
    //                         <DineroIcon />
    //                     </InputAdornment>
    //                 ),
    //             }} label='A: ' onChange={handleChangeDatos}></TextField>
    //         </Box>
    //     </>
    //     setComponentes([...componentes, nuevoComponente]);
    // };
    return (
        <>
            <Box padding={{ xs: '2rem 1rem 0.5rem 1rem', sm: '1rem 3rem 0.5rem 3rem' }} >
                <Box display='flex' justifyContent='space-between' paddingBottom='1rem' flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center' }}>
                    <Box display='flex' alignItems='center' gap='1rem'>
                        <Button onClick={cambio2} sx={{ textAlign: 'start' }}>
                            <img src={back} style={{ width: '50px' }}></img>
                        </Button>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '500' }}>ARKITEX |</h2>
                    </Box>
                    <Box display='flex' alignItems='center' gap={{ xs: '0.4rem', sm: '0.8rem' }} className='navInicioTrabajador'>
                        <p>Favoritos </p>
                        <img style={{ width: '15px' }} src={heart} className='heart'></img>
                        <p>|</p>
                        <p>Contactanos |</p>
                        <Link onClick={cambio} className='perfil'>
                            <img style={{ width: '25px', borderRadius: '50%' }} src={img ? img : usuario}></img>
                            <p>{nombre}</p>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box className='fondoElipses2' sx={{
                background: '#FF9500', width: '100%', display: 'flex',
                alignItems: 'center', justifyContent: 'center', padding: '7rem 0'
            }}>
                <Box sx={{ backgroundColor: '#FEFEFE', borderRadius: '20px', margin: { xs: '0 3rem', md: '0 8rem' }, width: '100%' }}>
                    <h1 style={{ margin: '3rem 2rem 2rem 2rem' }}>Crea una publicación mostrando lo que realizaste</h1>
                    <Box component='form' autoComplete="off" padding='2rem 3rem' onSubmit={almacenarDatos}>
                        <Grid container display='flex' gap="4rem" wrap="nowrap" flexDirection={{ md: 'row', xs: 'column' }}>
                            <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <Box>
                                    <p className="label-crear">Titulo del trabajo</p>
                                    <TextField error={errores.titulo ? true : false} id='titulo' variant="standard" label='Titulo' helperText={errores.titulo ? 'El título al menos debe tener 8 caracteres' : 'Ejemplo: Construcción medio baño'} fullWidth
                                        onChange={handleChangeDatos}></TextField>
                                </Box>
                                <Box>
                                    <p className="label-crear">Ubicación</p>
                                    <TextField error={errores.ubicacion ? true : false} id='ubicacion' fullWidth variant="standard" type="text" label='Ubicación'
                                        helperText={errores.ubicacion ? 'La ubicación al menos debe tener 6 caracteres' : 'Tlalpan Centro I, Ciudad de México, CDMX'}
                                        onChange={handleChangeDatos}
                                    ></TextField>
                                </Box>
                                <Box>
                                    <p className="label-crear">Descripción del trabajo</p>
                                    <TextField error={errores.descripcion ? true : false} id='descripcion' size="medium" variant="outlined" type="text" label='Descripción'
                                        helperText={errores.descripcion ? 'La descripción debe tener al menos 16 caracteres' : 'Ejemplo: Se trabajo un piso de 3m x 5m para colocar loceta decorativa antiderrapante.'}
                                        multiline rows={5}
                                        onChange={handleChangeDatos}
                                    ></TextField>
                                </Box>
                            </Grid>
                            <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <Box>
                                    <p className="label-crear" style={{ textAlign: 'center' }}>Agrega al menos una foto</p>
                                    <Button component="label" variant="contained" sx={{ backgroundColor: 'rgba(255, 149, 0, 0.70)', borderRadius: '50%', width: '120px', height: '120px' }} startIcon={<Icono />}>
                                        <VisuallyHiddenInput type="file" id='foto' onChange={handleChangeDatos} />
                                    </Button>
                                    <div className="fotosSubidas"></div>
                                </Box>

                                <Box display='flex' flexDirection='column' gap='1rem'>
                                    <p className="label-crear" style={{ textAlign: 'center' }}>Añade un presupuesto estimado de los materiales que utilizaste (opcional)</p>
                                    <Box display='flex' flexDirection='column' gap='2rem' className='materiales'>
                                        <Box display='flex' gap='1rem'>
                                            <Box>
                                                <TextField id='materiales1' type='text' InputProps={{
                                                }} label='Presupuesto de: ' onChange={handleChangeDatos}></TextField>
                                            </Box>
                                            <Box>
                                                <TextField id='presupuestoMateriales1' type='number' InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <DineroIcon />
                                                        </InputAdornment>
                                                    ),
                                                }} label='A: ' onChange={handleChangeDatos}></TextField>
                                            </Box>
                                        </Box>
                                        {/* {componentes.map((componente, index) => (
                                            <Box display='flex' gap='1rem' key={index}>
                                                {componente}
                                            </Box>
                                        ))} */}
                                        <Box display='flex' gap='1rem'>
                                            <Box>
                                                <TextField id='materiales2' type='text' InputProps={{
                                                }} label='Presupuesto de: ' onChange={handleChangeDatos}></TextField>
                                            </Box>
                                            <Box>
                                                <TextField id='presupuestoMateriales2' type='number' InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <DineroIcon />
                                                        </InputAdornment>
                                                    ),
                                                }} label='A: ' onChange={handleChangeDatos}></TextField>
                                            </Box>
                                        </Box>
                                        <Box display='flex' gap='1rem'>
                                            <Box>
                                                <TextField id='materiales3' type='text' InputProps={{
                                                }} label='Presupuesto de: ' onChange={handleChangeDatos}></TextField>
                                            </Box>
                                            <Box>
                                                <TextField id='presupuestoMateriales3' type='number' InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <DineroIcon />
                                                        </InputAdornment>
                                                    ),
                                                }} label='A: ' onChange={handleChangeDatos}></TextField>
                                            </Box>
                                        </Box>
                                        <Box display='flex' gap='1rem'>
                                            <Box>
                                                <TextField id='materiales4' type='text' InputProps={{
                                                }} label='Presupuesto de: ' onChange={handleChangeDatos}></TextField>
                                            </Box>
                                            <Box>
                                                <TextField id='presupuestoMateriales4' type='number' InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <DineroIcon />
                                                        </InputAdornment>
                                                    ),
                                                }} label='A: ' onChange={handleChangeDatos}></TextField>
                                            </Box>
                                        </Box>
                                    </Box>

                                    {/* <Box>
                                        <Button onClick={agregarComponente} component="label" variant="contained" sx={{ backgroundColor: 'rgba(255, 149, 0, 0.70)', borderRadius: '50%', height: '50px' }} startIcon={<AddIcon />}>
                                        </Button>
                                    </Box> */}
                                </Box>
                            </Grid>
                        </Grid>
                        <Button disabled={validacion ? false : true} type="submit" variant="contained" sx={{ margin: '3rem', color: '#fff', padding: '0.8rem 2rem', borderRadius: '10px' }}>Crear Publicación</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PublicacionTrabajador