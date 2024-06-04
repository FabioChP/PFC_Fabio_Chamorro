export default function ListarUrlsNuevas(props) {

    let fecha = ((props.url.fecha).substring(0,10) + " " + (props.url.fecha).substring(11,19))

    function oldRouteOnClick() {
        window.location.href = props.url.urlOg
    }

    return <div className="stats-url-item">
        <p  className="stats-url-text"><a className="stats-url-link" href={"/redirect/"+props.url.url}>{props.url.url}</a></p>
        <p className="stats-url-text">{fecha}</p>
    </div>
}