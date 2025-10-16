import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../../assets/images/locationSolisIcon.png";

// Solis Green Energy Solutions coordinates
const markerCoordinates = [9.395355443761325, 76.56606470987495];
const center = [9.395355443761325, 76.56606470987495];

const customIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [60, 60],
  iconAnchor: [30, 60],
});

export const MapBackground = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "0 0 20px 20px", // matches your box radius
        zIndex: 2,
      }}
    >
      <MapContainer
        center={center}
        zoom={14}
        style={{
          width: "100%",
          height: "100%",
          filter: "brightness(97%)", // mild dim for clarity
        }}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoomControl={false}
        dragging={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={markerCoordinates} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
};
