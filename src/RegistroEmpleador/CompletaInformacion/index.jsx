import { useState } from "react";
import { TextField, Box } from "@mui/material";
import {validarEmail, validarPassword } from "../../RegistroTrabajador/Form/DatosUsuario/validaciones";
import {
    validarNombre,
    validarApellidos,
    validarTelefono,
  } from "../../RegistroTrabajador/Form/DatosPersonales/validaciones";



// eslint-disable-next-line react/prop-types
const CompletaInformacion = ({ updateStep }) => {
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
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (email.valid && password.valid) {
          console.log("Siguiente formulario");
          console.log(email, password);
          updateStep(1);
        } else {
          console.log("No hacer nada");
        }
      }}
    >

        {/* iNPUTS*/}

        <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarNombre(value);
          setName({ value, valid });
        }}
        error={name.valid === false}
        helperText={
          name.valid === false &&
          "Ingresa al menos 2 caracteres y máximo 30 caracteres."
        }
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarApellidos(value);
          setLastName({ value, valid });
        }}
        error={lastName.valid === false}
        helperText={
          lastName.valid === false &&
          "Ingresa al menos 2 caracteres y máximo 50 caracteres."
        }
      />
      <TextField
        label="Número telefónico"
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
        }}
      />
      <TextField
        label="Contraseña"
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
        }}
      />
      
    </Box>
  );
};

export default CompletaInformacion;



