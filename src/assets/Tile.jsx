function Tile(props){
    return(
        <div className="tile-wrapper">
            <div className="tile">
                <img src={props.imageUrl} className="tile-img"/>
                <img src="src/assets/images/location.svg" className="location-icon" />
                <small>{props.location}</small>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                <h1>{props.title}</h1>
                <b>{props.startDate} - {props.endDate}</b>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Tile