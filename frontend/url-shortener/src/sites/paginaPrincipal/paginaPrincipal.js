import "./paginaPrincipal.css";
import axios from "axios";
import React, { useEffect,useState } from "react";

function paginaPrincipal() {
    const [urlOg, setUrlOg] = useState("");
    const [urlNew, setUrlNew] = useState("");





    function subir() {
        setUrlNew()


        useEffect(() => {
            axios.post()
        })
    }

    return <>
        <h1>URL SHORTENER</h1>
        <form>
            <input id="url" className="textInput" type="url" placeholder="https://www.example.url/"></input>
            <button onClick={subir} id="submit">Subir</button>
        </form>
    </>
}

export default paginaPrincipal;