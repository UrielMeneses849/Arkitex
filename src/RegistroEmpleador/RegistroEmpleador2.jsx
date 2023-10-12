import  { useState } from 'react';
import RegistroEmpleador from './RegistroEmpleador';


function RegistroEmpleador2() {
const [datosDelFormulario, setDatosDelFormulario] = useState(null);

  const handleFormSubmit = (formData) => {
    setDatosDelFormulario(formData);
  };
  return (
    <div>
      <h1>Otro Archivo</h1>
      <RegistroEmpleador onSubmit={handleFormSubmit} />
      {datosDelFormulario && (
        <div>
          <h2>Datos del formulario:</h2>
          <pre>{JSON.stringify(datosDelFormulario, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default RegistroEmpleador2