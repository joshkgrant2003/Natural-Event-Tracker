import { useState, useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import Header from './components/Header';
import PickList from './components/PickList';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    selectWildfire: true,
    selectVolcano: true,
    selectIceberg: true,
  });

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
        if (!res.ok) {
          throw new Error('Fetch request not okay');
        }
        const { events } = await res.json();
        setEventData(events);

      } catch (err) {
        console.error(err);
        alert(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const WILDFIRE_ID = 8;
  const VOLCANO_ID = 12;
  const ICEBERG_ID = 15;

  const filteredEvents = eventData.filter(e => {
    const categoryId = e.categories[0].id;
    if (categoryId === WILDFIRE_ID && filter.selectWildfire) return true;
    if (categoryId === VOLCANO_ID && filter.selectVolcano) return true;
    if (categoryId === ICEBERG_ID && filter.selectIceberg) return true;
    return false;
  });

  return (
    <div>
      <Header />
      { !loading ? 
        <>
          <Map eventData={filteredEvents} />
          <PickList setFilter={setFilter} />
        </> 
      : <Loader /> }
    </div>
  );
};

export default App;
