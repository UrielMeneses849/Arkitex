/* eslint-disable react/prop-types */

import { Box, Stepper, Step, StepLabel, styled, StepConnector, stepConnectorClasses } from "@mui/material";
import usuario from '/assets/Group 162.svg';
import localizacion from '/assets/Group 126.svg';
import lapiz from '/assets/Group 158.svg';
import img from '/assets/Group 157.svg';
import comprobacion from '/assets/comprobacion.svg';
// import usuarioForm from '/assets/UsuarioForm.svg';
// import Correo from '/assets/CorreoForm.svg';
// import Telefono from '/assets/TelefonoForm.svg';
import Ubicacion from '/assets/ubicacion.svg';
import Lapiz2 from '/assets/lapiz2.svg';
import Img2 from '/assets/img2.svg';
// import Alcaldia from '/assets/alcaldia.svg';
// import Distancia from '/assets/distancia.svg';
const QontoConnector = styled(StepConnector)(() => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#FF9500',
    borderTopWidth: 2,
    borderRadius: 1,
    // borderStyle: 'dotted',
    // borderBottom: 'none',
    // borderLeft: 'none',
    // borderRight: 'none',
    // backgroundSize: '10px 3x',
    // backgroundRepeat: 'repeat-x',
    // backgroundImage: 'linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%)'
  },
}));
{/*Iconos activos e inactivos*/ }
const img10 = [
  {
    label: <img src={usuario} style={{ width: '35px' }}></img>
  },
  {
    label: <img src={localizacion} style={{ width: '35px' }}></img>
  },
  {
    label: <img src={lapiz} style={{ width: '35px' }}></img>,
  },
  {
    label: <img src={img} style={{ width: '35px' }}></img>,
  },
];

const seleccionado = [
  {
    label: <img src={usuario} style={{ width: '35px' }}></img>
  },
  {
    label: <img src={Ubicacion} style={{ width: '35px' }}></img>
  },
  {
    label: <img src={Lapiz2} style={{ width: '35px' }}></img>
  },
  {
    label: <img src={Img2} style={{ width: '35px' }}></img>
  }
];

{/*Logica de los iconos*/ }
function QontoStepIcon(props) {
  const { active, completed, index } = props;

  return (
    <>
      {completed ? (
        <img src={comprobacion} style={{ width: '35px' }}></img>
      ) : (
        active ? (
          seleccionado[index].label
        ) : (
          img10[index].label
        )
      )}
    </>
  );
}
const StepperComponent = (props) => {
  const steps = ["1", "2", "3", "4"];

  return (
    <Box sx={{ width: "100%" }}>
    {/*Se activa step 0*/}
      <Stepper activeStep={props.step} connector={<QontoConnector/>}>
        {steps.map((step, index) => (
          <Step key={step}>
            <StepLabel StepIconComponent={(stepProps) => (
                      <QontoStepIcon {...stepProps} index={index} />
                    )}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
