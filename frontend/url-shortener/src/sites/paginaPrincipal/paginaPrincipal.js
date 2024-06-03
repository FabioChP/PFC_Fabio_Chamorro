import "./paginaPrincipal.css";
import axios from "axios";
import React, { useEffect,useLayoutEffect,useState } from "react";

function PaginaPrincipal() {
    const [urlOg, setUrlOg] = useState("");
    const [urlNew, setUrlNew] = useState("");

    const headers = {
        'Authorization' : sessionStorage.getItem("AUTH_TOKEN")
    }
    
    const onChangeUrl = (event) => {
        setUrlOg(event.target.value)
    }

    const Subir = (event) => {
        event.preventDefault();
        if (urlOg==""){
            alert("La url no puede estar vacía")
        } else {
            console.log(sessionStorage.getItem("AUTH_TOKEN") )
            axios.post("http://localhost:8000/crear_url/", {"url":urlOg,},
        {headers:headers}).then(response => {
                console.log(response.data)
                alert("Url creada con exito");
            }). catch(error => {
                console.log(error)
                alert("Recurso no encontrado");
            });
        }

    }

    return <>
        <h1>URL SHORTENER</h1>
        <form>
            <input onChange={onChangeUrl} id="url" className="textInput" type="url" placeholder={"https://www.example.url/"}></input>
            <input onClick={Subir} type="submit" id="submit" value="Subir"/>
        </form>
        <h1>{urlNew}</h1>
    </>
}

export default PaginaPrincipal;