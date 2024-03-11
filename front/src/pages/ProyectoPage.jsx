import {ProyectoGet } from '../components/ProyectosGet'
import {NavBar} from '../components/NavBar'
import {Contacto} from '../components/contactarme'
import {Presentacion} from '../components/prersentacion'


export function ProyectoPage(){
    return( <>
        <header>
        <NavBar/>
        </header>
        <main>
        <article className='article-presentacion'>
            <Presentacion/>
        </article>
        <section>        

            <ProyectoGet/>
        
        </section>

        </main>
        <footer >
        <Contacto/>
        </footer>
    


    </>
   )
}