'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for Next.js Leaflet icon bug
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component to handle map interactions like resizing
function MapController() {
  const map = useMap();
  useEffect(() => {
    // Fix map not rendering fully initially
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);
  return null;
}

export default function MapComponent() {
  // 강남역 부근 좌표
  const center: [number, number] = [37.498095, 127.027610];

  return (
    <div style={{ height: '100%', width: '100%', zIndex: 0 }}>
      <MapContainer center={center} zoom={15} style={{ height: '100%', width: '100%' }} zoomControl={false}>
        <MapController />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={customIcon}>
          <Popup>
            <div className="text-center font-bold">
              <span className="text-blue-600">GS25 강남대로점</span><br/>
              시급: 13,000원
            </div>
          </Popup>
        </Marker>
        <Marker position={[37.499, 127.025]} icon={customIcon}>
          <Popup>
            <div className="text-center font-bold">
              <span className="text-red-600">본죽 역삼점</span><br/>
              시급: 15,000원
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
