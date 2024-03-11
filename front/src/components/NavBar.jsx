import {Link} from 'react-router-dom'

export function NavBar(){
    return(
        <>
            <nav>
                <div>
                    <h4>LUCCA.C</h4>
                </div>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#email">Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}