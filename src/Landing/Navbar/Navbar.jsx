import { Grid } from '@mui/material';
import './Navbar.css';
import Anchor from './Anchor/Anchor';

export default function Navbar(){
return(
<>
 {/*Icono de menu para celulares*/}
 <img src='./assets/Frame.svg' style={{width: '32px'}}/>
          <h2>ARKITEX</h2>
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
</>
)}