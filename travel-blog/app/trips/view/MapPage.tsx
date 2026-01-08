"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Polyline } from 'leaflet';
import { useEffect, useState } from 'react';
import { lusitana } from '@/app/ui/fonts';

// Fixes default icon issue in Leaflet with Webpack (Next.js)
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

type Location = {
  latitude: number;
  longitude: number;
  name: string;
};

type MapProps = {
  locations: Location[];
};

export default function MapPage({ locations }: MapProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Only run the map component on the client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <p>Loading...</p>; // Fallback while the map is loading
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl text-center my-6 vertical-align">Travel Locations</h2>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={true}
        style={{ alignContent: 'center', height: '700px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker riseOnHover={true} key={index} position={[location.latitude, location.longitude]} icon=
          {new L.Icon({
            iconUrl: "/luggage.png",
            iconSize: [32, 32],
          })}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <div>
        <h3 className="text-2xl text-center my-6 vertical-align">Trip List</h3>
        <ul className="flex flex-col items-center space-y-2">
          {locations.map((location, index) => (
            <li key={index}>
              <a
          href="#"
          className={`${lusitana.className} text-xl text-green-800 md:text-3xl md:leading-normal`}
              >
          {location.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
