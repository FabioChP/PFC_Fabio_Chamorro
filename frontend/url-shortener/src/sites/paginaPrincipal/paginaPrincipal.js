import "./paginaPrincipal.css";
import axios from "axios";
import React, {useState} from "react";

function PaginaPrincipal() {
    const [urlOg, setUrlOg] = useState("");
    const [urlNew, setUrlNew] = useState(" ");

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
            axios.post("http://localhost:8000/crear_url/", {"url":urlOg,},
        {headers:headers}).then(response => {
                alert("Url creada con exito");
                setUrlNew("http://localhost:3000/redirect/"+response.data.new_url)
            }). catch(error => {
                if (error.response.status == 500) {
                    alert("Necesitas tener la sesión iniciada");
                } else if (error.response.status == 400) {
                    alert("La url ya existe en la base de datos")
                    // axios.get("http://localhost:8000/url_por_url/"+urlOg).then((response) => {
                    //     setUrlNew(response.data.new_url)
                    // }).catch((error)=>{console.log(error)})
                } else {
                    alert("Ha ocurrido un error inesperado")
                }
                
            });
        }

    }

    return <>
        <div className="principal-area">
            <div className="principal-caja">
                <h1>URL SHORTENER</h1>
                <form>
                    <input onChange={onChangeUrl} id="url" className="principal-textInput" type="url" placeholder={"https://www.example.url/"}></input>
                    <input onClick={Subir} className="principal-button" type="submit" id="submit" value="Subir"/>
                </form>
            </div>
            <div className="principal-caja">
                <div className="principal-divSalida">
                    <h3>Tu nueva url es: </h3>
                    <h2>&shy;<a href={urlNew}>{urlNew}</a></h2>
                </div>
            </div>
        </div>
    </>
}

export default PaginaPrincipal;