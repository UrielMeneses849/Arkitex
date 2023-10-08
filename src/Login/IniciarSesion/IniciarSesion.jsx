import { Box, Button, Grid, TextField} from "@mui/material";
import './IniciarSesion.css';

export default function IniciarSesion() {
    return (
        <Grid item xs={1} height='100%'>
            <Grid boxShadow={"4px 4px 4px #00000040"} borderRadius={"50px"} display={"flex"}
            justifyContent={"center"} alignItems={"center"} flexDirection={"column"} p={3}
            height='100%'>
                <div className="login">
                    <h2 className="login__h2" style={{color:'#FF9500'}}>Bienvenido a Arkitex</h2>
                    <h3 className="login__h3">Iniciar Sesion</h3>
                
                <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1},
                width:'100%'
                }}
                noValidate
                autoComplete="off"
                display={"flex"}
                flexDirection={"column"}
                alignItems={'center'}
                >
                    <TextField  sx={{width:{md:'300px'}}}  aria-label='#FF9500' id="correo" label="Correo" variant="outlined" type='text'/>
                    <TextField sx={{width:{md:'300px'}}} id="password" label="Contraseña" variant="outlined" type='password'/>
                </Box>
                <Button variant="contained" sx={{borderRadius:'30px', padding:'1rem 3rem', color:'#fff'}}>Iniciar Sesión</Button>
                <hr className="hr"/>
                <p>¿Solo quieres dar un vistazo?</p>
                <Button variant="contained" sx={{borderRadius:'30px', padding:'1rem 3rem', color:'#fff'}}>Visitar Sitio</Button>
                </div>
            </Grid>
        </Grid>
    )
}
