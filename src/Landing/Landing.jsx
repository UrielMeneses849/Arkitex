import Contacto from "./Contacto/Contacto"
import ContenidoPrincipal from "./ContenidoPrincipal/ContenidoPrincipal"
import Destacados from "./Destacados/Destacados"
import Navbar from "./Navbar/Navbar"
import RegistrateLanding from "./RegistrateYExplora/RegistrateLanding"
import AcercaDeNosotros from "./SobreNosotros/AcercaDeNosotros"
import Testimonios from "./Testimonios/Testimonios"

export default function Landing(){

return(
<>
    <Navbar />
    <ContenidoPrincipal />
    <RegistrateLanding/>
    <Testimonios/>
    <Destacados/>
    <AcercaDeNosotros/>
    <Contacto/>
</>
)}