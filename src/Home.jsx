import Landing from "./Landing/Landing"
import Login from "./Login/Login";
import RegistroEmpleador from "./RegistroEmpleador/RegistroEmpleador";
import RegistroTrabajador from "./RegistroTrabajador/RegistroTrabajador";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function Home(){
return(
<Router>

    <Routes>

    <Route path='/' element={<Landing />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/RegistroEmpleador' element={<RegistroEmpleador />} />
    <Route path='/RegistroTrabajador' element={<RegistroTrabajador />} />

    </Routes>

</Router>
)}