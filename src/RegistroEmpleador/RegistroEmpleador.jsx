/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import { Button, Grid, Step, StepConnector, StepLabel, Stepper, stepConnectorClasses, styled } from '@mui/material';
// import frame from '/assets/Group 161.png';
import { useState } from 'react';
// Componentes del formulario de registro
import EscogerTrabajo from './EscogerTrabajo';
import AreaTrabajo from './AreaTrabajo';
import DetallesTrabajo from './DetallesTrabajo';
import CompletaInformacion from './CompletaInformacion';
import Complete from './Complete';
//Iconos
import usuario from '/assets/Group 162.svg';
import localizacion from '/assets/Group 126.svg';
import lapiz from '/assets/Group 158.svg';
import img from '/assets/Group 157.svg';
import comprobacion from '/assets/comprobacion.svg';
import Ubicacion from '/assets/ubicacion.svg';
import Lapiz2 from '/assets/lapiz2.svg';
import Img2 from '/assets/img2.svg';
import { Link } from 'react-router-dom';
import { validarApellidos, validarNombre, validarTelefono } from '../RegistroTrabajador/Form/DatosPersonales/validaciones';
import { validarEmail, validarPassword } from '../RegistroTrabajador/Form/DatosUsuario/validaciones';
//Firebase
import { db } from '../Firebase/credenciales';
import { imagenUsuarios } from '../Firebase/imagenes';
import app from '../Firebase/credenciales';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
//Redireccion
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from 'firebase/firestore';
import back from '/assets/backsvg 1.svg';

import './EscogerTrabajo/RegistroEmpleador.css';
//Personalizacion del stepper
const QontoConnector = styled(StepConnector)(() => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#FF9500',
    borderTopWidth: 2,
    borderRadius: 1,
    // borderStyle: 'dotted',
    // borderBottom: 'none',
    // borderLeft: 'none',
    // borderRight: 'none',
    // backgroundSize: '10px 3x',
    // backgroundRepeat: 'repeat-x',
    // backgroundImage: 'linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%)'

  },
}));
{/*Iconos activos e inactivos*/ }
const img10 = [
  {
    label: <img src={usuario} style={{ width: '35px' }}></img>
  },
  {
    label: <img src={localizacion} style={{ width: '35px' }}></img>
  },
  {
    label: <img src={lapiz} style={{ width: '35px' }}></img>,
  },
  {
    label: <img src={img} style={{ width: '35px' }}></img>,
  },
];

const seleccionado = [
  {
    label: <img src={usuario} style={{ width: '35px' }}></img>
  },
  {
    label: <img src={Ubicacion} style={{ width: '35px' }}></img>
  },
  {
    label: <img src={Lapiz2} style={{ width: '35px' }}></img>
  },
  {
    label: <img src={Img2} style={{ width: '35px' }}></img>
  }
];

{/*Logica de los iconos*/ }
function QontoStepIcon(props) {
  const { active, completed, index } = props;

  return (
    <>
      {completed ? (
        <img src={comprobacion} style={{ width: '35px' }}></img>
      ) : (
        active ? (
          seleccionado[index].label
        ) : (
          img10[index].label
        )
      )}
    </>
  );
}
// --------------------------------------------------------Funcion principal----------------------------------------------------------------------------------------------------------------------
export default function RegistroTrabajador() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const storage = getStorage(app);
  //  Estado que al(maceba la posicion del stepper
  const [activeStep, setActiveStep] = useState(0);
  // Funcion para avanzar de paso
  const nextStep = () => {
    if (activeStep < 4)``
      setActiveStep(currentStep => currentStep + 1);
  }
  // Funcion para retroceder de paso
  const previousStep = () => {
    if (activeStep !== 0)
      setActiveStep(currentStep => currentStep - 1);
  }

  const [valorConstruccion, setValorConstruccion] = useState('Construcción');
  const handleChangeConstruccion = (event) => {
    setValorConstruccion(event.target.value);
  };
  const [area] = useState([])
  const handleChangeAreaTrabajo = (event) => {
    if (event.target.name) {
      area.push(event.target.name);
    }
  };
  const [foto, setFoto] = useState({});
  const handleChangeFoto = (e) => {
    if (e.target.files[0]) {
      setFoto(e.target.files[0])
    }
  }
  const [descripcion, setDescripcion] = useState('');
  const handleChangeDescripcion = (e) => {
    setDescripcion(e.target.value);
  }
  const [datosUsuario] = useState({
    nombre: '',
    apellidos: '',
    numero: '',
    correo: '',
    password: ''
  });
  const [validacion, setValidacion] = useState(true);
  function validacionUsuario() {
    if (datosUsuario.nombre != '' && datosUsuario.apellidos != '' && datosUsuario.numero != '' && datosUsuario.correo != '' && datosUsuario.password != '') {
      return false;
    } else {
      return true;
    }
  }
  const handleChangeUsuario = (e) => {
    if (e.target.name === 'nombre') {
      if (e.target.value != '' && validarNombre(e.target.value)) {
        datosUsuario.nombre = e.target.value;
      } else {
        datosUsuario.nombre = '';
      }
    } else if (e.target.name === 'apellidos') {
      if (e.target.value != '' && validarApellidos(e.target.value)) {
        datosUsuario.apellidos = e.target.value;
      } else {
        datosUsuario.apellidos = '';
      }
    } else if (e.target.name === 'numero') {
      if (e.target.value != '' && validarTelefono(e.target.value)) {
        datosUsuario.numero = e.target.value;
      } else {
        datosUsuario.numero = ''
      }
    } else if (e.target.name === 'correo') {
      if (e.target.value != '' && validarEmail(e.target.value)) {
        datosUsuario.correo = e.target.value;
      } else {
        datosUsuario.correo = '';
      }
    } else {
      if (e.target.value != '' && validarPassword(e.target.value)) {
        datosUsuario.password = e.target.value;
      } else {
        datosUsuario.password = '';
      }
    }
    setValidacion(validacionUsuario);
  }
  const [datos] = useState([])
  {/*Obtencion de datos por Jose Luis, comente tambien los form de cada formulario que tenias para hacer uno global */ }
  let [url] = useState('');
  let [id] = useState('');
  const [error, setError] = useState('');
  const obtenerDatos = (e) => {
    e.preventDefault();
    const areaDC = area.filter((valor, indice, self) => {
      return self.indexOf(valor) === indice;
    });
    const areaResultado = areaDC.join(', ');

    (async () => {
      console.log(foto.name)
      if (foto.name != '') {
        url = await imagenUsuarios(foto);
      }
        const enviar = collection(db, 'Usuarios');
        //Creacion de usuario
        createUserWithEmailAndPassword(auth, datosUsuario.correo, datosUsuario.password)
          .then((userCredential) => {
            // Signed in
            id = userCredential.user.uid;
            addDoc(enviar, { id: id, nombre: datosUsuario.nombre, apellidos: datosUsuario.apellidos, telefono: datosUsuario.numero, area: areaResultado, url: url, decoracionConstruccion:valorConstruccion,correo:datosUsuario.correo ,rol: 'empleador' });
          })
          .catch(() => {
            setError('El email ya esta registrado, vuelve a registrarte');
          });
          setTimeout(() => {
            navigate('/Arkitex/InicioEmpleador',{
              state: { id: id, logged: true}
            });
          }, 2000);
    })();
    setActiveStep(currentStep => currentStep + 1);
  }
  // ------------------------------------------------------Funciones de Manuel para Firebase



  // ------------------------------------------------------Funciones de Manuel para Firebase
  return (
    // Contenedor principal
    <Box bgcolor={"#fafafa"} component={'main'} padding={'2rem 1rem'} height='100vh' sx={{ boxSizing: 'border-box' }}>
      <Grid container columns={{xs:1,md:2}} height='100%' bgcolor='#F0F0F0' borderRadius={'30px'}>
      <Grid item xs={1} height='100%' width='50%' className='frame' display={{md:'flex',xs:'none'}}>
          <Link to='/Login' sx={{ textAlign: 'start' }}>
            <img src={back} style={{ width: '50px' }}></img>
          </Link>
        </Grid>
        <Grid item component={'div'} xs={1} width={{md:'100%',xl:'50%'}} height='100%' padding='1rem 0'
          display='flex' flexDirection='column'>
          <h1 style={{ textAlign: 'center', fontWeight: '700', fontSize: '25px', margin: '1rem 0 1rem' }}>Registrate como empleador</h1>
          {/* Textos de ayuda dependiendo del paso en el que este */}
          {activeStep === 0 && <h4  style={{ color: "#888888",fontSize:'15px' }}>Escoge que tipo de trabajo necesitas</h4>}
          {activeStep === 1 && <h4  style={{ color: "#888888",fontSize:'15px' }}>¿Que area se va a trabajar?</h4>}
          {activeStep === 2 && <h4  style={{ color: "#888888",fontSize:'15px' }}>Detalles del trabajo a realizar</h4>}
          {activeStep === 3 && <h4  style={{ color: "#888888",fontSize:'15px' }}>Completa tu Registro</h4>}


          <Box sx={{ width: '100%', marginTop: '2rem' }} margin='0'>

            <Stepper activeStep={activeStep} connector={<QontoConnector />}>
              <Step> 
                <StepLabel StepIconComponent={(stepProps) => (
                  <QontoStepIcon {...stepProps} index={0} />
                )}> <h4 className='Empleador_h4'>Elige</h4></StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={(stepProps) => (
                  <QontoStepIcon {...stepProps} index={1} />
                )} > <h4 className='Empleador_h4'>Area de trabajo </h4></StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={(stepProps) => (
                  <QontoStepIcon {...stepProps} index={2} />
                )}> <h4 className='Empleador_h4'>Detalles</h4></StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={(stepProps) => (
                  <QontoStepIcon {...stepProps} index={3} />
                )}> <h4 className='Empleador_h4'>Informacion Personal </h4> </StepLabel>
              </Step>
            </Stepper>
            {/* Contenido de cada paso */}
            {/*Box para de component=form?*/}
            {/*Codigo Jose Luis agregando*/}
            <Box margin={"30px auto"} style={{height: "100%" }}

              component='form'
              autoComplete="off"
              onSubmit={obtenerDatos}
            >

              {activeStep == 0 && <EscogerTrabajo valorConstruccion={valorConstruccion} handleChangeConstruccion={handleChangeConstruccion} />}
              {activeStep == 1 && <AreaTrabajo valorConstruccion={valorConstruccion} handleChangeArea={handleChangeAreaTrabajo} />}
              {activeStep == 2 && <DetallesTrabajo handleChangeFotos={handleChangeFoto} handleChangeDescripcion={handleChangeDescripcion} />}
              {activeStep == 3 && <CompletaInformacion handleChangeUsuario={handleChangeUsuario} />}
              {activeStep == 4 && <Complete nombre={datosUsuario.nombre}/>}

              <Box display={"flex"} justifyContent={"space-around"} margin={"10px auto 0"}>
                {/* Botones de pasos codigo agregado por mi. xd */}
                {activeStep < 4 && <Button variant='outlined' onClick={() => previousStep()}> Atras </Button>}
                {activeStep < 4 && <Button sx={{ display: activeStep === 3 ? "none" : "block" }} variant='contained' onClick={() => nextStep()}> Siguiente </Button>}
                {activeStep === 3 && <Button disabled={validacion ? true : false} variant='contained' sx={{ color: '#fff' }} type='submit'>Terminar</Button>}
              </Box>
            </Box>
            {/* <Box display={"flex"} justifyContent={"space-around"} margin={"10px auto 0"}>
          
            { activeStep < 4 && <Button variant='outlined' onClick={() => previousStep()}> Atras </Button>}
            {activeStep < 4 && <Button variant='contained' onClick={() => nextStep()}> {activeStep === 3 ? "Terminar" : "Siguiente"} </Button>}
          </Box> */}
            {activeStep == 4 &&
              <Link to="/Inicio">
                <Button variant='contained'> Ir al inicio</Button>
              </Link>
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

