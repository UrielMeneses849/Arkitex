import { Button, Grid } from '@mui/material'
import Trabajador from "/assets/Trabajador.png";
import Empleador from "/assets/EMPLEADOR.png";
import './Login.css'
export default function Login(){
return(
<>
    <div className='contenedor'>
        <Grid border={"6px solid #FF9500"} height={"100%"} container
            columns={{xs:1,md:2}} px={{xs:3,md:8}} py={3} borderRadius={"1rem"} flexDirection={"row"}
            boxSizing={"border-box"}>
            {/*Formulario de login*/}
            <Grid item xs={1}>
                <Grid boxShadow={"4px 4px 4px #00000040"} borderRadius={"50px"} display={"flex"}
                justifyContent={"center"} alignItems={"center"} flexDirection={"column"} p={3}
                height={"100%"}>
                    <div className="login">
                        <h2 className="login__h2" style={{color:'#FF9500'}}>Bienvenido a Arkitex</h2>
                        <h3 className="login__h3">Iniciar Sesion</h3>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={1} px={{xs:0,md:5,lg:15,xl:20}} mt={{xs:'1rem', md:'0'}}>
                    {/* */}
                <Grid container style={{backgroundColor:"#FF9500"}}  borderRadius={"50px"}
                boxShadow={"4px 4px 4px #00000040"} py={6} px={2} columns={1} flexDirection={"column"} gap={"3rem"}
                width={"100%"} paddingX={"2rem"} marginLeft={{md:'3rem'}} height={"100%"}>
                    <h2 className="opcionRegistro-h2">Registrate</h2>
                    <Grid columns={2} display={"flex"} flexDirection={{xs:'column',md:'row'}}>
                        <Grid item xs={1} display={"flex"} gap={"1rem"} flexDirection={"column"} 
                        alignItems={{xs:"center",md:'start'}}>
                            <h3 className="opcionRegistro-h3">Trabajador</h3>
                            <p className="opcionRegistro-p">Regístrate, difunde tu trabajo y aumenta tus ofertas</p>
                            <Button>Registrarse</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <img src={Trabajador} className="imgEmpleador" />
                        </Grid>
                    </Grid>
                    <Grid columns={2} display={"flex"} flexDirection={{xs:'column',md:'row'}}>
                        <Grid item xs={1} display={"flex"} gap={"1rem"} flexDirection={"column"} alignItems={{xs:"center",md:'start'}}>
                            <h3 className="opcionRegistro-h3">Empleador</h3>
                            <p className="opcionRegistro-p">Reencuentra a la persona adecuada para realizar tu remodelación</p>
                            <Button>Registrarse</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <img src={Empleador} className="imgEmpleador" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
</>
)}