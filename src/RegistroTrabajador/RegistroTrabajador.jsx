import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid, InputAdornment, StepConnector, TextField, stepConnectorClasses, styled } from '@mui/material';
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
import './RegistroTrabajador.css'

{/*Iconos del step*/ }
const noSeleccionado = [
  {
      label: <img src={usuario}></img>
  },
  {
      label: <img src={localizacion}></img>
  },
  {
      label: <img src={lapiz}></img>,
  },
  {
      label: <img src={img}></img>,
  },
];

const seleccionado = [
  {
      label: <img src={usuario}></img>
  },
  {
      label: <img src={Ubicacion}></img>
  },
  {
      label: <img src={Lapiz2}></img>
  },
  {
      label: <img src={Img2}></img>
  }
];
{/*Personalizacion de los iconos*/ }
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
      color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
  },
}));
{/*Cambio de iconos al estar activos y al finalizar*/ }
function QontoStepIcon(props) {
  const { active, completed, index } = props;

  return (
      <QontoStepIconRoot ownerState={{ active }}>
          {completed ? (
              <img src={comprobacion}></img>
          ) : (
              active ? (
                  seleccionado[index].label
              ) : (
                  noSeleccionado[index].label
              )
          )}
      </QontoStepIconRoot>
  );
}
const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
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

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box bgcolor={"#DEF1FF"} component={'main'} padding={'3rem 1rem'} height='100vh' sx={{ boxSizing: 'border-box' }}>
      <Grid container columns={2} height='100%' bgcolor='#F0F0F0'>
        <Grid item xs={1} height='100%' width='50%'>
          <img src={frame} alt='frame' style={{ maxHeight: '100%', minWidth: '100%' }}></img>
        </Grid>
        <Grid item component={'div'} xs={1} width='50%' height='100%' padding='1rem 0'
          display='flex' flexDirection='column' justifyContent='center'>
          <h1 style={{ textAlign: 'center', fontWeight: '500' }}>Ingresa tus datos personales</h1>

          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Box>

        </Grid>
      </Grid>
    </Box>
  )
}