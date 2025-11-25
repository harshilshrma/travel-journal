import './Entry.css'

export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img src="/src/assets/japan.png" className="main-image" alt="japan" />
            </div>

            <div id="main-content">
                <div id="location-line">
                    <div id="location-line-place">
                        <img src="/src/assets/pin.svg" id="pin"/>
                        <p>JAPAN</p>
                    </div>
                    <a>View on Google Maps</a>
                </div>

                <h1 id="title-main">Mount Fuji</h1>
                <p id="date">12 Jan, 2023 - 24 Jan, 2023</p>
                <p id="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    );
}
