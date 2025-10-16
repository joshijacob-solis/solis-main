// HeroMapBackground.jsx
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../../assets/images/locationSolisIcon.png";

const center = [9.3809, 76.5675];
const markerCoordinates = [9.395355443761325, 76.56606470987495];

const customIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  className: "hero-marker",
});

export default function HeroMapBackground() {
  return (
    <div className="hero-map-wrap">
      <MapContainer
        center={center}
        zoom={13}
        zoomControl={false}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        attributionControl={false}
        keyboard={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; CARTO & OpenStreetMap'
          opacity={0.6} // subtle look under hero text
        />
        <Marker position={markerCoordinates} icon={customIcon} />
      </MapContainer>

      {/* Optional overlay gradient for readability */}
      <div className="hero-map-overlay" />
      <style>{`
        .hero-map-wrap{
          position:absolute; inset:0; z-index:0; 
          border-radius:16px; overflow:hidden;
        }
        .hero-map-overlay{
          position:absolute; inset:0;
          background: linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.9));
          pointer-events:none;
        }
        .hero-marker img{ filter: drop-shadow(0 0 6px rgba(14,165,233,.4)); }
        /* If your hero has text, ensure the text container has position:relative; z-index:1 */
      `}</style>
    </div>
  );
}
