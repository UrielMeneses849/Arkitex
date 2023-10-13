import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Checkbox, FormControlLabel, FormGroup, Grid, Input, InputAdornment, Slider, StepConnector, TextField, stepConnectorClasses, styled } from '@mui/material';
import frame from '/assets/Group 161.png';
import usuario from '/assets/Group 162.svg';
import localizacion from '/assets/Group 126.svg';
import lapiz from '/assets/Group 158.svg';
import img from '/assets/Group 157.svg';
import comprobacion from '/assets/comprobacion.svg';
import usuarioForm from '/assets/UsuarioForm.svg';
import Correo from '/assets/CorreoForm.svg';
import Telefono from '/assets/TelefonoForm.svg';
import Ubicacion from '/assets/ubicacion.svg';
import Lapiz2 from '/assets/lapiz2.svg';
import Img2 from '/assets/img2.svg';
import Alcaldia from '/assets/alcaldia.svg';
import Distancia from '/assets/distancia.svg';
import './RegistroTrabajador.css';
import Password from '/assets/password.svg';


const QontoConnector = styled(StepConnector)(() => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#FF9500',
    borderTopWidth: 3,
    borderRadius: 1,
    marginLeft: '13px',
    height: '60px',
    borderStyle: 'dotted',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
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
const steps = [
  '1','2','3','4'
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
  const { active, completed, className, index } = props;

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
{/*Formularios*/ }
const steps2 = [
  {
    description:
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 3rem', alignItems: 'center' }}>
        <legend style={{ textAlign: 'start', fontSize: '15px', color: '#888' }}>Agrega tus datos</legend>
        <TextField aria-label='#FF9500' id="nombreEmpleado" label="Nombre(s)" variant="standard" type='text'
          sx={{ width: '90%' }} name="nombres" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={usuarioForm} style={{ width: '1.2rem', margin: '0.5rem 0' }}></img>
              </InputAdornment>
            ),
          }} />
        <TextField id="apellidosEmpleado" label="Apellidos" variant="standard" type='text'
          name="apellidos"
          sx={{ width: '90%', color: 'red' }} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={usuarioForm} style={{ width: '1.2rem', margin: '0.5rem 0' }}></img>
              </InputAdornment>
            ),
          }} />
        <TextField label="Correo" variant="standard" type='mail'
          name="correo" id='correo'
          sx={{ width: '90%', color: 'red' }} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Correo} style={{ width: '1.5rem', "&:hover": { backgroundColor: 'red' } }}></img>
              </InputAdornment>
            ),
          }} />
        <TextField label="Teléfono de contacto" variant="standard" type='tel'
          name="telefono" id='telefono'
          sx={{ width: '90%', color: 'red' }} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Telefono} style={{ width: '1.5rem', "&:hover": { backgroundColor: 'red' } }}></img>
              </InputAdornment>
            ),
          }} />
      </form>
  },
  {
    description:
      <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem 3rem', alignItems: 'center' }}>
        <legend style={{ textAlign: 'start', fontSize: '15px', color: '#888' }}>Agrega tus datos</legend>
        <TextField aria-label='#FF9500' id="alcaldia" label="C.P ó Municipio / Alcaldia" variant="standard" type='text'
          sx={{ width: '90%' }} name="nombres" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Alcaldia} style={{ width: '1.5rem', margin: '0.5rem 0' }}></img>
              </InputAdornment>
            ),
          }} />
        <p>Distancia máxima a transladarte en KM</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <img src={Distancia} style={{ width: '30px' }}></img>
          <Slider id='distancia' defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{ minWidth: '400px' }} />
        </div>
        <TextField aria-label='#FF9500' id="password" label="Contraseña" variant="standard" type='password'
          sx={{ width: '90%' }} name="password" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Password} style={{ width: '1.5rem', margin: '0.5rem 0' }}></img>
              </InputAdornment>
            ),
          }} />
      </form>
  },
  {
    description:
      <form style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', padding: '1rem 3rem', alignItems: 'center' }}>
        <legend style={{ textAlign: 'start', fontSize: '15px', color: '#888', margin: '0' }}>A que te dedicas</legend>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Construcción</h2>
          <div style={{ display: 'flex' }}>
            <FormControlLabel control={<Checkbox />} label="Colado y Loza" />
            <FormControlLabel control={<Checkbox />} label="Tercer Piso" />
            <FormControlLabel control={<Checkbox />} label="Construcción Cocina " />
          </div>
          <div style={{ display: 'flex' }}>
            <FormControlLabel control={<Checkbox />} label="Baño completo" />
            <FormControlLabel control={<Checkbox />} label="Medio Baño" />
            <FormControlLabel control={<Checkbox />} label="Escaleras" />
          </div>
          <div style={{ display: 'flex' }}>
            <FormControlLabel control={<Checkbox />} label="Colocación de azulejo" />
            <FormControlLabel control={<Checkbox />} label="Patios" />
            <FormControlLabel control={<Checkbox />} label="Bardas / paredes" />
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Remodelación</h2>
          <div style={{ display: 'flex' }}>
            <FormControlLabel control={<Checkbox />} label="Decoración" />
            <FormControlLabel control={<Checkbox />} label="Baños" />
            <FormControlLabel control={<Checkbox />} label="Remodelación fachada" />
          </div>
          <div style={{ display: 'flex' }}>
            <FormControlLabel control={<Checkbox />} label="Decoración pared" />
            <FormControlLabel control={<Checkbox />} label="Patios" />
            <FormControlLabel control={<Checkbox />} label="Remodelación interior" />
          </div>
        </div>
      </form>
  },
  {
    description:
      <form>
        <legend style={{ textAlign: 'center', fontSize: '15px', color: '#888', margin: '1rem 0' }}>A que te dedicas</legend>
        <div style={{ border: '3px dotted #FF9500', minHeight: '300px', borderRadius: '25px', margin: '0 3rem' }}>
          <input type='file' accept='.jpg, .png'></input>
        </div>
      </form>
  },
];

export default function RegistroTrabajador() {
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const datos = function(){
  
    console.log(document.querySelector('#nombreEmpleado').value);
    console.log(document.querySelector('#apellidosEmpleado').value);
    console.log(document.querySelector('#correo').value);
    console.log(document.querySelector('#telefono').value);
  }
  const datos2 = function(){
  
    console.log(document.querySelector('#alcaldia').value);
    console.log(document.querySelector('#distancia').value);
    console.log(document.querySelector('#password').value);
  }
  const datos3 = function(){
  
    console.log('xd')
  }
  const datos4 = function(){
  
    console.log('xd')
  }
  return (
    <Box bgcolor={"#DEF1FF"} component={'main'} padding={'2rem 1rem'} height='100vh' sx={{ boxSizing: 'border-box' }}>
      <Grid container columns={2} height='100%' bgcolor='#F0F0F0'>
        <Grid item xs={1} height='100%' width='50%'>
          <img src={frame} alt='frame' style={{ maxHeight: '100%', minWidth: '100%' }}></img>
        </Grid>
        <Grid item component={'div'} xs={1} width='50%' height='100%' padding='1rem 0'
          display='flex' flexDirection='column'>
          <h1 style={{ textAlign: 'center', fontWeight: '700', fontSize: '25px', margin: '1rem 0' }}>Selecciona tus especialidades</h1>
          <Box sx={{ width: '90%', marginTop: '2rem' }} margin='0 auto'>
            <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
              {steps.map((step, index) => {
                return (
                  <Step key={step}>
                    <StepLabel StepIconComponent={(stepProps) => (
                      <QontoStepIcon {...stepProps} index={index} />
                    )}></StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            <React.Fragment>
              <Box sx={{ mt: 2, mb: 1 }}>{steps2[activeStep.valueOf()].description}</Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1, backgroundColor: 'grey', color: '#fff', '&:hover': { backgroundColor: '#988888' } }}
                >
                  Atras
                </Button>

                <Button onClick={()=>{
                    handleNext();
                    {if(activeStep===0){
                      datos();
                      }else if(activeStep===1){
                        datos2();
                      }else if(activeStep===2){
                        datos3();
                      }else{
                        datos4();
                      }}
                  }} variant='contained'>
                  {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                </Button>
              </Box>
            </React.Fragment>

          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}