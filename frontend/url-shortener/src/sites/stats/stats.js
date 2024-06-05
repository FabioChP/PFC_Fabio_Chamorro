import { useEffect, useState } from "react";
import axios from "axios";
import "./stats.css";
import ListarUrlsNuevas from "./components/listarUrlsNuevas";
import ListarUrlsPopular from "./components/listarUrlsPopular";

function Stats() {

    const [populs, setPopuls] = useState([{"url":"Loading..."}]);
    const [news, setNews] = useState([{"url":"Loading...", "fecha":"00-00-0000A00:00:00B"}]);

    useEffect(() => {
        axios.get("http://localhost:8000/url_populares").then(((response) => {
            setPopuls(response.data)
        }))

        axios.get("http://localhost:8000/url_nuevas").then(((response) => {
            setNews(response.data)
        }))
    },[])

    return<>
        <h1>Estadisticas</h1>
        <div className="stats-div stats-div-new">
            <h2>Las más recientes</h2>
            {news.map((u) => {return <ListarUrlsNuevas url={u}/>} )}
        </div>
        <div className="stats-div stats-div-new">
            <h2>Las más populares</h2>
            {populs.map((u) => {return <ListarUrlsPopular url={u}/>} )}
        </div>
    </>

}

export default Stats;