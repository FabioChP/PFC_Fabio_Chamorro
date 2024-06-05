import { Link, Outlet } from "react-router-dom";
import "./main.css"
import { useEffect } from "react";
import logo from "./imgs/logo.png"

export default function Main() {

let user_link = "/user/" + sessionStorage.getItem("UNAME")
let perfil = <Link to="/login" className="headerLink">Iniciar sesión</Link>
let logout = <Link to="/register" className="headerLink">Registro</Link>

if (user_link != "/user/null") {
    perfil = <Link to={user_link} className="headerLink">{sessionStorage.getItem("UNAME")}</Link>
    logout = <Link to="/logout" className="headerLink">Cerrar Sesión</Link>
} else {
    perfil = <Link to="/login" className="headerLink">Iniciar sesión</Link>
    logout = <Link to="/register" className="headerLink">Registro</Link>
    logout = <Link to="/register" className="headerLink">Registrarse</Link>
}

    return <>
        <header>
            <Link to="/"><img src={logo} className="header-logo"/></Link>
            <div className="headerLinkGroup">
                <Link to="/" className="headerLink">Inicio</Link>
                <Link to="/statistics" className="headerLink">Estadísticas</Link>
                {perfil}
                {logout}
            </div>
        </header>
        {<Outlet />}
        <footer>
            <Link to="/" className="footerLink">URLCUTTER</Link>
            <p className="main-enlace-repo">
                Enlace al repositorio: <a className="main-enlace-repo" href="https://github.com/FabioChP/PFC_Fabio_Chamorro">https://github.com/FabioChP/PFC_Fabio_Chamorro</a>
            </p>
        </footer>
    </>
}