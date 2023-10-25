import { Box } from '@mui/material';
import Line from '/assets/linea.svg';
import Apartamento from '/assets/Apartment 1.svg';
import './Header.css';
function Header(props) {
  return (
    <Box>
      <Box display='flex' justifyContent='center' gap='1rem' padding='0 2rem' alignItems='center'>
      <img className='linea' src={Line} style={{maxWidth:'5px'}}></img>
      <h1 className='tituloTrabajador' style={{maxWidth:'880px',textAlign:'start',fontWeight:'500'}}>{props.titulo}</h1>
      <img className='apartamento' src={Apartamento}></img>
      </Box>
    </Box>
  )
}

export default Header