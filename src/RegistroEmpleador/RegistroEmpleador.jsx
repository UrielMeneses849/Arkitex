import { Box, Button, Grid, InputAdornment, Step, StepConnector, StepContent, StepLabel, Stepper, TextField, stepConnectorClasses, styled } from "@mui/material";
import * as React from 'react';
import frame from '/assets/Group 161.png';
import usuario from '/assets/Group 162.svg';
import localizacion from '/assets/Group 126.svg';
import lapiz from '/assets/Group 158.svg';
import img from '/assets/Group 157.svg';
import comprobacion from '/assets/comprobacion.svg';
import usuarioForm from '/assets/UsuarioForm.svg';
import Correo from '/assets/CorreoForm.svg';
import Telefono from '/assets/TelefonoForm.svg';
import Ubicacion from '/assets/ubicacion.svg';
import Lapiz2 from '/assets/lapiz2.svg';
import Img2 from '/assets/img2.svg';
{/*Personalizacion de conector del step*/ }
const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#FF9500',
        borderTopWidth: 3,
        borderRadius: 1,
        marginLeft: '13px',
        height: '60px'
    },
}));
{/*Iconos del step*/ }
const steps = [
    {
        label: <img src={usuario}></img>
    },
    {
        label: <img src={localizacion}></img>
    },
    {
        label: <img src={lapiz}></img>,
    },
    {
        label: <img src={img}></img>,
    },
];

const seleccionado = [
    {
        label: <img src={usuario}></img>
    },
    {
        label: <img src={Ubicacion}></img>
    },
    {
        label: <img src={Lapiz2}></img>
    },
    {
        label: <img src={Img2}></img>
    }
];
{/*Personalizacion de los iconos*/ }
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));
{/*Cambio de iconos al estar activos y al finalizar*/ }
function QontoStepIcon(props) {
    const { active, completed, index } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }}>
            {completed ? (
                <img src={comprobacion}></img>
            ) : (
                active ? (
                    seleccionado[index].label
                ) : (
                    steps[index].label
                )
            )}
        </QontoStepIconRoot>
    );
}

{/*Funciones para cambiar estado de los iconos*/ }
export default function RegistroEmpleador() {
    {/*Funcionalidad para el formulario*/ }
    const [formData, setFormData] = React.useState({
        nombres: '',
        apellidos: '',
        correo: '',
        telefono: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Llama a una función prop que pasa los datos del formulario
        history.push('/RegistroEmpleado2');
        
        
    };
    {/*Funcionalidad para los iconos*/ }
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <Box bgcolor={"#DEF1FF"} component={'main'} padding={'3rem 1rem'} height='100vh' sx={{ boxSizing: 'border-box' }}>
                <Grid container columns={2} height='100%' bgcolor='#F0F0F0'>
                    <Grid item xs={1} height='100%' width='50%'>
                        <img src={frame} alt='frame' style={{ maxHeight: '100%', minWidth: '100%' }}></img>
                    </Grid>
                    <Grid item component={'div'} xs={1} width='50%' height='100%' padding='1rem 0'
                        display='flex' flexDirection='column' justifyContent='center'>
                        <h1 style={{ textAlign: 'center', fontWeight: '500' }}>Ingresa tus datos personales</h1>
                        <Box margin='2rem' display='flex'>
                            {/*Definicion de Stepper*/}
                            <Stepper activeStep={activeStep} orientation="vertical" connector={<QontoConnector />}>
                                <Step >
                                    <StepLabel StepIconComponent={(stepProps) => (
                                        <QontoStepIcon {...stepProps} index="0" />
                                    )}>
                                    </StepLabel>
                                </Step>
                                <Step >
                                    <StepLabel StepIconComponent={(stepProps) => (
                                        <QontoStepIcon {...stepProps} index="1" />
                                    )}>
                                    </StepLabel>
                                </Step>
                                <Step >
                                    <StepLabel StepIconComponent={(stepProps) => (
                                        <QontoStepIcon {...stepProps} index="2" />
                                    )}>
                                    </StepLabel>
                                </Step>
                                <Step >
                                    <StepLabel StepIconComponent={(stepProps) => (
                                        <QontoStepIcon {...stepProps} index="3" />
                                    )}>
                                    </StepLabel>
                                </Step>
                            </Stepper>
                            {/*Formulario*/}
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                }}
                                width={'80%'}
                                noValidate
                                autoComplete="off"
                                display={"flex"}
                                flexDirection={"column"}
                                min-height={'100%'}
                                onSubmit={handleSubmit}
                            >
                                <Grid container columns={1} display='flex' sx={{ alignItems: 'space-between', height: '100%' }}>
                                    <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <TextField aria-label='#FF9500' id="nombreEmpleado" label="Nombre(s)" variant="standard" type='text'
                                            sx={{ width: '90%' }} name="nombres" onChange={handleChange} value={formData.nombres} InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img src={usuarioForm} style={{ width: '1.2rem', margin: '0.5rem 0' }}></img>
                                                    </InputAdornment>
                                                ),
                                            }} />
                                    </Grid>
                                    <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <TextField id="apellidosEmpleado" label="Apellidos" variant="standard" type='text'
                                            name="apellidos" onChange={handleChange} value={formData.apellidos}
                                            sx={{ width: '90%', color: 'red' }} InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img src={usuarioForm} style={{ width: '1.2rem', margin: '0.5rem 0' }}></img>
                                                    </InputAdornment>
                                                ),
                                            }} />
                                    </Grid>
                                    <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <TextField label="Correo" variant="standard" type='mail'
                                            name="correo" onChange={handleChange} value={formData.correo}
                                            sx={{ width: '90%', color: 'red' }} InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img src={Correo} style={{ width: '1.5rem', "&:hover": { backgroundColor: 'red' } }}></img>
                                                    </InputAdornment>
                                                ),
                                            }} />
                                    </Grid>
                                    <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <TextField label="Teléfono de contacto" variant="standard" type='tel'
                                            name="telefono" onChange={handleChange} value={formData.telefono}
                                            sx={{ width: '90%', color: 'red' }} InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img src={Telefono} style={{ width: '1.5rem', "&:hover": { backgroundColor: 'red' } }}></img>
                                                    </InputAdornment>
                                                ),
                                            }} />
                                    </Grid>
                                    {/*Botones para cambiar el estado del stepper*/}
                                    <Box display='flex' justifyContent='center'>
                                        <Button
                                            variant="contained"
                                            onClick={handleBack}
                                            sx={{ margin: 'auto', p: '0.5rem 3rem', color: '#fff', borderRadius: '20px' }}
                                        >Anterior</Button>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ margin: 'auto', p: '0.5rem 3rem', color: '#fff', borderRadius: '20px' }}
                                            type='submit'
                                        >Siguiente</Button>
                                    </Box>
                                </Grid>
                            </Box>
                            {/*Fin del Formulario*/}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}