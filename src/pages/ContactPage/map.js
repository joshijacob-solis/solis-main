// MapBackground.js
import React, { useEffect, useRef, useState } from "react";
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
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  // Called by MapContainer when created
  const handleMapCreated = (mapInstance) => {
    mapRef.current = mapInstance;
    setMapReady(true);
  };

  // Invalidate size on mount and on window resize so Leaflet recalculates tiles
  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    // Ensure correct initial rendering
    setTimeout(() => {
      map.invalidateSize();
      map.setView(center, map.getZoom());
    }, 100); // small delay helps when parent sizing changes during mount

    const onResize = () => {
      if (!map) return;
      // invalidate and recentre
      map.invalidateSize();
      map.setView(center, map.getZoom());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [mapReady]);

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
        // allow scroll wheel zoom for desktop users; set to false if you want to disable
        scrollWheelZoom={true}
        // enable standard controls
        zoomControl={true}
        // let MapContainer hand you the map instance
        whenCreated={handleMapCreated}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={markerCoordinates} icon={customIcon} />
      </MapContainer>
    </div>
  );
};
