// import { Link } from 'react-router-dom'
import { Button } from "@mui/material"
import "./ContenidoPrincipal.css"
export default function ContenidoPrincipal() {
    return (
        <div className="contenidoPrincipal">

            <h1 className='indexH1' style={{ color: "#121212" }}>Prueba ARKITEX y...</h1>
            <p className='indexP1'>Encuentra ofertas laborales en obras</p>
            <p className='indexP2'>ó</p>
            <p className='indexP3' style={{ color: "#121212" }}>Inicia una remodelación para tu hogar</p>
            <p className='indexP4'>Arkitex, la plataforma diseñada para conectar empleador y trabajador para realizar una remodelación, por favor comparte tu trabajo aqui.</p>
            <div>
                <Button variant="contained" sx={{padding:'0.8rem 3rem',
                borderRadius:'25px', color:'#FFF'}}>
                Explora Nuestra Pagina Web
                </Button>
            </div>
        </div>
    )
}