import { Link } from "react-router-dom";
import "./login.css"
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function Publish(event) {

    }

    return <>
        <h1>LOGIN</h1>
        <form className="login-form">
            <input onChange={onChangeEmail} className="login-textInput" type="email" placeholder="Email"></input>
            <input onChange={onChangePassword} className="login-textInput" type="password" placeholder="Contraseña"></input>
            <p className="login-formText">¿No tienes cuenta? Registrate <Link to="/register">aquí</Link>.</p>
            <input onClick={Publish} className="login-button" type="submit" value="Login" />
        </form>
    </>

}

export default Login;