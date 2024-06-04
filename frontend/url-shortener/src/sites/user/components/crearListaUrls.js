export default function CrearListaUrls(props) {
    let fecha = ((props.url.fcreacion).substring(0,10))

    function oldRouteOnClick() {
        window.location.href = props.url.old_route
    }

    return <tr className="user-url-item">
        <td  className="user-url-text"><a className="user-url-link" href={"/redirect/"+props.url.new_route}>{props.url.new_route}</a></td>
        <td className="user-url-text"><a className="user-url-link" onClick={oldRouteOnClick}>{props.url.old_route}</a></td>
        <td className="user-url-text">{props.url.clicks}</td>
        <td className="user-url-text">{fecha}</td>
    </tr>
}

