import './Entry.css'

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img src={props.obj.img.src} className="main-image" alt={props.obj.img.alt} />
            </div>

            <div id="main-content">
                <div id="location-line">
                    <div id="location-line-place">
                        <img src="/src/assets/pin.svg" id="pin" />
                        <p>{props.obj.country}</p>
                    </div>
                    <a href={props.obj.googleMapsLink} target="_blank">View on Google Maps</a>
                </div>

                <h1 id="title-main">{props.obj.title}</h1>
                <p id="date">{props.obj.dates}</p>
                <p id="description">{props.obj.text}</p>
            </div>
        </article>
    );
}
