"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import MapPage with ssr: false
const DynamicMapPage = dynamic(() => import('./MapPage'), {
  ssr: false,  // This ensures that the MapPage only renders on the client
});

// Simulate fetching locations from a local database
const fetchLocations = async () => {
  // Replace this with actual database logic (e.g., IndexedDB, SQLite, or API call)
  return [
    { latitude: 40.7128, longitude: -74.0060, name: "New York City" },
    { latitude: 48.8566, longitude: 2.3522, name: "Paris" },
    { latitude: 35.6895, longitude: 139.6917, name: "Tokyo" },
  ];
};

export default function Home() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations().then(setLocations);
  }, []);

  return <DynamicMapPage locations={locations} />;
}
