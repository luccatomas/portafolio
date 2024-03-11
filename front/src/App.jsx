import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import {ProyectoPage} from "./pages/ProyectoPage"


function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Navigate to="/proyecto"/>} /> 
      <Route path='/proyecto' element={<ProyectoPage/>}/>
    </Routes>
    </BrowserRouter>

  )

}
export default App