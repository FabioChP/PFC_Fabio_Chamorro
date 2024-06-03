import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Logout() {
    
    const navigate = useNavigate();
    const headers = {
        'Authorization' : sessionStorage.getItem("AUTH_TOKEN")
    }
    const data = {}
    if (sessionStorage.getItem("AUTH_TOKEN") != null){
        axios.patch("http://localhost:8000/cerrar_sesion/",data,{headers:headers}).then((response) => {
            sessionStorage.removeItem("AUTH_TOKEN")
            sessionStorage.removeItem("UNAME")
            navigate("/");
            window.location.reload(false)
        })
    } else {
        navigate("/")
        alert("Debe haber una sesión iniciada para poder cerrar sesión")
    }


}