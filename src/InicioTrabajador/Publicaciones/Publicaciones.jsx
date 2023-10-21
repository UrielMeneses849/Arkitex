import { Box, Button, Grid } from "@mui/material"
import Plus from '/assets/plus-circle-svgrepo-com 1.svg';
import './Publicaciones.css'
import { Link } from "react-router-dom";
import casa from '/assets/Group 68.svg';
const Icono = ()=>{
  return <img src={Plus} style={{height:'2rem'}}></img>
}
function Publicaciones() {
  return (
    <>
      <Box className='filtros'>
        <li>Recomendado</li>
        <li>Pared</li>
        <li>Piso</li>
        <li>Remodelación</li>
        <li>3er piso</li>
        <li>Baño</li>
        <li>Decoración</li>
        <li>Construcciones mayores</li>
      </Box>
      <Box display='flex' margin='3rem 0 3rem 6rem'>
        <Link to='/'>
          <Button variant="contained" sx={{color:'#fff',padding:'1rem 1rem'}} endIcon={<Icono/>}>
            Publicar Trabajo
          </Button>
        </Link>
      </Box>
      <Grid container columns={3} gap='3rem' padding='0 3rem' display='flex' justifyContent='center'>
        <Grid item sx={{border:'1px solid #FF9500', borderRadius:'20px', padding:'1rem 2rem',textAlign:'start',
        boxShadow:'4px 4px 4px 0px rgba(0, 0, 0, 0.25)',maxWidth:'350px', '&:hover':{cursor:'pointer'}}}>
          <p style={{ color:'#FF9500'}}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
        <Grid item sx={{border:'1px solid #FF9500', borderRadius:'20px', padding:'1rem 2rem',textAlign:'start',
        boxShadow:'4px 4px 4px 0px rgba(0, 0, 0, 0.25)',maxWidth:'350px', '&:hover':{cursor:'pointer'}}}>
          <p style={{ color:'#FF9500'}}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
        <Grid item sx={{border:'1px solid #FF9500', borderRadius:'20px', padding:'1rem 2rem',textAlign:'start',
        boxShadow:'4px 4px 4px 0px rgba(0, 0, 0, 0.25)',maxWidth:'350px', '&:hover':{cursor:'pointer'}}}>
          <p style={{ color:'#FF9500'}}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
        <Grid item sx={{border:'1px solid #FF9500', borderRadius:'20px', padding:'1rem 2rem',textAlign:'start',
        boxShadow:'4px 4px 4px 0px rgba(0, 0, 0, 0.25)',maxWidth:'350px', '&:hover':{cursor:'pointer'}}}>
          <p style={{ color:'#FF9500'}}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
        <Grid item sx={{border:'1px solid #FF9500', borderRadius:'20px', padding:'1rem 2rem',textAlign:'start',
        boxShadow:'4px 4px 4px 0px rgba(0, 0, 0, 0.25)',maxWidth:'350px', '&:hover':{cursor:'pointer'}}}>
          <p style={{ color:'#FF9500'}}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
        <Grid item sx={{border:'1px solid #FF9500', borderRadius:'20px', padding:'1rem 2rem',textAlign:'start',
        boxShadow:'4px 4px 4px 0px rgba(0, 0, 0, 0.25)',maxWidth:'350px', '&:hover':{cursor:'pointer'}}}>
          <p style={{ color:'#FF9500'}}>Busco - Remodelacion de Pared</p>
          <p>EDOMEX, Texcoco</p>
          <p>Joaquín Martínez</p>
          <img src={casa}></img>
        </Grid>
 
      </Grid>
    </>
  )
}

export default Publicaciones