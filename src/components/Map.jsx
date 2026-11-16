import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [searchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const mapLat = Number(searchParams.get("lat") ?? mapPosition[0]);
  const mapLng = Number(searchParams.get("lng") ?? mapPosition[1]);
  const center =
    Number.isFinite(mapLat) && Number.isFinite(mapLng)
      ? [mapLat, mapLng]
      : mapPosition;

  useEffect(() => {
    if (searchParams.get("lat") && searchParams.get("lng")) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng, searchParams]);

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer className={styles.map} center={center} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
            <Popup>
              {city.cityName} {city.emoji}
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={center} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position);
  }, [map, position]);

  return null;
}

export default Map;
