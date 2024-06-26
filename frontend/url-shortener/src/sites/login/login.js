import { Link } from "react-router-dom";
import "./login.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import reload from "../main/main"

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function Publish(event) {
        event.preventDefault();
        if (email == "" || password == "") {
            alert("No puede haber campos en blanco");
        } else {
            axios.post("http://localhost:8000/iniciar_sesion/", {"email":email, "password":password})
            .then(response => {
                sessionStorage.setItem("AUTH_TOKEN", response.data.token)
                sessionStorage.setItem("UNAME", response.data.uname)
                console.log("Sesión iniciada")
                navigate("/")
                window.location.reload(false)
            })
            .catch(error => {
                console.error("Error al iniciar sesion:", error);
                if (error.response.status == 404) {
                    alert("No existe el usuario")
                } else if (error.response.status == 401) {
                    alert("Contraseña incorrecta")
                }
            })
        }

    }

    return <>
        <div className="login-caja">
            <h1>LOGIN</h1>
            <form className="login-form">
                <input onChange={onChangeEmail} className="login-textInput" type="email" placeholder="Email"></input>
                <input onChange={onChangePassword} className="login-textInput" type="password" placeholder="Contraseña"></input>
                <p className="login-formText">¿No tienes cuenta? Registrate <Link to="/register">aquí</Link>.</p>
                <input onClick={Publish} className="login-button" type="submit" value="Login" />
            </form>
        </div>
    </>

}

export default Login;