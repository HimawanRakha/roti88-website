"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { locations } from "../data/Location";

export default function MapComponent() {
  const centerPosition: [number, number] = [-8.1333, 113.2222];
  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer center={centerPosition} zoom={11} className="w-full h-full z-0" scrollWheelZoom={true}>
      <TileLayer attribution="&copy; OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={customIcon}>
          <Popup>
            <strong>{loc.name}</strong>
            <br />
            <span className="text-xs">{loc.address}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
