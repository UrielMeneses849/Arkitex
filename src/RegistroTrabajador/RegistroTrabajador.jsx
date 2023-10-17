/* eslint-disable react/prop-types */

import Box from '@mui/material/Box';
import { Grid} from '@mui/material';
import frame from '/assets/Group 161.png';
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
          <Form></Form>
        </Grid>
      </Grid>
    </Box>
  )
}

