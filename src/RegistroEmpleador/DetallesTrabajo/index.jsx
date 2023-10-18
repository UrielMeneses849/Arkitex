import { useRef } from "react";
import '../../RegistroTrabajador/Form/Step/file.css';

export default function DetallesTrabajo(){
    const inputFileRef = useRef(null);
    const handleLabelClick = () => {
        inputFileRef.current.click();
      };
return(
<>
    <legend style={{ textAlign: 'center', fontSize: '15px', color: '#888', margin: '1rem auto' }}>Sube una foto del área de trabajo</legend>
    <div className="field-group" style={{ minHeight: '100px', borderRadius: '25px', margin: '0 3rem',display:'flex',alignItems:'center',justifyContent: "center", flexDirection: "column"  }}>
      <input ref={inputFileRef} type='file' className="file-field" id='file' onChange={console.log("xd")} />
      <label onClick={handleLabelClick} form="file" className="file-label border">
        <i className="fa fa-upload"></i>
        <span>Sube una foto del área de trabajo (opcional)</span>
      </label>
      <legend style={{  fontSize: '15px', color: '#888', margin: '1rem auto' }}>Agrega una descripcion con más detalle</legend>
      <input ref={inputFileRef} type='text' className="file-label2 border2" onChange={console.log("xd")} style={{backgroundColor: "transparent"
    , maxHeight: "150px"}}></input>
      
    </div>
    
  </>
)}