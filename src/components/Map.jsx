import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [searchParams] = useSearchParams();
  const [mapPosition] = useState([40,0]);

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer
        className={styles.map}
        // center={mapPosition}
        center={[mapLat, mapLng]}
        zoom={6 }
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
            {city.cityName} {city.emoji}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <p>
        {mapLat}, {mapLng}
      </p>
    </div>
  );
}

export default Map;
