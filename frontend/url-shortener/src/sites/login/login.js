import { Link } from "react-router-dom";
import "./login.css"

function Login() {

    function a() {

    }

    return <>
        <h1>LOGIN</h1>
        <form className="login-form">
            <input onChange={a} className="login-textInput" type="email" placeholder="Email"></input>
            <input onChange={a} className="login-textInput" type="password" placeholder="Contraseña"></input>
            <p className="login-formText">¿No tienes cuenta? Registrate <Link to="/register">aquí</Link>.</p>
            <input onClick={a} className="login-button" type="submit" value="Login" />
        </form>
    </>

}

export default Login;