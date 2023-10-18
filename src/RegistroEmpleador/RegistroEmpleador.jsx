/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import {  Button, Grid, Step, StepLabel, Stepper,} from '@mui/material';
import frame from '/assets/Group 161.png';
import { useState } from 'react';
// Componentes del formulario de registro
import EscogerTrabajo from './EscogerTrabajo';
import AreaTrabajo from './AreaTrabajo';
import DetallesTrabajo from './DetallesTrabajo';
import CompletaInformacion from './CompletaInformacion';

// --------------------------------------------------------Funcion principal----------------------------------------------------------------------------------------------------------------------
export default function RegistroTrabajador() {
//  Estado que almaceba la posicion del stepper
const [activeStep, setActiveStep] = useState(0);
// Funcion para avanzar de paso
const nextStep = () => {
    if(activeStep < 3) 
        setActiveStep(currentStep => currentStep + 1);
}
// Funcion para retroceder de paso
const previousStep = () => {
    if(activeStep !== 0) 
        setActiveStep(currentStep => currentStep - 1);
}

const [valorConstruccion, setValorConstruccion] = useState('Construccion');
const handleChangeConstruccion = (event) => {
    setValorConstruccion(event.target.value);
    console.log(valorConstruccion);
  };
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
          {activeStep === 0 && <h4 style={{color: "#888888"}}>Escoge que tipo de trabajo necesitas</h4>}
          {activeStep === 1 && <h4 style={{color: "#888888"}}>¿Que area se va a trabajar?</h4> }
          {activeStep === 2 && <h4 style={{color: "#888888"}}>Detalles del trabajo a realizar</h4> }
          {activeStep === 3 && <h4 style={{color: "#888888"}}>Texto 4</h4> }  


          <Box sx={{ width: '100%', marginTop: '2rem' }} margin='0'>
           
          <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>Elige</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Area de trabajo </StepLabel>
                </Step>
                <Step>
                    <StepLabel>Detalles</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Informacion Personal </StepLabel>
                </Step>
          </Stepper>
            {/* Contenido de cada paso */}
        <Box margin={"30px auto"} style={{ height: "85%"}}>

          {activeStep == 0 && <EscogerTrabajo valorConstruccion={valorConstruccion} handleChangeConstruccion={handleChangeConstruccion}/>}
          {activeStep == 1 && <AreaTrabajo valorConstruccion={valorConstruccion}/>}
          {activeStep == 2 && <DetallesTrabajo />}
          {activeStep == 3 && <CompletaInformacion />}
          
        </Box>
          <Box display={"flex"} justifyContent={"space-around"} margin={"10px auto 0"}>
          {/* Botones de pasos */}
            <Button variant='outlined' onClick={() => previousStep()}> Atras </Button>
            <Button variant='contained' onClick={() => nextStep()}> {activeStep === 3 ? "Terminar" : "Siguiente"} </Button>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

