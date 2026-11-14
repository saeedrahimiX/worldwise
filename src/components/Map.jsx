import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const useNavigate = () => {
  //   const navigate = (path) => {
  //     setSearchParams(path);
  //   };
  //   return navigate;
  // };
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lat, lng);
  const navigate = useNavigate();
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form" )}>
      <h1>Map</h1>
      <p>Lat: {lat}</p>
      <p>Lng: {lng}</p>
      {/* <button onClick={() => setSearchParams({ lat: 51.505, lng: -0.09 })}>
        Set London
      </button>
      {/* <button onClick={() => setSearchParams({ lat: 40.7128, lng: -74.006 })}>
        Set New York
      </button> */}
    </div>
  );    
   
  
}

export default Map;
