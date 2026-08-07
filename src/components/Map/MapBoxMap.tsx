"use client";
import React, { useContext, useEffect, useRef, useState } from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import Markers from './Markers';
import { DirectionDataContext } from '@/context/DirectionDataContext';
import MapBoxRoute from './MapBoxRoute';
import DistanceTime from './DistanceTime';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { FormDetailsContext, FormDetailsContextType } from '@/context/FormDetailsContext';

const MAPBOX_DRIVING_ENDPOINT = "https://api.mapbox.com/directions/v5/mapbox/driving/"
const session_token = "0e4d5549-e85f-4591-88f5-11822aa0aaba"

function isWebGLSupported(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    );
  } catch {
    return false;
  }
}

function MapBoxMap() {
  const mapRef =  useRef<any>();
  const [mapUnavailable, setMapUnavailable] = useState(false);
  const { sourceCoordinates, setSourceCoordinates } = useContext(SourceCoordiContext);
  const { destinationCoordinates, setDestinationCoordinates } = useContext(DestinationCoordiContext);
  const { directionData, setDirectionData } = useContext(DirectionDataContext);
  const { setCarAmount } = useContext(SelectedCarAmountContext);
  const context = useContext(FormDetailsContext);

  if (!context) {
    throw new Error('FormDetails must be used within a FormDetailsProvider');
  }

  const { formDetails } = context;

  useEffect(() => {
    if (!isWebGLSupported()) {
      setMapUnavailable(true);
    }
  }, []);

  useEffect(() => {
    const calculateCarAmount = () => {
      if (!directionData) return;

      const distance = directionData.routes?.[0]?.distance || 0;
      const distanceInMiles = distance * 0.000621371192;
      const multiplier = formDetails.tripType === 'twoWay' ? 4 : 2;
      const newCarAmount = multiplier * Number(distanceInMiles.toFixed(0));
      setCarAmount(newCarAmount);
    };

    calculateCarAmount();
  }, [formDetails.tripType, directionData]);

  useEffect(()=>{
    if(sourceCoordinates){
      mapRef.current?.flyTo({
        center:[sourceCoordinates.lng, sourceCoordinates.lat], duration:2500
      })
    }
  }, [sourceCoordinates])

  useEffect(()=>{
    if(destinationCoordinates){
      mapRef.current?.flyTo({
        center:[destinationCoordinates.lng, destinationCoordinates.lat], duration:2500
      })
    }
  }, [destinationCoordinates])

  useEffect(() => {
    if (sourceCoordinates && destinationCoordinates) {
      getDirectionRoute();
    }
  }, [sourceCoordinates, destinationCoordinates, ]);
  

  const getDirectionRoute = async () => {
    if (!sourceCoordinates || !destinationCoordinates) {
      console.error('Source or destination coordinates are missing');
      return;
    }
  
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${sourceCoordinates.lng}%2C${sourceCoordinates.lat}%3B${destinationCoordinates.lng}%2C${destinationCoordinates.lat}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;
    
    try {
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await res.json();
      setDirectionData(result);
    } catch (error) {
      console.error('Error fetching direction route:', error);
    }
  };

  return (
    <div className='m-1 '>
      <h2 className='text-[20px] font-semibold'>Map</h2>
      <div className='bottom-[40px] m-4 right-[20px] hidden md:block'>
        <DistanceTime/>
      </div>
      <div className='rounded-lg overflow-hidden'>
        {mapUnavailable ? (
          <div
            className='flex flex-col items-center justify-center text-center bg-gray-100 border border-gray-300 rounded-lg p-8'
            style={{ height: 450 }}
          >
            <svg className='w-10 h-10 text-gray-400 mb-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <polygon points='1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6'></polygon>
              <line x1='8' y1='2' x2='8' y2='18'></line>
              <line x1='16' y1='6' x2='16' y2='22'></line>
            </svg>
            <h3 className='font-semibold text-gray-700'>Map preview unavailable</h3>
            <p className='mt-2 text-sm text-gray-500 max-w-md'>
              Your browser has blocked the graphics feature (WebGL) the map needs.
              If you are using Brave, click the shield icon in the address bar and
              turn shields off for this site, then reload.
            </p>
            <p className='mt-2 text-sm text-gray-500 max-w-md'>
              No worries though &mdash; your distance and fare are still calculated
              once you select your addresses.
            </p>
          </div>
        ) : (
          <Map
            ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            onError={(e: any) => {
              const message = e?.error?.message || '';
              if (/webgl|not supported/i.test(message)) {
                setMapUnavailable(true);
              }
            }}
            initialViewState={{
              longitude: sourceCoordinates?.lng ?? -104.8214,
              latitude: sourceCoordinates?.lat ?? 38.8339,
              zoom: sourceCoordinates ? 14 : 10
            }}
            style={{ width: "100%", height: 450, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Markers/>
            {directionData?.routes? (
              <MapBoxRoute
                coordinates = {directionData?.routes[0]?.geometry?.coordinates}
              />
            ):null}
          </Map>
        )}
      </div>
    </div>
  );
}

export default MapBoxMap;
