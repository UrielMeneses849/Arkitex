import { useRef } from "react";
import { TextField, Button, Box, InputAdornment, Slider, FormControlLabel, Checkbox, Link, useMediaQuery } from "@mui/material";
import './file.css';
//Iconos
import usuarioForm from '/assets/UsuarioForm.svg';
import Correo from '/assets/CorreoForm.svg';
import Telefono from '/assets/TelefonoForm.svg';
import Alcaldia from '/assets/alcaldia.svg';
import Distancia from '/assets/distancia.svg';
import Password from '/assets/password.svg';
const Step = ({ data, step, pasos }) => {

  const { inputs, buttonText, verificacion ,onSubmit, previousStep } = data;
  // Manejo de input file
  const inputFileRef = useRef(null);
  // Función para abrir el input file cuando se haga clic en el label
  const handleLabelClick = () => {
    inputFileRef.current.click();
  };


  const isSmallScreen = useMediaQuery('(max-width: 600px)');
const sliderWidth = isSmallScreen ? '200px' : '350px';

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap:'1rem'
      }}
      onSubmit={(e) => onSubmit(e, step, pasos)}
    >
      {/* {inputs.map((input, i) => {
        const { label, type, value, valid, onChange, helperText, validator } =
          input;

        return (
          <TextField
            key={i}
            label={label}
            variant="standard"
            fullWidth
            margin="dense"
            type={type}
            error={valid === false}
            helperText={valid === false && helperText}
            value={value}
            onChange={(e) => onChange(e, i, step, validator, pasos)}
          />
        );
      })} */}
      {step === 0 ?
        (
          <>
            <legend style={{ textAlign: 'start', fontSize: '15px', color: '#888' }}>Agrega tus datos</legend>
            <TextField aria-label='#FF9500' id="nombreEmpleado" label="Nombre(s)" variant="standard" type='text'
              sx={{ width: '90%' }} name="nombres" InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={usuarioForm} style={{ width: '1.2rem', margin: '0.5rem 0' }}></img>
                  </InputAdornment>
                ),
              }}
              margin="dense" error={inputs[0].valid === false}
              helperText={inputs[0].valid === false && inputs[0].helperText} value={inputs[0].value}
              onChange={(e) => inputs[0].onChange(e, 0, step, inputs[0].validator, pasos)}
              />
            <TextField id="apellidosEmpleado" label="Apellidos" variant="standard" type='text'
              name="apellidos"
              sx={{ width: '90%', color: 'red' }} InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={usuarioForm} style={{ width: '1.2rem', margin: '0.5rem 0' }}></img>
                  </InputAdornment>
                ),
              }}
              margin="dense" error={inputs[1].valid === false}
              helperText={inputs[1].valid === false && inputs[1].helperText} value={inputs[1].value}
              onChange={(e) => inputs[1].onChange(e, 1, step, inputs[1].validator, pasos)}
              />
            <TextField label="Correo" variant="standard" type='mail'
              name="correo" id='correo'
              sx={{ width: '90%', color: 'red' }} InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Correo} style={{ width: '1.5rem', "&:hover": { backgroundColor: 'red' } }}></img>
                  </InputAdornment>
                ),
              }}
              margin="dense" error={inputs[2].valid === false}
              helperText={inputs[2].valid === false && inputs[2].helperText} value={inputs[2].value}
              onChange={(e) => inputs[2].onChange(e, 2, step, inputs[2].validator, pasos)}/>
            <TextField label="Teléfono de contacto" variant="standard" type='tel'
              name="telefono" id='telefono'
              sx={{ width: '90%', color: 'red' }} InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Telefono} style={{ width: '1.5rem', "&:hover": { backgroundColor: 'red' } }}></img>
                  </InputAdornment>
                ),
              }}
              margin="dense" error={inputs[3].valid === false}
              helperText={inputs[3].valid === false && inputs[3].helperText} value={inputs[3].value}
              onChange={(e) => inputs[3].onChange(e, 3, step, inputs[3].validator, pasos)}
              />
          </>
        ) :
        step === 1 ? (
          <>
            <legend style={{ textAlign: 'start', fontSize: '15px', color: '#888' }}>Agrega tus datos</legend>
            <TextField aria-label='#FF9500' id="alcaldia" label="C.P ó Municipio / Alcaldia" variant="standard" type='text'
              sx={{ width: '90%' }} name="nombres" InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Alcaldia} style={{ width: '1.5rem', margin: '0.5rem 0' }}></img>
                  </InputAdornment>
                ),
              }}
              margin="dense"
              value={inputs[0].value}
              onChange={(e) => inputs[0].onChange(e, 0, step, inputs[0].validator, pasos)}
              />
            <p>Distancia máxima a transladarte en KM</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <img src={Distancia} style={{ width: '30px' }}></img>
              <Slider
    id='distancia'
    defaultValue={50}
    aria-label="Default"
    valueLabelDisplay="auto"
    sx={{ minWidth: sliderWidth }}
    margin="dense"
    onChange={(e) => inputs[1].onChange(e, 1, step, inputs[1].validator, pasos)}
  />
            </div>
            <TextField aria-label='#FF9500' id="password" label="Contraseña" variant="standard" type='password'
              sx={{ width: '90%' }} name="password" InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Password} style={{ width: '1.5rem', margin: '0.5rem 0' }}></img>
                  </InputAdornment>
                ),
              }}
              margin="dense" error={inputs[2].valid === false}
              helperText={inputs[2].valid === false && inputs[2].helperText} value={inputs[2].value}
              onChange={(e) => inputs[2].onChange(e, 2, step, inputs[2].validator, pasos)}
              />
          </>
        ) :
          step === 2 ? (
            <>
              <legend style={{ textAlign: 'start', fontSize: '15px', color: '#888', margin: '0' }}>A que te dedicas (opcional)</legend>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Construcción</h2>
                <div style={{ display: 'flex'}}>
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[0].onChange(e, 0, step, inputs[0].validator, pasos)} name="Colado y Loza"/>} label="Colado y Loza" />
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[1].onChange(e, 1, step, inputs[1].validator, pasos)}  name="Tercer Piso"/>} label="Tercer Piso" />
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[2].onChange(e, 2, step, inputs[2].validator, pasos)} name="Construcción Cocina"/>} label="Construcción Cocina " />
                </div>
                <div style={{ display: 'flex' }}>
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[3].onChange(e, 3, step, inputs[3].validator, pasos)} name="Baño completo"/>} label="Baño completo" />
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[4].onChange(e, 4, step, inputs[4].validator, pasos)} name="Medio Baño"/>} label="Medio Baño" />
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[5].onChange(e, 5, step, inputs[5].validator, pasos)} name="Escaleras"/>} label="Escaleras" />
                </div>
                <div style={{ display: 'flex' }}>
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[6].onChange(e, 6, step, inputs[6].validator, pasos)} name="Colocación de azulejo"/>} label="Colocación de azulejo" />
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[7].onChange(e, 7, step, inputs[7].validator, pasos)} name="Patios"/>} label="Patios" />
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[8].onChange(e, 8, step, inputs[8].validator, pasos)} name="Bardas / paredes"/>} label="Bardas / paredes" />
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Remodelación</h2>
                <div style={{ display: 'flex' }}>
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[9].onChange(e, 9, step, inputs[9].validator, pasos)} name="Decoración"/>} label="Decoración"/>
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[10].onChange(e, 10, step, inputs[10].validator, pasos)} name="Baños"/>} label="Baños"/>
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[11].onChange(e, 11, step, inputs[11].validator, pasos)} name="Remodelación fachada"/>} label="Remodelación fachada"/>
                </div>
                <div style={{ display: 'flex' }}>
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[12].onChange(e, 12, step, inputs[12].validator, pasos)} name="Decoración pared"/>} label="Decoración pared"/>
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[13].onChange(e, 13, step, inputs[13].validator, pasos)} name="Remodelación de Patios"/>} label="Patios"/>
                  <FormControlLabel control={<Checkbox onChange={(e) => inputs[14].onChange(e, 14, step, inputs[14].validator, pasos)} name="Remodelación interior"/>} label="Remodelación interior"/>
                </div>
              </div>
            </>
          ) :
            (
              <>
                <legend style={{ textAlign: 'center', fontSize: '15px', color: '#888', marginTop: '1rem' }}>Completa tu información</legend>
                <div className="field-group" style={{ minHeight: '300px', borderRadius: '25px', margin: '0 3rem',display:'flex',alignItems:'center' }}>
                  <input ref={inputFileRef} type='file' className="file-field" id='file' accept='.jpg, .png' onChange={(e) => inputs[0].onChange(e, 0, step, inputs[0].validator, pasos)}></input>
                  <label onClick={handleLabelClick} form="file" className="file-label border">
                    <i className="fa fa-upload"></i>
                    <span>Sube una foto de perfil (opcional)</span>
                  </label>
                </div>
              </>
            )
      }
      <Box sx={{display:'flex',gap:'1rem'}}>
        <Button variant='outlined' onClick={(e) => previousStep(e,step)} sx={{display:step===0?'none':'flex'}}> Atras </Button>
        <Link to={step===3? '/Arkitex/InicioTrabajador':''}>
        <Button variant="contained" type="submit" sx={{color:'#fff',padding:'0.6rem 2rem'}} disabled={verificacion(step,data)}>
          {buttonText}
        </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Step;
