import "./paginaPrincipal.css";
import axios from "axios";
import React, {useState} from "react";

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
                alert("Url creada con exito");
                setUrlNew("http://localhost:3000/redirect/"+response.data.new_url)
            }). catch(error => {
                alert("Necesitas tener la sesión iniciada");
            });
        }

    }

    return <>
        <div className="principal-area">
            <h1>URL SHORTENER</h1>
            <form>
                <input onChange={onChangeUrl} id="url" className="principal-textInput" type="url" placeholder={"https://www.example.url/"}></input>
                <input onClick={Subir} className="principal-button" type="submit" id="submit" value="Subir"/>
            </form>
            <div className="principal-divSalida">
                <h3>Tu nueva url es: <a href={urlNew}>{urlNew}</a></h3>
            </div>
        </div>
    </>
}

export default PaginaPrincipal;