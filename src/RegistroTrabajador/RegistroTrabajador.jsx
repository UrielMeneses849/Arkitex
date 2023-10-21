/* eslint-disable react/prop-types */

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Form from "./Form";
import back from '/assets/backsvg 1.svg';
import { Link } from 'react-router-dom';
import './RegistroTrabajador.css'
{/*Formularios*/ }


export default function RegistroTrabajador() {

  return (
    <Box bgcolor={"#DEF1FF"} component={'main'} padding={'1rem'} height='100vh' sx={{
      boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column'
    }}>
      <Grid container columns={{xs:1,sm:2}} height='100vh' bgcolor='#F0F0F0' borderRadius='20px' margin='auto'>
        <Grid item xs={1} height='100%' width='50%' className='frame' display={{sm:'block',xs:'none'}}>
          <Link to='/Login' sx={{ textAlign: 'start' }}>
            <img src={back} style={{ width: '50px' }}></img>
          </Link>
        </Grid>
        <Grid item component={'div'} xs={1} width={{xs:'100%',sm:'50%'}} height='100%' padding='1rem 0'
          display='flex' flexDirection='column'>
          <Form></Form>
        </Grid>
      </Grid>
    </Box>
  )
}

