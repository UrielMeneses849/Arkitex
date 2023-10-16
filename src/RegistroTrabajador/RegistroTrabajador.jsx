
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
import React, { useState } from 'react';
import Form from "./Form";


{/*Formularios*/ }


export default function RegistroTrabajador() {
  
  return (
    <Box bgcolor={"#DEF1FF"} component={'main'} padding={'2rem 1rem'} height='100vh' sx={{ boxSizing: 'border-box' }}>
      <Grid container columns={2} height='100%' bgcolor='#F0F0F0'>
        <Grid item xs={1} height='100%' width='50%'>
          <img src={frame} alt='frame' style={{ maxHeight: '100%', minWidth: '100%' }}></img>
        </Grid>
        <Grid item component={'div'} xs={1} width='50%' height='100%' padding='1rem 0'
          display='flex' flexDirection='column'>
          <h1 style={{ textAlign: 'center', fontWeight: '700', fontSize: '25px', margin: '1rem 0' }}>Selecciona tus especialidades</h1>
          <Form></Form>
        </Grid>
      </Grid>
    </Box>
  )
}