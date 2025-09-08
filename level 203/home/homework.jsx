import React, { useState, useEffect, useRef } from "react";

/******************************
 * useGeoLocation Hook
 ******************************/
export function useGeoLocation(options = { enableHighAccuracy: true, timeout: 5000 }) {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [watching, setWatching] = useState(false);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported ❌");
      setLoading(false);
      return;
    }

    const success = (pos) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        accuracy: pos.coords.accuracy,
      });
      setError(null);
      setLoading(false);
    };

    const failure = (err) => {
      setError(err.message);
      setLoading(false);
    };

    // Start watching
    const watchId = navigator.geolocation.watchPosition(success, failure, options);
    setWatching(true);

    return () => navigator.geolocation.clearWatch(watchId);
  }, [options]);

  return { position, error, loading, watching };
}

/******************************
 * Helper: Distance calculator (Haversine formula)
 ******************************/
function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/******************************
 * UI 1: LocationCard
 ******************************/
function LocationCard() {
  const { position, error, loading } = useGeoLocation();

  if (loading) return <div className="p-4 bg-white rounded-xl shadow">Loading location…</div>;
  if (error) return <div className="p-4 bg-red-100 text-red-700 rounded-xl shadow">Error: {error}</div>;
  if (!position) return null;

  return (
    <div className="p-4 bg-white rounded-xl shadow space-y-1">
      <h2 className="text-lg font-bold">📍 Current Location</h2>
      <p>Latitude: {position.lat.toFixed(5)}</p>
      <p>Longitude: {position.lng.toFixed(5)}</p>
      <p>Accuracy: ±{position.accuracy} m</p>
    </div>
  );
}

/******************************
 * UI 2: MovementTracker
 ******************************/
function MovementTracker({ distanceLimitKm = 0.5 }) {
  const { position } = useGeoLocation();
  const [distance, setDistance] = useState(0);
  const lastPos = useRef(null);

  useEffect(() => {
    if (!position) return;
    if (lastPos.current) {
      const d = getDistanceKm(
        lastPos.current.lat,
        lastPos.current.lng,
        position.lat,
        position.lng
      );
      setDistance((prev) => prev + d);
    }
    lastPos.current = position;
  }, [position]);

  return (
    <div className="p-4 bg-white rounded-xl shadow space-y-2">
      <h2 className="text-lg font-bold">🚶 Movement Tracker</h2>
      <p>Total moved: {distance.toFixed(3)} km</p>
      {distance > distanceLimitKm && (
        <p className="text-red-600 font-bold">⚠️ Alarm: Distance exceeded {distanceLimitKm} km!</p>
      )}
    </div>
  );
}

/******************************
 * Main App
 ******************************/
export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-gray-100">
      <LocationCard />
      <MovementTracker distanceLimitKm={0.2} />
    </div>
  );
}
