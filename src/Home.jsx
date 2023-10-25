import { ThemeProvider } from "@emotion/react";
import Landing from "./Landing/Landing"
import Login from "./Login/Login";
import RegistroEmpleador from "./RegistroEmpleador/RegistroEmpleador";
import RegistroTrabajador from "./RegistroTrabajador/RegistroTrabajador";
import InicioTrabajador from "./InicioTrabajador/InicioTrabajador";
import PerfilTrabajador from "./PerfilTrabajador/PerfilTrabajador";
// Inicio con feed
import Inicio from "./Inicio"

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { createTheme } from "@mui/material";
import { PrivateRoute } from "./PrivateRoute";
// import RegistroEmpleador2 from "./RegistroEmpleador/RegistroEmpleador2";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9500',
            blanco: '#FFF'
        }
    }
});

const router = createHashRouter([
    {
        path: '/',
        element: <Landing />
    },
    {
        path: 'Login',
        element: <Login />
    },
    {
        path: 'Arkitex/RegistroEmpleador',
        element: <RegistroEmpleador />
    },
    {
        path: 'Arkitex/RegistroTrabajador',
        element: <RegistroTrabajador />
    },
    {
        path: 'Arkitex/InicioTrabajador',
        element:(<PrivateRoute>
            <InicioTrabajador />
            </PrivateRoute>)
    }
    ,
    {
        path: 'Inicio',
        element: <Inicio />
    },
    {
        path:'Arkitex/InicioTrabajador/PerfilTrabajador',
        element: (<PrivateRoute>
            <PerfilTrabajador/>
            </PrivateRoute>)
        
    }
])

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            {/* <Router>

                <Routes>

                    <Route path='/Arkitex' element={<Landing />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/RegistroEmpleador' element={<RegistroEmpleador />} />
                    <Route path='/RegistroTrabajador' element={<RegistroTrabajador />} />

                </Routes>

            </Router> */}

            <RouterProvider router={router} />
        </ThemeProvider>
    )
}