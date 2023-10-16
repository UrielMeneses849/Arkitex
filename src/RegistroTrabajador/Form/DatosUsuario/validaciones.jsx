export const validarEmail = (email) => {
  // Expresión regular para validar direcciones de correo electrónico
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
};

export function validarPassword(password) {
  const length = password.length;
  if (length >= 8 && length < 20) {
    return true;
  } else {
    return false;
  }
}
