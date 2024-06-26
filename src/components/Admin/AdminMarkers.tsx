import React from 'react';
import { Marker } from 'react-map-gl';

interface MarkersProps {
  sourceCoordinates: { lng: number; lat: number } | null;
  destinationCoordinates: { lng: number; lat: number } | null;
}

function AdminMarkers({ sourceCoordinates, destinationCoordinates }: MarkersProps) {
  return (
    <>
      {sourceCoordinates && (
        <Marker longitude={sourceCoordinates.lng} latitude={sourceCoordinates.lat} anchor="bottom">
          <img src="/pin.png" alt="pin" className="w-10 h-10" />
        </Marker>
      )}
      {destinationCoordinates && (
        <Marker longitude={destinationCoordinates.lng} latitude={destinationCoordinates.lat} anchor="bottom">
          <img src="/pin.png" alt="pin" className="w-10 h-10" />
        </Marker>
      )}
    </>
  );
}

export default AdminMarkers;