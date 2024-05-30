import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./registro.css"
import axios from "axios";

function Registro() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    function onChangeUsername(event) {
        setUsername(event.target.value);
    }

    function onChangeEmail(event) {
        setEmail(event.target.value);
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    function onChangePassswordRepeat(event) {
        setPasswordRepeat(event.target.value);
    }

    function Publish(event) {
        event.preventDefault();

        if(username == "" || email == "" || password == "" || passwordRepeat == "") {
            alert("No se permiten campos en blanco");
        } else {
            axios.post("http://localhost:8000/crear_user/", {"username":username, "email":email, "password":password})
            .then(response => {
                alert("El usuario:"+ username + " fue creado correctamente.")
                navigate('/user/'+username)
            }).catch(error => {
                alert('El usuario no ha podido ser creado')
            })
        }
    }

    return<>
        <div className="registro-caja">
            <h1>REGISTRARSE</h1>
            <form className="registro-form">
                <input onChange={onChangeUsername} className="registro-textInput" type="text" placeholder="Nombre Usuario"></input>
                <input onChange={onChangeEmail} className="registro-textInput" type="email" placeholder="Email"></input>
                <input onChange={onChangePassword} className="registro-textInput" type="password" placeholder="Contraseña"></input>
                <input onChange={onChangePassswordRepeat} className="registro-textInput" type="password" placeholder="Repetir Contraseña"></input>
                <p className="registro-formText">¿Ya tienes cuenta? Inicia sesión <Link to="/login">aquí</Link>.</p>
                <input onClick={Publish} className="registro-button" type="submit" value="Register" />
            </form>
        </div>
    </>

}

export default Registro;