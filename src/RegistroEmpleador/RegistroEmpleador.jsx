/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import { Button, Grid, Step, StepConnector, StepLabel, Stepper, stepConnectorClasses, styled } from '@mui/material';
import frame from '/assets/Group 161.png';
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
  //  Estado que al(maceba la posicion del stepper
  const [activeStep, setActiveStep] = useState(0);
  // Funcion para avanzar de paso
  const nextStep = () => {
    if (activeStep < 4)
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
  const handleChangeFoto = (e)=>{
    if (e.target.files[0]) {
      setFoto(e.target.files[0])
    }
  }
  const [descripcion, setDescripcion]=useState('');
  const handleChangeDescripcion = (e)=>{
    setDescripcion(e.target.value);
  }
  const [datosUsuario] = useState({
    nombre:'',
    apellidos:'',
    numero:'',
    correo:'',
    password:''
  });
  const [validacion, setValidacion] = useState(true);
  function validacionUsuario(){
    console.log(validacion);
    console.log(datosUsuario);
    if(datosUsuario.nombre != '' && datosUsuario.apellidos != '' && datosUsuario.numero != '' && datosUsuario.correo != '' && datosUsuario.password != ''){
      return false;
    }else{
      return true;
    }
  }
  const handleChangeUsuario = (e)=>{
    if(e.target.name === 'nombre'){
      if(e.target.value != '' && validarNombre(e.target.value)){
        datosUsuario.nombre = e.target.value;
      }else{
        datosUsuario.nombre ='';
      }
    }else if(e.target.name === 'apellidos'){
      if(e.target.value != '' && validarApellidos(e.target.value)){
        datosUsuario.apellidos = e.target.value;
      }else{
        datosUsuario.apellidos = '';
      }
    }else if(e.target.name === 'numero'){
      if(e.target.value != '' && validarTelefono(e.target.value)){
        datosUsuario.numero = e.target.value;
      }else{
        datosUsuario.numero = ''
      }
    }else if(e.target.name === 'correo'){
      if(e.target.value != '' && validarEmail(e.target.value)){
        datosUsuario.correo = e.target.value;
      }else{
        datosUsuario.correo = '';
      }
    }else{
      if(e.target.value != '' && validarPassword(e.target.value)){
        datosUsuario.password = e.target.value;
      }else{
        datosUsuario.password = '';
      }
    }
    setValidacion(validacionUsuario);
  }
  {/*Obtencion de datos por Jose Luis, comente tambien los form de cada formulario que tenias para hacer uno global */ }
  const obtenerDatos = (e) => {
    e.preventDefault();
    console.log(valorConstruccion);
    console.log(area);
    console.log(foto);
    console.log(descripcion);
    console.log(datosUsuario);
  }
  // ------------------------------------------------------Funciones de Manuel para Firebase



  // ------------------------------------------------------Funciones de Manuel para Firebase
  return (
    // Contenedor principal
    <Box bgcolor={"#fafafa"} component={'main'} padding={'2rem 1rem'} height='100vh' sx={{ boxSizing: 'border-box' }}>
      <Grid container columns={2} height='100%' bgcolor='#F0F0F0' borderRadius={'30px'}>
        <Grid item xs={1} height='100%' width='50%'>
          {/* Imagen izquierda del login */}
          <img src={frame} alt='frame' style={{ maxHeight: '100%', minWidth: '100%' }}></img>
        </Grid>
        <Grid item component={'div'} xs={1} width='50%' height='100%' padding='1rem 0'
          display='flex' flexDirection='column'>
          <h1 style={{ textAlign: 'center', fontWeight: '700', fontSize: '40px', margin: '4rem 0 2rem' }}>Registrate como empleador</h1>
          {/* Textos de ayuda dependiendo del paso en el que este */}
          {activeStep === 0 && <h4 style={{ color: "#888888" }}>Escoge que tipo de trabajo necesitas</h4>}
          {activeStep === 1 && <h4 style={{ color: "#888888" }}>¿Que area se va a trabajar?</h4>}
          {activeStep === 2 && <h4 style={{ color: "#888888" }}>Detalles del trabajo a realizar</h4>}
          {activeStep === 3 && <h4 style={{ color: "#888888" }}>Texto 4</h4>}


          <Box sx={{ width: '100%', marginTop: '2rem' }} margin='0'>

            <Stepper activeStep={activeStep} connector={<QontoConnector />}>
              <Step>
                <StepLabel StepIconComponent={(stepProps) => (
                  <QontoStepIcon {...stepProps} index={0} />
                )}>Elige</StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={(stepProps) => (
                  <QontoStepIcon {...stepProps} index={1} />
                )}>Area de trabajo </StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={(stepProps) => (
                  <QontoStepIcon {...stepProps} index={2} />
                )}>Detalles</StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={(stepProps) => (
                  <QontoStepIcon {...stepProps} index={3} />
                )}>Informacion Personal </StepLabel>
              </Step>
            </Stepper>
            {/* Contenido de cada paso */}
            {/*Box para de component=form?*/}
            {/*Codigo Jose Luis agregando*/}
            <Box margin={"30px auto"} style={{ height: "85%" }}

              component='form'
              autoComplete="off"
              onSubmit={obtenerDatos}
            >

              {activeStep == 0 && <EscogerTrabajo valorConstruccion={valorConstruccion} handleChangeConstruccion={handleChangeConstruccion} />}
              {activeStep == 1 && <AreaTrabajo valorConstruccion={valorConstruccion} handleChangeArea={handleChangeAreaTrabajo} />}
              {activeStep == 2 && <DetallesTrabajo handleChangeFotos={handleChangeFoto} handleChangeDescripcion={handleChangeDescripcion}/>}
              {activeStep == 3 && <CompletaInformacion handleChangeUsuario={handleChangeUsuario}/>}
              {activeStep == 4 && <Complete />}

              <Box display={"flex"} justifyContent={"space-around"} margin={"10px auto 0"}>
                {/* Botones de pasos codigo agregado por mi. xd */}
                {activeStep < 4 && <Button variant='outlined' onClick={() => previousStep()}> Atras </Button>}
                {activeStep < 4 && <Button sx={{ display: activeStep === 3 ? "none" : "block" }} variant='contained' onClick={() => nextStep()}> Siguiente </Button>}
                {activeStep === 3 && <Button disabled={validacion?true:false} variant='contained' sx={{ color: '#fff' }} type='submit'>Terminar</Button>}
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

