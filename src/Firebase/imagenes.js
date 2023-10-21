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