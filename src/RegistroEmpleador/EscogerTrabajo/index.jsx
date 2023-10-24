/* eslint-disable react/prop-types */
import { Grid, Radio, RadioGroup } from "@mui/material";
import construccion from '/assets/Construccion.svg';
import remodelacion from '/assets/Remodelacion.svg';
// import { useState } from "react";

// fUNCION PRINCIPAL
export default function EscogerTrabajo(props){
// Variable para enviar al backend

return(



<RadioGroup row aria-label="ESCOGE" value={props.valorConstruccion} onChange={props.handleChangeConstruccion} width={"100%"}>
<Grid container columns={2} bgcolor='#552525' >

    <Grid item xs={1} bgcolor='#F1C27B' display={"flex"} flexDirection={"column"} sx={{width: "50%", height: "100%"}}>
    <h3 style={{ margin: "30px auto", fontSize: "22px"}}>Construcción</h3>
    <img src={construccion} alt="Construccion" style={{width: "60%", margin: "30px auto"}}/>
    <Radio value="Construcción" sx={{
    color: "#121212",
    '&.Mui-checked': {
      color: "#121212",
    },
  }}/>
    </Grid>

    <Grid item xs={1} bgcolor={'#F97B22'} display={"flex"} flexDirection={"column"} sx={{width: "50%", height: "100%"}}>
    <h3 style={{ margin: "30px auto", fontSize: "22px"}}>Remodelación</h3>
    <img src={remodelacion} alt="Remodelacion" style={{width: "60%", margin: "30px auto"}}/>
    <Radio value="Remodelación"
  sx={{
    color: "#121212",
    '&.Mui-checked': {
      color: "#121212",
    },
  }}
/>
    </Grid>

</Grid>
</RadioGroup>
)}

