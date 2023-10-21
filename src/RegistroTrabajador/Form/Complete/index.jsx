

import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const Complete = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {props.error?<Typography variant="h4">{props.error}</Typography>:
      <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}><Typography variant="h4" textAlign='center'>!Gracias por tu registro¡ <br/> <span>{props.nombre}</span></Typography>
      <img id="fotoPerfil" style={{width:'300px'}}></img>
      <Link to='/Arkitex/InicioTrabajador'>
      <Button variant='contained' sx={{color:'#fff',padding:'0.6rem 2rem'}}>Continuar</Button>
      </Link></div>}
      
    </Box>
  );
};

export default Complete;
