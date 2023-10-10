import { Box, Grid } from "@mui/material";
import casa1 from '/assets/b8654ad275ea5cb4a1bcc29c29ed3c07 1.svg';
import casa2 from '/assets/Group 113.svg';
import casa3 from '/assets/47e522d3cf824098d853b1deddc2516f 1.svg'
import './Destacados.css';
export default function Destacados() {
    return (
        <>
            <Box padding='2rem 3rem 0rem 3rem' sx={{backgroundColor:'#EEEEEE'}}>
                <h2 style={{fontSize:'38px'}}>Destascados</h2>
                <p style={{color:'#999999',fontWeight:'bold'}}>Conoce los trabajos populares realizados gracias a Arkitex</p>
            </Box>
            <Grid container columns={{xs:1,md:3}} display='flex' gap='2rem' padding='3rem 3rem 5rem 3rem' wrap="nowrap"
            sx={{backgroundColor:'#EEEEEE', flexDirection:{xs:'column',md:'row'}}}>
                <Grid item xs={1} boxShadow={"4px 7px 17px 0px rgba(0, 0, 0, 0.10), 16px 26px 31px 0px rgba(0, 0, 0, 0.09), 36px 59px 42px 0px rgba(0, 0, 0, 0.05), 64px 105px 49px 0px rgba(0, 0, 0, 0.01), 101px 164px 54px 0px rgba(0, 0, 0, 0.00)"} borderRadius='10px'>
                    <img src={casa1} style={{width:'100%'}}></img>
                    <Box height='130px'></Box>
                </Grid>
                <Grid item xs={1} boxShadow={"4px 7px 17px 0px rgba(0, 0, 0, 0.10), 16px 26px 31px 0px rgba(0, 0, 0, 0.09), 36px 59px 42px 0px rgba(0, 0, 0, 0.05), 64px 105px 49px 0px rgba(0, 0, 0, 0.01), 101px 164px 54px 0px rgba(0, 0, 0, 0.00)"} borderRadius='10px' className="tarjeta">
                    <img src={casa2} style={{width:'100%'}}></img>
                    <Box height='130px'></Box>
                </Grid>
                <Grid item xs={1} boxShadow={"4px 7px 17px 0px rgba(0, 0, 0, 0.10), 16px 26px 31px 0px rgba(0, 0, 0, 0.09), 36px 59px 42px 0px rgba(0, 0, 0, 0.05), 64px 105px 49px 0px rgba(0, 0, 0, 0.01), 101px 164px 54px 0px rgba(0, 0, 0, 0.00)"} borderRadius='10px'>
                    <img src={casa3} style={{width:'100%'}}></img>
                    <Box height='130px'></Box>
                </Grid>
            </Grid>
        </>
    )
}
