import { Link, Outlet } from "react-router-dom";
import "./main.css"

function main() {

let user_link = "/user/" + sessionStorage.getItem("UNAME")
let perfil = <Link to="/login" className="headerLink">Iniciar sesión</Link>
if (user_link != "/user/") {
    perfil = <Link to={user_link} className="headerLink">{sessionStorage.getItem("UNAME")}</Link>
}
    
    return <>
        <header>
            <Link to="/" className="headerLink">URL SHORTENER</Link>
            <div className="headerLinkGroup">
                <Link to="/" className="headerLink">Inicio</Link>
                <Link to="/statistics" className="headerLink">Estadísticas</Link>
                {perfil}
            </div>
        </header>
        {<Outlet />}
        <footer>
            <Link to="/" className="headerLink">URL SHORTENER</Link>
        </footer>
    </>
}

export default main;