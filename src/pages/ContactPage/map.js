// map.js
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../../assets/images/locationSolisIcon.png";

// ✅ Coordinates for Solis Green Energy Solutions
const MARKER_COORDS = [9.395355443761325, 76.56606470987495];
const CENTER_COORDS = [9.395355443761325, 76.56606470987495];

// ✅ Custom Icon
const customIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [60, 60],
  iconAnchor: [30, 60],
});

// ✅ Main Map Component
const MapBackground = () => {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  // handle map instance creation
  const handleMapCreated = (mapInstance) => {
    mapRef.current = mapInstance;
    setMapReady(true);
  };

  // resize + center adjustment
  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    const resizeHandler = () => {
      if (!map) return;
      map.invalidateSize();
      map.setView(CENTER_COORDS, map.getZoom());
    };

    // invalidate size on mount
    setTimeout(() => {
      map.invalidateSize();
      map.setView(CENTER_COORDS, 15);
    }, 150);

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [mapReady]);

  // ✅ Responsive behavior
  const isMobile = window.innerWidth <= 825;
  const scrollZoom = !isMobile;
  const dragging = !isMobile;
  const zoomValue = isMobile ? 16 : 15; // closer view on mobile

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "0 0 20px 20px",
        boxSizing: "border-box",
      }}
    >
      <MapContainer
        center={CENTER_COORDS}
        zoom={zoomValue}
        scrollWheelZoom={scrollZoom}
        dragging={dragging}
        whenCreated={handleMapCreated}
        zoomControl={true}
        style={{
          width: "100%",
          height: "100%",
          filter: "brightness(0.97)", // ✅ tuned brightness for clarity
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        <Marker position={MARKER_COORDS} icon={customIcon}>
          <Popup>
            <strong>Solis Green Energy Solutions</strong>
            <br />
            Mini Kristal Arcade
            <br />
            Muthoor, Thiruvalla, Kerala 689107
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapBackground;
