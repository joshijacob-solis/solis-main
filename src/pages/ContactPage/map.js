import React from "react";
import { MapContainer, TileLayer, Marker,  } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationIcon from "../../assets/images/locationSolisIcon.png"
const markerCoordinates = [9.395355443761325, 76.56606470987495];
const center=[9.369495448661782, 76.57110469309595]
const customIcon = new L.Icon({
    iconUrl: locationIcon, // Replace with the actual path
    iconSize: [60, 60], // Size of the icon image
    iconAnchor: [16, 32], // Position where the marker's "tip" is anchored
  });
export const MapBackground = () => {
  return (
    <MapContainer
      center={center}
      zoom={14}
      style={{ width: "100%", height: "100%",position:"absolute" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={markerCoordinates} icon={customIcon} ></Marker>
      
    </MapContainer>
  );
};
