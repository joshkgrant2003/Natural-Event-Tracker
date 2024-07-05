import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import EventMarker from './EventMarker';
import EventInfoBox from './EventInfoBox';

const WILDFIRE_ID = 8;
const VOLCANO_ID = 12;
const ICEBERG_ID = 15;

function Map({ eventData, center, zoom }) {
    const [eventInfo, setEventInfo] = useState(null);

    const markers = eventData.map(e => {
        const type = e.categories[0].id === WILDFIRE_ID ? 'wildfire'
                   : e.categories[0].id === VOLCANO_ID ? 'volcano'
                   : e.categories[0].id === ICEBERG_ID ? 'iceberg'
                   : null;

        if (type) {
            return (
                <EventMarker 
                    type={type}
                    lat={e.geometries[0].coordinates[1]}
                    lng={e.geometries[0].coordinates[0]}
                    onClick={() => setEventInfo({
                        id: e.id,
                        title: e.title,
                        date: e.geometries[0].date,
                        coordinates: e.geometries[0].coordinates
                    })}
                />
            );
        }

        return null;
    });

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: '<-- API Key -->'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {eventInfo && <EventInfoBox info={eventInfo} />}
        </div>
    )
};

Map.defaultProps = {
    center: {
        lat: 39.3939,
        lng: -96.4136,
    },
    zoom: 4
};

export default Map;