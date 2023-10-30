export function validarTitulo (titulo)  {
    const length = titulo.length;
    if(length === 0){
        return false;
    }
    return length > 7 && length < 30 ? false : true;
}
export function validarDescripcion(desc){
    const length = desc.length;
    if(length === 0){
        return false;
    }
    return length > 15 ? false : true;
}
export function validarFoto(foto){
    return foto ? false : true;
}
export function validarPresupuestoMin(presupuesto){
    const length = presupuesto.length;
    if(length === 0){
        return false;
    }
    return length >= 3 && length <=7? false:true;
}
export function validarPresupuestoMax(presupuesto){
    const length = presupuesto.length;
    if(length === 0){
        return false;
    }
    return length >= 3 && length <=7? false:true;
}

