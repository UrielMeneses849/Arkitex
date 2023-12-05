import { Box, Grid, Typography } from '@mui/material'
import stars from "/assets/Group 109.svg";
import stars2 from "/assets/Group 110.svg";
import calendario from "/assets/Vector.svg";
import './Testimonios.css';
function Testimonios() {
    return (
        <>
            {/*Testimonios*/}
            <Box width={'100%'} position={'relative'}>
                <Box bgcolor={'#D9D9D9'} padding={'3rem'} top={{ xs: '20rem', sm: '21rem'}}>
                    <Typography variant='h2' fontSize={'2.4rem'} fontWeight={'bold'} >
                        Testimonios
                    </Typography>
                    <Grid container columns={{ xs: 1, md: 2.5, sm: 2 }} marginTop={'1.5rem'} gap={'4rem'} flexWrap={'nowrap'}
                        flexDirection={{ xs: 'column', md: 'row' }} sx={{alignItems: "center"}}>
                        <Grid item xs={0.8} bgcolor={'#FAFAFA'} padding={'2rem'} boxShadow={"4px 7px 17px 0px rgba(0, 0, 0, 0.10), 16px 26px 31px 0px rgba(0, 0, 0, 0.09), 36px 59px 42px 0px rgba(0, 0, 0, 0.05), 64px 105px 49px 0px rgba(0, 0, 0, 0.01), 101px 164px 54px 0px rgba(0, 0, 0, 0.00);"} 
                            borderRadius={'5px'} height={'420px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} >
                            <Box >
                                <Typography variant='body1' fontWeight={'bold'} fontSize={'1.2rem'}>Luis Sánchez</Typography>
                                <img src={stars} className='estrellas'></img>
                            </Box>
                            <Typography variant='body2' fontSize={'1rem'} marginY={'3rem'}>
                                Estamos muy satisfechos con el servicio, excelente atención, nos sentimos satisfechos y seguros
                            </Typography>
                            <Box display={'flex'} gap={'1rem'}>
                                <img src={calendario} className='calendario'></img>
                                <Typography color={'#888888'}>Hace 1 mes</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={0.8} bgcolor={'#FAFAFA'} padding={'1rem'} boxShadow={"4px 7px 17px 0px rgba(0, 0, 0, 0.10), 16px 26px 31px 0px rgba(0, 0, 0, 0.09), 36px 59px 42px 0px rgba(0, 0, 0, 0.05), 64px 105px 49px 0px rgba(0, 0, 0, 0.01), 101px 164px 54px 0px rgba(0, 0, 0, 0.00)"}
                            borderRadius={'5px'} height={'420px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                            <Box>
                                <Typography variant='body1' fontWeight={'bold'} fontSize={'1.2rem'}>Manuel Sánchez</Typography>
                                <img src={stars2} className='estrellas'></img>
                            </Box>
                            <Typography variant='body2' fontSize={'1rem'} marginY={'3rem'}>
                                Buen trabajo atención personal desde la visita a sitio para evaluar acción a seguir, cotización y ejecución. Recomendable
                            </Typography>
                            <Box display={'flex'} gap={'1rem'}>
                                <img src={calendario} className='calendario'></img>
                                <Typography color={'#888888'}>Hace 2 semanas</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={0.8} bgcolor={'#FAFAFA'} padding={'1rem'} boxShadow={"4px 7px 17px 0px rgba(0, 0, 0, 0.10), 16px 26px 31px 0px rgba(0, 0, 0, 0.09), 36px 59px 42px 0px rgba(0, 0, 0, 0.05), 64px 105px 49px 0px rgba(0, 0, 0, 0.01), 101px 164px 54px 0px rgba(0, 0, 0, 0.00)"}
                            borderRadius={'5px'} height={'420px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                            <Box>
                                <Typography variant='body1' fontWeight={'bold'} fontSize={'1.2rem'}>Uriel Meneses</Typography>
                                <img src={stars} className='estrellas'></img>
                            </Box>
                            <Typography variant='body2' fontSize={'1rem'} marginY={'3rem'}>
                                Fueron atentos al realizar la cotizacion y seguimiento precios regulares pero decidimos trabajar con alguien de mayor confianza
                            </Typography>
                            <Box display={'flex'} gap={'1rem'}>
                                <img src={calendario} className='calendario'></img>
                                <Typography color={'#888888'}>Hace 1 semana</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Testimonios