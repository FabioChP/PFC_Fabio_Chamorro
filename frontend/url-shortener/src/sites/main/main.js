import { Link, Outlet } from "react-router-dom";
import "./main.css"

function main() {
    return <>
        <header>
            <Link to="/" className="headerLink">URL SHORTENER</Link>
            <div className="headerLinkGroup">
                <Link to="/" className="headerLink">Home</Link>
                <Link to="/statistics" className="headerLink">Analytics</Link>
                <Link to="/user" className="headerLink">Profile</Link>
            </div>
        </header>
        {<Outlet />}
        <footer>
            <Link to="/" className="headerLink">URL SHORTENER</Link>
        </footer>
    </>
}

export default main;