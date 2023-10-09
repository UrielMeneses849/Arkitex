import { Box, Grid } from "@mui/material";
import img from '/assets/obrero.svg'
export default function AcercaDeNosotros() {
    return (
        <Box padding='1rem 3rem' display='flex' gap='2rem' flexDirection='column'>
            <h2 style={{fontSize:'38px',marginTop:'1rem'}}>Acerca de nosotros</h2>
            <p style={{color:'#999999',fontWeight:'bold'}}>¿Qué es Arkitex?</p>
            <Grid container columns={2} display='flex' flexDirection={{xs:'column',md:'row'}}
            wrap="nowrap" gap='3rem'>
                <Grid item width={{md:'50%',xs:'auto'}}>
                    <img src={img} style={{width:'100%'}}></img>
                </Grid>
                <Grid item margin='auto' width={{md:'50%',xs:'auto'}}>
                    <p style={{fontSize:'24px'}}>&quot;En Arkitex estamos comprometidos con la creación de hogares sólidos, funcionales y hermosos. Desde nuestros modestos comienzos, nos hemos dedicado a brindar soluciones excepcionales en el ámbito de la construcción doméstica. Nuestro equipo de expertos altamente calificados y apasionados comparte una visión común: transformar tus sueños en una realidad tangible&quot;</p>
                </Grid>
            </Grid>
        </Box>
    )
}