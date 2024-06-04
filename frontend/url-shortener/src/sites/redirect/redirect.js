import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./redirect.css"



export default function Redirect() {

    const[url, setUrl] = useState("")
    const params =useParams();

    function onClickRedirect() {
        axios.get("http://localhost:8000/redirect/"+params.url).then((response) => {
            window.location.href = response.data.old_url
            setUrl(response.data.old_url)
        }). catch((error) => {
            console.log(error)
        })
    }


    return <>
        <h2 className="redirect-title">Redirigiendo...</h2>

       <button className="redirect-button" onClick={onClickRedirect}> <h1>Ir a la página</h1></button>
       
       <p className="redirect-legal-text">Urlcutter no se hace responsable de la página en la que acabe, por favor navegue con cuidado</p>
    </>
}