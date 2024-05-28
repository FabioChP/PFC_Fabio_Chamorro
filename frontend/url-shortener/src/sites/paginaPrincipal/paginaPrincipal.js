import "./paginaPrincipal.css";
import axios from "axios";
import React, { useEffect,useLayoutEffect,useState } from "react";

function PaginaPrincipal() {
    const [urlOg, setUrlOg] = useState("");
    const [urlNew, setUrlNew] = useState("");

    const onChangeUrl = (event) => {
        setUrlOg(event.target.value)
    }

    const Subir = (event) => {
        event.preventDefault();
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_0123456789';
        let result = '';
        for (let i = 0; i < 10; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setUrlNew(result)
        if (urlOg==""){
            alert("La url no puede estar vacía")
        } else {
            axios.post("http://localhost:8000/new_url", {"UrlOG":urlOg,"UrlNew":urlNew}
            ).then(response => {
                alert("Url creada con exito");
            }). catch(error => {
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