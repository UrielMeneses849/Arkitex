import { useState } from "react";
import { TextField, Box } from "@mui/material";
import {validarEmail, validarPassword } from "../../RegistroTrabajador/Form/DatosUsuario/validaciones";
import {
    validarNombre,
    validarApellidos,
    validarTelefono,
  } from "../../RegistroTrabajador/Form/DatosPersonales/validaciones";



// eslint-disable-next-line react/prop-types
const CompletaInformacion = (props) => {
  const [email, setEmail] = useState({
    value: "",
    valid: null,
  });
  const [password, setPassword] = useState({ value: "", valid: null });
  const [name, setName] = useState({ value: "", valid: null });
  const [lastName, setLastName] = useState({ value: "", valid: null });
  const [phone, setPhone] = useState({ value: "", valid: null });

  return (
    <Box
      // component="form"
      // autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   if (email.valid && password.valid) {
      //     console.log("Siguiente formulario");
      //     console.log(email, password);
      //     updateStep(1);
      //   } else {
      //     console.log("No hacer nada");
      //   }
      // }}
    >

        {/* iNPUTS*/}

        <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        name="nombre"
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarNombre(value);
          setName({ value, valid });
          props.handleChangeUsuario(input);
        }}
        
        error={name.valid === false}
        helperText={
          name.valid === false &&
          "Ingresa al menos 2 caracteres y máximo 30 caracteres."
        }
      />
      <TextField
        label="Apellidos"
        name="apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarApellidos(value);
          setLastName({ value, valid });
          props.handleChangeUsuario(input);
        }}
        error={lastName.valid === false}
        helperText={
          lastName.valid === false &&
          "Ingresa al menos 2 caracteres y máximo 50 caracteres."
        }
      />
      <TextField
        label="Número telefónico"
        name="numero"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarTelefono(value);
          setPhone({ value, valid });
          props.handleChangeUsuario(input);
        }}
        error={phone.valid === false}
        helperText={
          phone.valid === false &&
          "Ingresa al menos 8 digitos y máximo 14 digitos."
        }
      />

        {/* iNPUTS */}

      <TextField
        label="Correo electrónico"
        name="correo"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={
          email.valid === false && "Ingresa un correo electrónico válido."
        }
        value={email.value}
        onChange={(input) => {
          const email = input.target.value;
          const valido = validarEmail(email);
          setEmail({ value: email, valid: valido });
          props.handleChangeUsuario(input);
        }}
      />
      <TextField
        label="Contraseña"
        name="password"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={
          password.valid === false &&
          "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20."
        }
        value={password.value}
        onChange={(input) => {
          const password = input.target.value;
          setPassword({ value: password, valid: validarPassword(password) });
          props.handleChangeUsuario(input);
        }}
      />
    </Box>
  );
};

export default CompletaInformacion;



