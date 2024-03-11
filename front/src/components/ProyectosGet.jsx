import { useEffect,useState} from 'react';
import {getAllProyectos} from '../api/proyecto.api'



export function ProyectoGet(){
    const[proyectos,setProyecto] = useState([]);
    useEffect(()=>{
        async function loadProyectos(){
            const res = await getAllProyectos();
            setProyecto(res.data);
        }
        loadProyectos();
    },[]);
    return(    
    <>
    {proyectos.map(proyecto=>(
    <div className="card" key={proyecto.id}>
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
 
                <h1>{proyecto.titulo}</h1>
                <div className=' img-container'>  
                <img src={proyecto.imagen} alt="imagen de proyecto" />
                </div>
                <p>{proyecto.descripcion}</p> 
                <a href={proyecto.url} >ir al proyecto</a>
  
  </div>
</div>
    )

    )}


    </>)

}