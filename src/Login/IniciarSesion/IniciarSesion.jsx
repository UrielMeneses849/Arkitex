import { Box, Button, Grid, TextField } from "@mui/material";
import './IniciarSesion.css';
//Firebase
import app from "../../Firebase/credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { validarEmail } from "../../RegistroTrabajador/Form/DatosUsuario/validaciones";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default function IniciarSesion() {
    const db = getFirestore(app);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [error, setError] = useState('');
    const handleEmailChange = (e) => {
        if (validarEmail(e.target.value)) {
            setEmail(e.target.value);
            setErrorEmail(false);
        } else {
            setErrorEmail(true);
        }
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const validarCredenciales = (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user.uid)
                const docRef = collection(db, "prueba3");
                const q = query(docRef, where('id', '==', userCredential.user.uid)); // Reemplaza 'campo_uid' con el nombre real del campo que contiene el UID
                // Utiliza async/await
                getDocs(q)
                    .then((querySnapshot) => {
                        if (!querySnapshot.empty) {
                            // Encontraste documentos que coinciden con el UID
                            querySnapshot.forEach((doc) => {
                                console.log(doc.data().rol);
                                if (doc.data().rol === 'trabajador') {
                                    setTimeout(() => {
                                        navigate('/Arkitex/InicioTrabajador', {
                                            state: { id: userCredential.user.uid, logged: true }
                                        });
                                    },);
                                } else if(doc.data().rol === 'empleador') {
                                    setTimeout(() => {
                                        navigate('/Arkitex/InicioEmpleador', {
                                            state: { id: userCredential.user.uid, logged: true }
                                        });
                                    },);
                                }
                            });
                        }
                    });

            })
            .catch(() => {
                setError('Credenciales incorrectas. Por favor, intenta denuevo');
            });
    }
    return (
        <Grid item xs={1} height='100%'>
            <Grid boxShadow={"0px 31px 68px 0px rgba(0, 0, 0, 0.10), 0px 124px 124px 0px rgba(0, 0, 0, 0.09), 0px 279px 167px 0px rgba(0, 0, 0, 0.05), 0px 496px 198px 0px rgba(0, 0, 0, 0.01), 0px 774px 217px 0px rgba(0, 0, 0, 0.00)"} borderRadius={"50px"} display={"flex"}
                justifyContent={"center"} alignItems={"center"} flexDirection={"column"} p={3}
                height='100%'>
                <div className="login">
                    <h2 className="login__h2" style={{ color: '#FF9500' }}>Bienvenido a Arkitex</h2>
                    <h3 className="login__h3">Iniciar Sesion</h3>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1 },
                            width: '100%'
                        }}
                        noValidate
                        autoComplete="off"
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={'center'}
                        onSubmit={validarCredenciales}
                    >
                        <TextField onChange={handleEmailChange} helperText={errorEmail ? 'Email Invalido' : ''}
                            error={errorEmail ? true : false} sx={{ width: { md: '300px' } }} aria-label='#FF9500' id="correo"
                            label="Correo" variant="outlined" type='text'
                        />
                        <TextField onChange={handlePasswordChange} sx={{ width: { md: '300px' } }} id="password" label="Contraseña" variant="outlined" type='password' />
                        <Button type="submit" variant="contained" sx={{ borderRadius: '30px', padding: '1rem 3rem', color: '#fff' }}>Iniciar Sesión</Button>
                        {error ? <p style={{ color: '#D40505', fontWeight: '500', margin: '0' }}>{error}</p> : <></>}
                    </Box>
                    <hr className="hr" />
                    <p className="soloDarUnVistazo">¿Solo quieres dar un vistazo?</p>
                    <Button variant="contained" sx={{ borderRadius: '30px', padding: '1rem 3rem', color: '#fff' }}>Visitar Sitio</Button>
                </div>
            </Grid>
        </Grid>
    )
}
