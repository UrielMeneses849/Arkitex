import { Box, Button, Grid } from "@mui/material"
import Plus from '/assets/plus-circle-svgrepo-com 1.svg';
import './Publicaciones.css'
import casa from '/assets/Group 68.svg';
const Icono = ()=>{
  return <img src={Plus} style={{height:'2rem'}}></img>
}
function Publicaciones() {
  return (
    <>
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