import Trabajador from "/assets/Trabajador.svg";
import Empleador from "/assets/EMPLEADOR.svg";
import { Button, Grid } from "@mui/material";
import './TipoRegistro.css';
import { Link } from "react-router-dom";
export default function TipoDeRegistro() {
    return (
        <Grid item xs={1} px={{ xs: 0, md: 5, lg: 15, xl: 20 }} mt={{ xs: '1rem', md: '0rem' }} >
            {/* */}
            <Grid container style={{ backgroundColor: "#FF9500" }} borderRadius={"50px"}
                boxShadow={"4px 4px 4px #00000040"} py={4} px={2} columns={1} flexDirection={"column"}
                width={"100%"} paddingX={"2rem"} marginLeft={{ md: '3rem' }} height='100%' gap='3rem'>
                <h2 className="opcionRegistro-h2">Registrate</h2>
                <Grid columns={2} display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} sx={{gap:'1rem'}}>
                    <Grid item xs={1} display={"flex"} gap={"1rem"} flexDirection={"column"}
                        alignItems={{ xs: "center", md: 'start' }}>
                        <h3 className="opcionRegistro-h3">Trabajador</h3>
                        <p className="opcionRegistro-p">Regístrate, difunde tu trabajo y aumenta tus ofertas</p>
                        <Link to='/Arkitex/RegistroTrabajador'>
                            <Button variant="contained" sx={{backgroundColor:'#fff',color:'#FF9500'}} >Registrarse</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={1} sx={{textAlign:'center'}}>
                        <img src={Trabajador} className="imgEmpleador" />
                    </Grid>
                </Grid>
                <Grid columns={2} display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} sx={{gap:'1rem'}}>
                    <Grid item xs={1} display={{md:'block', xs:'none'}} sx={{textAlign:'center'}}>
                        <img src={Empleador} className="imgEmpleador" />
                    </Grid>
                    <Grid item xs={1} display={"flex"} gap={"1rem"} flexDirection={"column"} alignItems={{ xs: "center", md: 'start' }}>
                        <h3 className="opcionRegistro-h3">Empleador</h3>
                        <p className="opcionRegistro-p">Reencuentra a la persona adecuada para realizar tu remodelación</p>
                        <Link to='/Arkitex/RegistroEmpleador'>
                            <Button variant="contained" sx={{backgroundColor:'#fff',color:'#FF9500'}} >Registrarse</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={1} display={{md:'none', xs:'block'}} sx={{textAlign:'center'}}>
                        <img src={Empleador} className="imgEmpleador" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}