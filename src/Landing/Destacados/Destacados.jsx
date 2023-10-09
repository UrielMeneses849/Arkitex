import { Box, Grid } from "@mui/material";
import casa1 from '/assets/b8654ad275ea5cb4a1bcc29c29ed3c07 1.svg';
import casa2 from '/assets/Group 113.svg';
import casa3 from '/assets/47e522d3cf824098d853b1deddc2516f 1.svg'
export default function Destacados() {
    return (
        <>
            <Box padding='2rem 3rem 0rem 3rem' sx={{backgroundColor:'#EEEEEE'}}>
                <h2 style={{fontSize:'38px'}}>Destascados</h2>
                <p style={{color:'#999999',fontWeight:'bold'}}>Conoce los trabajos populares realizados gracias a Arkitex</p>
            </Box>
            <Grid container columns={{xs:1,md:3}} display='flex' gap='2rem' padding='3rem 3rem 5rem 3rem' wrap="nowrap"
            sx={{backgroundColor:'#EEEEEE', flexDirection:{xs:'column',md:'row'}}}>
                <Grid item xs={1} boxShadow={"5px 3px 5px 7px #00000040"} borderRadius='10px'>
                    <img src={casa1} style={{width:'100%'}}></img>
                    <Box height='130px'></Box>
                </Grid>
                <Grid item xs={1} boxShadow={"5px 3px 5px 7px #00000040"} borderRadius='10px'>
                    <img src={casa2} style={{width:'100%'}}></img>
                    <Box height='130px'></Box>
                </Grid>
                <Grid item xs={1} boxShadow={"5px 3px 5px 7px #00000040"} borderRadius='10px'>
                    <img src={casa3} style={{width:'100%'}}></img>
                    <Box height='130px'></Box>
                </Grid>
            </Grid>
        </>
    )
}