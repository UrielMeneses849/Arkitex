
import Box from '@mui/material/Box';

import { Grid } from '@mui/material';
import frame from '/assets/Group 161.png';


import './RegistroTrabajador.css'

{/*Iconos del step*/ }



{/*Personalizacion de los iconos*/ }

{/*Cambio de iconos al estar activos y al finalizar*/ }


export default function RegistroTrabajador() {
 

 
  return (
    <Box bgcolor={"#fafafa"} component={'main'} padding={'3rem 3rem'} height='100vh' sx={{ boxSizing: 'border-box' }}>
      <Grid container columns={2} height='100%' bgcolor='#F0F0F0' borderRadius={"20px"} boxShadow={" 4px 7px 17px 0px rgba(0, 0, 0, 0.10), 16px 26px 31px 0px rgba(0, 0, 0, 0.09), 36px 59px 42px 0px rgba(0, 0, 0, 0.05), 64px 105px 49px 0px rgba(0, 0, 0, 0.01), 101px 164px 54px 0px rgba(0, 0, 0, 0.00);"}>
        <Grid item xs={1} height='100%' width='50%'>
          <img src={frame} alt='frame' style={{ maxHeight: '100%', minWidth: '100%' }}></img>
        </Grid>
        <Grid item component={'div'} xs={1} width='50%' height='100%' padding='1rem 0'
          display='flex' flexDirection='column'>
          <h1 style={{ textAlign: 'center', fontWeight: '700', fontSize:'40px', color: "#121212", margin: "30px auto"}}>Ingresa tus datos personales</h1>

         

        </Grid>
      </Grid>
    </Box>
  )
}