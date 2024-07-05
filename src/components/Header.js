import { Icon } from '@iconify/react';
import weatherAlertIcon from '@iconify/icons-mdi/weather-cloudy-alert';

function Header() {
    return (
        <header className='header'>
            <h1> <Icon icon={weatherAlertIcon} /> Natural Event Tracker (<a href='https://eonet.gsfc.nasa.gov/docs/v2.1' className='nasa-api-link'>Powered By NASA</a>)</h1>
        </header>
    );
};

export default Header;