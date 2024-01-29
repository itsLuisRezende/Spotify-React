import { } from "react"
import "./Sidebar.css"
import logoSpotify from "../assets/icons/logo-spotify.png"

function Sidebar () {

    
    return (
        <>
              <nav className="sidebar__navigation">

<div className="logo">
    <a href="">
        <img src= {logoSpotify} alt="Logo Spotify"/>
    </a>
</div>
    <ul>
        <li>
            <a href="">
                <span className="fa fa-home"></span>
                <span>Início</span>
            </a>
            </li>
        <li>
            <a href="">
                <span className="fa fa-search"></span>
                <span>Buscar</span>
            </a>
        </li>
    </ul>  
</nav>  
        </>
    )
}

export default Sidebar