/* eslint-disable react/prop-types */
import { Checkbox, FormControlLabel } from "@mui/material";

export default function AreaTrabajo(props){
return(
<>
<form style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', padding: '2rem 3rem 1rem', alignItems: 'center' }}>
        
        {props.valorConstruccion === 'Remodelacion' && <div>
          <h2 style={{ fontSize: '27px', fontWeight: 'bold', margin: "10px auto 30px" }}>Construcción</h2>
          <div style={{ display: 'flex' }}>
            <FormControlLabel control={<Checkbox />} label="Colado y Loza" />
            <FormControlLabel control={<Checkbox />} label="Tercer Piso" />
            <FormControlLabel control={<Checkbox />} label="Construcción Cocina " />
          </div>
          <div style={{ display: 'flex' }}>
            <FormControlLabel control={<Checkbox />} label="Baño completo" />
            <FormControlLabel control={<Checkbox />} label="Medio Baño" />
            <FormControlLabel control={<Checkbox />} label="Escaleras" />
          </div>
          <div style={{ display: 'flex' }}>
            <FormControlLabel control={<Checkbox />} label="Colocación de azulejo" />
            <FormControlLabel control={<Checkbox />} label="Patios" />
            <FormControlLabel control={<Checkbox />} label="Bardas / paredes" />
          </div>
        </div> }
        {props.valorConstruccion === 'Construccion' && <div>
          <h2 style={{ fontSize: '27px', fontWeight: 'bold', margin: "10px auto 30px"  }}>Remodelación</h2>
          <div style={{ display: 'flex' }}>
            <FormControlLabel control={<Checkbox />} label="Decoración" />
            <FormControlLabel control={<Checkbox />} label="Baños" />
            <FormControlLabel control={<Checkbox />} label="Remodelación fachada" />
          </div>
          <div style={{ display: 'flex' }}>
            <FormControlLabel control={<Checkbox />} label="Decoración pared" />
            <FormControlLabel control={<Checkbox />} label="Patios" />
            <FormControlLabel control={<Checkbox />} label="Remodelación interior" />
          </div>
        </div>}
      </form>
</>
)}