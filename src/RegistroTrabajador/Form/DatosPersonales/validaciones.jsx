export const validarNombre = (nombre) => {
  const length = nombre.length;
  return length > 1 && length < 30 ? true : false;
};

export const validarApellidos = (apellidos) => {
  const length = apellidos.length;
  return length > 1 && length < 50 ? true : false;
};

export const validarTelefono = (telefono) => {
    // Expresión regular para validar números de teléfono (acepta números de 8 a 14 dígitos)
    const telefonoRegex = /^\d{8,14}$/;

    if (telefonoRegex.test(telefono)) {
      return true;
    } else {
      return false;
    }
};
