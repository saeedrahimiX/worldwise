import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();
  const {cities, isLoading} = useCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const[mapPosition, setmapPosition] = useState([51.505, -0.09]);
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
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer className={styles.map} center={mapPosition} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker key={city.id} position={[city.position.latitude, city.position.longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
