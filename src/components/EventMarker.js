import { Icon } from '@iconify/react';
import weatherAlertIcon from '@iconify/icons-mdi/weather-cloudy-alert';
import wildfireIcon from '@iconify/icons-mdi/fire-alert';
import volcanoIcon from '@iconify/icons-mdi/volcano';
import icebergIcon from '@iconify/icons-mdi/snowflake';

function EventMarker({ onClick, type }) {
    let icon;
    let className;

    if (type === 'wildfire') {
        icon = wildfireIcon;
        className = 'wildfire-icon';
    } else if (type === 'volcano') {
        icon = volcanoIcon;
        className = 'volcano-icon';
    } else if (type === 'iceberg') { 
        icon = icebergIcon;
        className = 'iceberg-icon';
    } else {
        icon = weatherAlertIcon;
        className = 'event-icon';
    }

    return (
        <div className="event-marker" onClick={onClick}>
            <Icon icon={icon} className={className} />
        </div>
    )
};

export default EventMarker;