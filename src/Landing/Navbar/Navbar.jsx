import { Grid, Button } from '@mui/material';
import './Navbar.css';
import Anchor from './Anchor/Anchor';
import { Link } from 'react-router-dom';
import menu2 from '/assets/menu1.svg';

export default function Navbar() {
  function menu() {
    const navegacion = document.querySelector('.navegacion');
    navegacion.classList.toggle('mostrar');
  }
  return (
    <div className='navbar'>
      {/*Icono de menu para celulares*/}
      <div className="icono">
        <img src='./assets/Frame.svg' style={{ width: '60px' }} />
        <h2 className='Arkitex'>ARKITEX</h2>
      </div>
      <Grid justifyContent={"center"} display={{ xs: "flex", md: "none" }}>
        <img src={menu2} className='menu' onClick={menu}></img>
      </Grid>
      {/*Enlaces de la barra de navegacion*/}
      <Grid className='navegacion' component={"nav"} maxHeight={{ md: "200px" }} display={"flex"}
        flexDirection={{ xs: "column", md: "row" }} gap={"2rem"} marginBottom={{xs:'1rem',md:'0'}}>
        {/*Estos son otros componentes*/}
        <Anchor textoAnchor='Destacados'></Anchor>
        <Anchor textoAnchor='Testimonios'></Anchor>
        <Anchor textoAnchor='Acerca de Nosotros'></Anchor>
        <Anchor textoAnchor='Contacto'></Anchor>
      </Grid>
      <Link to={'/Login'}>
        <Button variant='contained' sx={{
          width: {xl:"300px"}, height: {xl:"60px",xs:'auto'}, borderRadius: "25px", fontWeight: "700",
          '&:hover': {
            backgroundColor: "#da7110"
          }, color: '#FFF',
          padding:{xl:'auto',xs:'0.8rem 3rem'},
        }}> Iniciar Sesion </Button>
      </Link>
    </div>
  )
}