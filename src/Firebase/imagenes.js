import app  from "./credenciales";
import { getDownloadURL, getStorage, ref, uploadBytes  } from "firebase/storage";
import { v4 } from "uuid";

const storage = getStorage(app);
export async function imagenUsuarios(file){
  const storageRef = ref(storage,'usuarios/'+v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}

export async function imagenPublicacionEmpleador(file){
  const storageRef = ref(storage,'PublicacionEmpleador/'+v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  await new Promise(resolve => setTimeout(resolve, 0));
  return url;
}
export async function imagenPublicacionTrabajador(file){
  const storageRef = ref(storage,'PublicacionTrabajador/'+v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  await new Promise(resolve => setTimeout(resolve, 0));
  return url;
}
