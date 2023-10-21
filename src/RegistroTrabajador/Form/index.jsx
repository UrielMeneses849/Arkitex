import { useState } from "react";
import { Box, } from "@mui/material";
import { FormSpace } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";
import db from '../../Firebase/credenciales';
import back from '/assets/backsvg 1.svg';
import './index.css';
//Validaciones
import { validarDelegacion, validarEmail, validarPassword } from "./DatosUsuario/validaciones";
import {
  validarNombre,
  validarApellidos,
  validarTelefono,
} from "./DatosPersonales/validaciones";
import { addDoc, collection } from "@firebase/firestore";
import { Link } from "react-router-dom";
const Form = () => {
  const [construccion] = useState([]);
  const [remodelacion] = useState([]);
  const [step, setStep] = useState(0);
  const [datos] = useState([])
  const previousStep = (e,step) => {
    e.preventDefault();
    let newStep = step - 1;
    setStep(newStep);
  }
  const verificacion = (step, pasos) => {
    if (step === 0) {
      if (!validarNombre(pasos.inputs[0].value) || !validarApellidos(pasos.inputs[1].value) || !validarEmail(pasos.inputs[2].value) || !validarTelefono(pasos.inputs[3].value)) {
        return true
      } else {
        return false
      }
    } else if (step === 1) {
      if (!pasos.inputs[0].valid || !pasos.inputs[2].valid) {
        return true
      } else {
        return false
      }
    }
  };
  const onSubmit = (e, step, pasos) => {
    e.preventDefault();
    let newStep = step + 1;
    setStep(newStep);
    if (newStep === 4) {
      // Inicializa un array para almacenar los valores
      for (const pasoKey in pasos) {
        const paso = pasos[pasoKey];
        if (paso.inputs) {
          paso.inputs.forEach(input => {
            if (input.value !== false) {
              datos.push(input.value); // Agrega el valor al array
            }
          });
        }
      }
      const enviar = collection(db,'prueba2');
      const construct = construccion.join(', ');
      const remo = remodelacion.join(', ');
      console.log(construct);
      addDoc(enviar,{nombre:datos[0], apellidos:datos[1],correo:datos[2],telefono:datos[3],municipio:datos[4],
        distancia:datos[5],password:datos[6],construccion:construct,remodelacion:remo});
    }

  };


  const handleChange = (element, position, currentStep, validator, pasos) => {
    let value = true;
    let valid;

    if (currentStep === 2) {
      if (element.target.value) {
        value = element.target.name;
        if(position >= 9){
          remodelacion.push(value);
        }else{
          construccion.push(value);
        }
      }
    } else if (currentStep === 3) {
      if (element.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          value = e.target.result;
        };
        reader.readAsDataURL(element.target.files[0]);
      }
    } else {
      value = element.target.value;
      valid = validator(value);
    }
    const cp = { ...pasos };
    cp[currentStep].inputs[position].value = value;
    cp[currentStep].inputs[position].valid = valid;
    setPasos(cp);
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
      verificacion,
      onSubmit: onSubmit,
      previousStep: previousStep,
    },
    1: {
      inputs: [
        {
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un C.P ó Municipio / Alcaldia valido",
          validator: validarDelegacion,
        },
        {
          value: "50",
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
      verificacion,
      onSubmit,
      previousStep: previousStep,
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
      verificacion,
      onSubmit,
      previousStep: previousStep,
    },
    3: {
      inputs: [
        {
          value: false,
          valid: null,
          onChange: handleChange,
          validator: '',
        }
      ],
      buttonText: "Registrarse",
      verificacion,
      onSubmit,
      previousStep: previousStep,
    }
  });

  const updateStep = (step) => {
    setStep(step);
  };

  // eslint-disable-next-line no-unused-vars
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
      <Box display='flex' alignItems='center'>
      <Link to='/Login' sx={{ textAlign: 'start' }}>
            <img className="volver" src={back} style={{ width: '50px'}}></img>
          </Link>
        {step === 0 && <h1 style={{ textAlign: 'center', fontWeight: '700', fontSize: '25px', margin: '1rem 0' }}>Agrega tus Datos Personales</h1>}
        {step === 1 && <h1 style={{ textAlign: 'center', fontWeight: '700', fontSize: '25px', margin: '1rem 0' }}>Agrega tu Zona de Trabajo</h1>}
        {step === 2 && <h1 style={{ textAlign: 'center', fontWeight: '700', fontSize: '25px', margin: '1rem 0' }}>Selecciona tus Especialidades</h1>}
        {step === 3 && <h1 style={{ textAlign: 'center', fontWeight: '700', fontSize: '25px', margin: '1rem 0' }}>Sube una Foto Tuya</h1>}
      </Box>
        {step < 4 && <Stepper step={step} />}
        {/* {steps[step]} */}
        {step < 4 && pasos[step] && (
          <Step data={pasos[step]} step={step} pasos={pasos} />
        )}
        {step === 4 && <Complete nombre={datos[0]} />}
      </FormSpace>
    </Box>
  );
};

export default Form;
