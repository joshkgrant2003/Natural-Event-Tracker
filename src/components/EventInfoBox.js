

function EventInfoBox({ info }) {
    const date = new Date(info.date).toLocaleDateString();
    const [longitude, lattitude] = info.coordinates;
    const coordinates = `${parseFloat(longitude).toFixed(2)},  ${parseFloat(lattitude).toFixed(2)}`;

    return (
        <div className="event-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>Title: <strong>{ info.title }</strong></li>
                <li>Date: <strong>{ date }</strong></li>
                <li>Coordinates: <strong>{ coordinates }</strong></li>
            </ul>
        </div>
    );
};

export default EventInfoBox;