/* eslint-disable react/prop-types */
import { Grid, Radio, RadioGroup } from "@mui/material";
import construccion from '/assets/Construccion.svg';
import remodelacion from '/assets/Remodelacion.svg';
// import { useState } from "react";

// fUNCION PRINCIPAL
export default function EscogerTrabajo(props){
// Variable para enviar al backend

return(



<RadioGroup row aria-label="ESCOGE" value={props.valorConstruccion} onChange={props.handleChangeConstruccion} padding='5rem' width={"50%"}>
<Grid container columns={2} >

    <Grid item xs={1} bgcolor='#F1C27B' display={"flex"} flexDirection={"column"} sx={{width: "50%", height: "75%"}}>
    <h3 style={{ margin: "30px auto", fontSize: "22px"}}>Construcción</h3>
    <img src={construccion} alt="Construccion" style={{width: "60%", margin: "0 auto", height:'8rem'}}/>
    <Radio value="Construcción" sx={{
    color: "#121212",
    '&.Mui-checked': {
      color: "#121212",
    },
  }}/>
    </Grid>

    <Grid item xs={1} bgcolor={'#F97B22'} display={"flex"} flexDirection={"column"} sx={{width: "50%", height: "75%"}}>
    <h3 style={{ margin: "30px auto", fontSize: "22px"}}>Remodelación</h3>
    <img src={remodelacion} alt="Remodelacion" style={{width: "60%", margin: "0 auto", height:'8rem'}}/>
    <Radio value="Remodelación"
  sx={{
    color: "#121212",
    '&.Mui-checked': {
      color: "#121212",
    },
    marginBottom:'5rem'
  }}
/>
    </Grid>

</Grid>
</RadioGroup>
)}

