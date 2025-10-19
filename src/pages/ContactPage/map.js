import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationIcon from "../../assets/images/locationSolisIcon.png";

// Fix for default markers in react-leaflet
const fixLeafletIcons = () => {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
};

const markerCoordinates = [9.395355443761325, 76.56606470987495];
const center = [9.395355443761325, 76.56606470987495]; // Centered on your location

const customIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export const MapBackground = () => {
  useEffect(() => {
    fixLeafletIcons();
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{ 
        width: "100%", 
        height: "100%", 
        position: "absolute",
        zIndex: 1 
      }}
      scrollWheelZoom={false}
      dragging={true}
      zoomControl={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker 
        position={markerCoordinates} 
        icon={customIcon}
      />
    </MapContainer>
  );
};
