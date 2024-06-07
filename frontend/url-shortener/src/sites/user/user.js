import { useEffect, useState } from "react"
import './user.css'
import user_image from './imgs/user_image.png'
import axios from "axios"
import { useParams } from "react-router-dom"
import CrearListaUrls from "./components/crearListaUrls"

export default function User() {
    const params = useParams();
    const[name, setName] = useState("Loading...");
    const[email, setEmail] = useState("Loading...");
    const[urls, setUrls] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/usuario/"+params.username).then((response) => {
            setName(response.data.nombre);
            setEmail(response.data.email);
            setUrls(response.data.urls);
        })
    },[])


    return<>
        <div className="user-info">
            <img src={user_image}></img>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
        <table className="user-urls-box">
            <tr>
                    <th>Url Acortada</th>
                    <th>Url Original</th>
                    <th>Veces clicado</th>
                    <th>Fecha de creación</th>
            </tr>
                {urls.map((u) => {return <CrearListaUrls url={u}/>} )}
        </table>
    </>
}