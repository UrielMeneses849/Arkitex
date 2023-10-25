import { Typography } from "@mui/material";
import usuario from '/assets/usuario.svg';
export default function Complete(props){

return(
<>
<Typography variant="h4" sx={{marginTop: "190px", fontSize: "52px"}}>Gracias por tu registro! <br/><br/> {}</Typography>
<Typography variant="h4" sx={{marginTop: "190px", fontSize: "52px"}}>{props.nombre}<br/><br/> {}</Typography>

<img className="imgRegEmpleador" src={usuario} style={{width:'300px'}}></img>
</>
)}