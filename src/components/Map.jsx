import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [searchParams] = useSearchParams();
  const [mapPosition] = useState([40, 0]);

  const mapLat = Number(searchParams.get("lat") ?? mapPosition[0]);
  const mapLng = Number(searchParams.get("lng") ?? mapPosition[1]);
  const center = Number.isFinite(mapLat) && Number.isFinite(mapLng)
    ? [mapLat, mapLng]
    : mapPosition;

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer
        className={styles.map}
        center={center}
        zoom={6}
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
