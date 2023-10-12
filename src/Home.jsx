import { ThemeProvider } from "@emotion/react";
import Landing from "./Landing/Landing"
import Login from "./Login/Login";
import RegistroEmpleador from "./RegistroEmpleador/RegistroEmpleador";
import RegistroTrabajador from "./RegistroTrabajador/RegistroTrabajador";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme } from "@mui/material";
import RegistroEmpleador2 from "./RegistroEmpleador/RegistroEmpleador2";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9500',
            blanco: '#FFF'
        }
    }
});

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Router>

                <Routes>

                    <Route path='/' element={<Landing />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/RegistroEmpleador' element={<RegistroEmpleador />} />
                    <Route path='/RegistroTrabajador' element={<RegistroEmpleador2 />} />
                    <Route path='/RegistroTrabajador' element={<RegistroTrabajador />} />

                </Routes>

            </Router>
        </ThemeProvider>
    )
}