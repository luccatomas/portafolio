import axios from 'axios'

export const getAllProyectos = ()=>{
    return axios.get("http://localhost:8000/proyectos/api/v1/proyecto/")
}