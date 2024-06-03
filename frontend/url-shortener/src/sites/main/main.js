import { Link, Outlet } from "react-router-dom";
import "./main.css"
import { useEffect } from "react";

export default function Main() {

let user_link = "/user/" + sessionStorage.getItem("UNAME")
let perfil = <Link to="/login" className="headerLink">Iniciar sesión</Link>
let logout = <Link to="/register" className="headerLink">Registrarse</Link>

if (user_link != "/user/null") {
    perfil = <Link to={user_link} className="headerLink">{sessionStorage.getItem("UNAME")}</Link>
    logout = <Link to="/logout" className="headerLink">Cerrar Sesión</Link>
} else {
    perfil = <Link to="/login" className="headerLink">Iniciar sesión</Link>
    logout = <Link to="/register" className="headerLink">Registrarse</Link>
}

    return <>
        <header>
            <Link to="/" className="headerLink">URL SHORTENER</Link>
            <div className="headerLinkGroup">
                <Link to="/" className="headerLink">Inicio</Link>
                <Link to="/statistics" className="headerLink">Estadísticas</Link>
                {perfil}
                {logout}
            </div>
        </header>
        {<Outlet />}
        <footer>
            <Link to="/" className="headerLink">URL SHORTENER</Link>
        </footer>
    </>
}