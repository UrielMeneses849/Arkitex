

import { Box, Typography } from "@mui/material";



const Complete = (nombre) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">!Gracias por tu registro¡ <br/><br/> {nombre.nombre}</Typography>
    </Box>
  );
};

export default Complete;
