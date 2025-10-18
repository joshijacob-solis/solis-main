// MapBackground.js
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../../assets/images/locationSolisIcon.png";

// Coordinates for Solis
const MARKER_COORDS = [9.395355443761325, 76.56606470987495];
const CENTER_COORDS = [9.395355443761325, 76.56606470987495];

// Use your custom location icon
const customIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [60, 60],
  iconAnchor: [30, 60],
});

export const MapBackground = ({
  zoom = 15,               // default zoom; tweak to taste (13-17 typical)
  brightness = 0.97,       // 1 = normal; <1 slightly dim; >1 brighter
  enableScrollOnDesktop = true,
}) => {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  // used by MapContainer to hand us the instance
  const handleMapCreated = (mapInstance) => {
    mapRef.current = mapInstance;
    setMapReady(true);
  };

  // When mounted / when the map instance is ready, invalidate size and recentre.
  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    // Small delay helps if parent sizing transitions or is just applied
    const t = setTimeout(() => {
      try {
        map.invalidateSize();
        map.setView(CENTER_COORDS, map.getZoom() || zoom);
      } catch (err) {
        // sometimes map not fully ready; safe to ignore
        // console.warn("leaflet size invalidate error", err);
      }
    }, 120);

    // Keep map sized when window resizes
    const onResize = () => {
      if (!map) return;
      map.invalidateSize();
      map.setView(CENTER_COORDS, map.getZoom() || zoom);
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, [mapReady, zoom]);

  // choose whether to allow scroll wheel zoom based on screen width
  const isTouchOrSmall = window.innerWidth <= 825;
  const scrollWheel = isTouchOrSmall ? false : Boolean(enableScrollOnDesktop);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "0 0 20px 20px",
        zIndex: 2,
        // keep the map visually inset a little so cards don't visually overlap
        boxSizing: "border-box",
      }}
    >
      <MapContainer
        center={CENTER_COORDS}
        zoom={zoom}
        scrollWheelZoom={scrollWheel}
        style={{
          width: "100%",
          height: "100%",
          filter: `brightness(${brightness})`,
        }}
        whenCreated={handleMapCreated}
        zoomControl={true}
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
            Thiruvalla, Kerala 689107
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapBackground;
