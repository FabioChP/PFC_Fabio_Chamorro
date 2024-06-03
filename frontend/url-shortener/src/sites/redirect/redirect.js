import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



export default function Redirect() {

    const [url, setUrl] = useState("");
    const params =useParams();

    axios.get("http://localhost:8000/redirect/"+params.url).then((response) => {
        setUrl(response.data.old_url);
        window.location.href = url
    }). catch((error) => {
        console.log(error)
    })

    return <>
    </>
}