import { Box } from "@mui/material";
import img from '/assets/Frame 3.svg';
import redes from '/assets/Group 122.svg'
export default function Contacto() {
    return (
        <>
            <h2 style={{fontSize:'38px', margin:'2rem'}}>Contacto</h2>
            <Box backgroundColor='black' color='white' display='flex' flexDirection='column' justifyContent='space-around'
            height='200px' padding='3rem'>
                <Box display='flex' alignItems='center' gap='1rem'>
                    <img src={img}></img>
                    <p>Arkitex S.A de C.V</p>
                </Box>
                <Box margin='auto'>
                    <img src={redes}></img>
                </Box>
                <Box margin='auto'>
                    <p>arkitex@gmail.com   |   5587974638</p>
                </Box>
            </Box>
        </>
    )
}

