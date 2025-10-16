import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../../assets/images/locationSolisIcon.png";

// Location: Solis Green Energy Solutions, Muthoor, Thiruvalla
const markerCoordinates = [9.395355443761325, 76.56606470987495];
const center = [9.3809, 76.5675];

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [60, 60],
  iconAnchor: [30, 60], // Centered more precisely
  popupAnchor: [0, -60],
  className: "solis-marker-glow",
});

export const MapBackground = () => {
  return (
    <div style={{ width: "100%", height: "400px", position: "relative", borderRadius: "16px", overflow: "hidden" }}>
      <MapContainer
        center={center}
        zoom={14}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Slightly more modern & clean-looking map layer */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a> | © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={markerCoordinates} icon={customIcon}>
          <Popup>
            <div style={{ textAlign: "center" }}>
              <strong>Solis Green Energy Solutions</strong><br />
              Muthoor, Thiruvalla, Kerala<br />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Solis+Green+Energy+Solutions+Muthoor+Thiruvalla"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: "600" }}
              >
                📍 Get Directions
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <style>{`
        /* Optional marker glow to match Solis Green branding */
        .solis-marker-glow img {
          filter: drop-shadow(0 0 8px rgba(14,165,233,0.5));
        }

        /* Rounded corners for the map tiles */
        .leaflet-container {
          border-radius: 16px;
        }

        /* Hide the attribution for small screens to avoid clutter */
        @media (max-width: 640px) {
          .leaflet-control-attribution {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
