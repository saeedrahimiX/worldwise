import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lat, lng);
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <p>Lat: {lat}</p>
      <p>Lng: {lng}</p>
      <button onClick={() => setSearchParams({ lat: 51.505, lng: -0.09 })}>
        Set London
      </button>
      {/* <button onClick={() => setSearchParams({ lat: 40.7128, lng: -74.006 })}>
        Set New York
      </button> */}
    </div>
  );    
   
  
}

export default Map;
