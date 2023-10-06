import { Grid, Button } from '@mui/material';
import './Navbar.css';
import Anchor from './Anchor/Anchor';

export default function Navbar(){
return(
<div className='navbar'>
 {/*Icono de menu para celulares*/}
 <div className="icono">

 <img src='./assets/Frame.svg' style={{width: '72px'}}/>
          <h2 className='Arkitex'>ARKITEX</h2>

 </div>
 <Grid justifyContent={"center"} display={{xs:"flex",md:"none"}}>
        
        </Grid>
        {/*Enlaces de la barra de navegacion*/}
        <Grid className='navegacion' component={"nav"} maxHeight={{md:"200px"}} display={"flex"}
        flexDirection={{xs:"column",md:"row"}} gap={"2rem"}>
        {/*Estos son otros componentes*/}
          <Anchor textoAnchor='Destacados'></Anchor>
          <Anchor textoAnchor='Testimonios'></Anchor>
          <Anchor textoAnchor='Acerca de Nosotros'></Anchor>
          <Anchor textoAnchor='Contacto'></Anchor>
  </Grid>
  <Button variant='contained' sx={{backgroundColor: "#FF9500", width: "300px", height: "60px", borderRadius: "20px", fontWeight: "700",
  '&:hover':{
    backgroundColor: "#da7110"
  }
  }}> Iniciar Sesion </Button>
      
</div>
)}