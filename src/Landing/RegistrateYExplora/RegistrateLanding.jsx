import { Box, Button, Grid } from "@mui/material";
import img1 from "/assets/Group.svg";
import img2 from "/assets/representacion-3d-modelo-casa-removebg-preview 1.svg";
import Trabajador from "/assets/Trabajador.png";
import Empleador from "/assets/EMPLEADOR.png";
import './RegistrateLanding.css';
import { Link } from 'react-router-dom';
function RegistrateLanding() {
    return (
        <>
            <Box display={'flex'} justifyContent={{ xs: 'center', md: 'space-between' }}
            width={'100%'}>
                <img src={img2} className='img'></img>
                <img src={img1} className='img'></img>
            </Box>
            <Box padding='3rem 3rem' className='regTitulo'>
                <h2>Registrate y Explora</h2>
                <p style={{marginTop:'1rem'}}>Segun lo que busques crea tu perfil</p>
            </Box>
            <Grid container columns={{md:2,xs:1}} className='regTitulo' sx={{minHeight:'550px'}}>
                <Grid item xs={1} sx={{background:'#F97B22',display:'flex',flexDirection:'column',
                alignItems:'center', justifyContent:'space-between'}} padding='2rem 3rem'>
                    <Box width='100%'>
                        <h3>Empleador</h3>
                        <p>Difunde tu trabajo y encuentra ofertas laborales</p>
                    </Box>
                    <img src={Empleador} className="imgEmpleadorLanding"></img>
                    <Link to='/Arkitex/RegistroEmpleador'>
                    <Button variant="contained" sx={{margin:'3rem 0', borderRadius:'25px',color:'#fff',padding:'0.8rem 3rem'}}>Registrarme</Button>
                    </Link>
                </Grid>
                <Grid item xs={1} sx={{background:'#F1C27B',display:'flex',flexDirection:'column',
                alignItems:'center', justifyContent:'space-between'}} padding='2rem 3rem'>
                    <Box width='100%'>
                        <h3>Trabajador</h3>
                        <p>Encuentra a alguien que realice el trabajo que buscas</p>
                    </Box>
                    <img src={Trabajador} className="imgEmpleadorLanding"></img>
                    <Link to='/Arkitex/RegistroTrabajador'>
                    <Button variant="contained" sx={{margin:'3rem 0', borderRadius:'25px',color:'#fff',padding:'0.8rem 3rem'}}>Registrarme</Button>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}

export default RegistrateLanding