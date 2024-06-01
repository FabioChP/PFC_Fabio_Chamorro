import { useEffect, useState } from "react"
import './user.css'
import user_image from './imgs/user_image.png'
import axios from "axios"
import { useParams } from "react-router-dom"

export default function User() {
    const params = useParams();
    const[name, setName] = useState("Generic");
    const[email, setEmail] = useState("email@generic.com");
    const[urls, setUrls] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/usuario/"+params.username).then((response) => {
            console.log(response)
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
        
    </>
}