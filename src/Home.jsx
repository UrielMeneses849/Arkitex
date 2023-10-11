import { ThemeProvider } from "@emotion/react";
import Landing from "./Landing/Landing"
import Login from "./Login/Login";
import RegistroEmpleador from "./RegistroEmpleador/RegistroEmpleador";
import RegistroTrabajador from "./RegistroTrabajador/RegistroTrabajador";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme } from "@mui/material";

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

                    <Route path='/Arkitex' element={<Landing />} />
                    <Route path='/Arkitex/Login' element={<Login />} />
                    <Route path='/Arkitex/RegistroEmpleador' element={<RegistroEmpleador />} />
                    <Route path='/Arkitex/RegistroTrabajador' element={<RegistroTrabajador />} />

                </Routes>

            </Router>
        </ThemeProvider>
    )
}