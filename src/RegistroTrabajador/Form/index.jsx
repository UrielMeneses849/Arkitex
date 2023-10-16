import React, { useState, useEffect } from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//Validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";
import {
  validarNombre,
  validarApellidos,
  validarTelefono,
} from "./DatosPersonales/validaciones";
import { validarInput } from "./DatosEntrega/validaciones";

const Form = () => {
  const [step, setStep] = useState(0);

  const onSubmit = (e, step, pasos) => {
    e.preventDefault();
    let newStep = step + 1;
    setStep(newStep);
    if (newStep === 4) {
      console.log("Eviar datos al backend", pasos);
    }
  };

  const handleChange = (element, position, currentStep, validator, pasos) => {
    let value = true;
    let valid;
    if(currentStep === 2){
      if(element.target.value){
        value = element.target.name;
      }
    }else if(currentStep === 3){
      if(element.target.files[0]){
        const reader = new FileReader();
        reader.onload = (e) => {
          value = e.target.result;
        };
        reader.readAsDataURL(element.target.files[0]);
      }
    }else{
      value = element.target.value;
      valid= validator(value);
    }
    const cp = { ...pasos };
    cp[currentStep].inputs[position].value = value;
    cp[currentStep].inputs[position].valid = valid;
    setPasos(cp);
  };
  const [checkboxValues, setCheckboxValues] = useState({
    coladoLoza: false,
    tercerPiso: false,
    construccionCocina: false,
    banoCompleto: false,
    medioBano: false,
    escaleras: false,
    colocacionAzulejo: false,
    patios: false,
    bardasParedes: false,
  });
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues({
      ...checkboxValues,
      [name]: checked,
    });
  };
  const [pasos, setPasos] = useState({
    0: {
    inputs: [
      {
        value: "",
        valid: null,
        onChange: handleChange,
        helperText: "Ingresa un nombre valido.",
        validator: validarNombre,
      },
      {
        value: "",
        valid: null,
        onChange: handleChange,
        helperText:
          "Ingresa al menos 2 caracteres y máximo 50 caracteres.",
        validator: validarApellidos,
      },
      {
        value: "",
        valid: null,
        onChange: handleChange,
        helperText:
          "Ingresa un correo electronico valido.",
        validator: validarEmail,
      },
      {
        value: "",
        valid: null,
        onChange: handleChange,
        helperText: "Ingresa al menos 8 digitos y máximo 14 digitos.",
        validator: validarTelefono,
      },
    ],
    buttonText: "Siguiente",
    onSubmit,
  },
  1: {
    inputs: [
      {
        value: "",
        valid: null,
        onChange: handleChange,
        helperText: "Ingresa al menos 2 caracteres y máximo 30 caracteres.",
        validator: validarNombre,
      },
      {
        value: "",
        valid: null,
        onChange: handleChange,
        helperText: "Ingresa al menos 2 caracteres y máximo 50 caracteres.",
        validator: validarApellidos,
      },
      {
        value: "",
        valid: null,
        onChange: handleChange,
        helperText: "Ingresa una contraseña con longitud mayor a 8.",
        validator: validarPassword,
      },
    ],
    buttonText: "Siguiente",
    onSubmit,
  },
  2: {
    inputs: [
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: validarPassword,
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: validarPassword,
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: validarPassword,
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: validarPassword,
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      },
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      }
    ],
    buttonText: "Siguiente",
    onSubmit,
  },
  3:{
    inputs:[
      {
        value: false,
        valid: null,
        onChange: handleChange,
        validator: '',
      }
    ],
    buttonText: "Registrarse",
    onSubmit,
  }
});
  // useEffect(async () => {
  //   try {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const posts = await data.json();
  //     console.log(posts);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });

  //step = 0 --> <DatosUsuario />
  //step = 1 --> <DatosPersonales />
  //step = 2 --> <DatosEntrega />
  //step = 3 --> <Complete />

  const updateStep = (step) => {
    setStep(step);
  };

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />,
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <FormSpace>
        {step < 4 && <Stepper step={step} />}
        {/* {steps[step]} */}
        {step < 4 && pasos[step] && (
          <Step data={pasos[step]} step={step} pasos={pasos} />
        )}
        {step === 4 && <Complete />}
      </FormSpace>
    </Box>
  );
};

export default Form;
