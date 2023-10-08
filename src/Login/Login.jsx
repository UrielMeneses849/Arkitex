import { Grid } from '@mui/material';
import './Login.css';
import IniciarSesion from './IniciarSesion/IniciarSesion';
import TipoDeRegistro from './TipoDeRegistro/TipoDeRegistro';
export default function Login(){
return(
<>
    <div className='cont'>
        <Grid border={"6px solid #FF9500"} container
            columns={{xs:1,md:2}} px={{xs:3,md:8}} py={3} borderRadius={"1rem"} flexDirection={"row"}
            boxSizing={"border-box"} height='100%'>
            {/*Formulario de login*/}
            <IniciarSesion/>
            {/*Seleccion de tipo de registro*/}
            <TipoDeRegistro/>
        </Grid>
    </div>
</>
)}