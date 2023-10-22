import heart from '/assets/heart.svg';
import usuario from '/assets/usuario.svg';
import { Box } from '@mui/material';
import './Navegacion.css';
function Navegacion(Props) {
  return (
    <Box padding={{xs:'2rem 1rem 1.2rem 1rem',sm:'2rem 3rem 1.2rem 3rem'}} >
        <Box display='flex' justifyContent='space-between' paddingBottom='1rem' flexDirection={{xs:'column',sm:'row'}} alignItems={{xs:'center'}}>
            <h2 style={{fontSize:'1.8rem',fontWeight:'500'}}>ARKITEX |</h2>
            <Box display='flex' alignItems='center' gap={{xs:'0.4rem', sm:'0.8rem'}} className='navInicioTrabajador'>
                <p>Favoritos </p>
                <img style={{width:'15px'}} src={heart} className='heart'></img>
                <p>|</p>
                <p>Contactanos |</p>
                <img style={{width:'25px'}} src={usuario}></img>
                <p>{Props.nombre}</p>
            </Box>
        </Box>
        <hr style={{backgroundColor:'#767474'}}></hr>
    </Box>
  )
}

export default Navegacion