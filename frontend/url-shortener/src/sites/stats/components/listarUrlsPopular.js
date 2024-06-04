export default function ListarUrlsPopular(props) {


    function oldRouteOnClick() {
        window.location.href = props.url.urlOg
    }

    return <div className="stats-url-item">
        <p  className="stats-url-text"><a className="stats-url-link" href={"/redirect/"+props.url.url}>{props.url.url}</a></p>
        <p className="stats-url-text">{props.url.clicks} clicks</p>
    </div>
}