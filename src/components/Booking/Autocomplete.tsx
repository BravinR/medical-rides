"use client";
import { useAddressContext } from "@/context/AddressContext";
import { DestinationCoordiContext } from "@/context/DestinationCoordiContext";
import { SourceCoordiContext } from "@/context/SourceCoordiContext";
import React, { useState, useContext } from "react";
import AddressAutocompleteInput, { Suggestion } from "../AddressAutocompleteInput";

const session_token = "0e4d5549-e85f-4591-88f5-11822aa0aaba";
const MAPBOX_RETRIEVE_URL = "https://api.mapbox.com/search/searchbox/v1/retrieve/";

const inputClass = "bg-white p-1 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none";

async function fetchCoordinates(placeName: string): Promise<{ lng: number; lat: number }> {
  const response = await fetch(`/api/search-address?q=${encodeURIComponent(placeName)}`);
  const responseResult = await response.json();

  const mapboxId = responseResult.searchResult.suggestions[0].mapbox_id;
  const mapboxUrl = `${MAPBOX_RETRIEVE_URL}${mapboxId}?session_token=${session_token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

  const res = await fetch(mapboxUrl);
  const result = await res.json();

  const { coordinates } = result.features[0].geometry;
  return { lng: coordinates[0], lat: coordinates[1] };
}

function Autocomplete() {
  const [sourceInput, setSourceInput] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const { setSourceAddress, setDestinationAddress } = useAddressContext();
  const { setSourceCoordinates } = useContext(SourceCoordiContext);
  const { setDestinationCoordinates } = useContext(DestinationCoordiContext);

  const onSourceSelect = async (item: Suggestion) => {
    try {
      setSourceAddress(item.place_name);
      setSourceCoordinates(await fetchCoordinates(item.place_name));
    } catch (error) {
      console.error("Error fetching source coordinates:", error);
    }
  };

  const onDestinationSelect = async (item: Suggestion) => {
    try {
      setDestinationAddress(item.place_name);
      setDestinationCoordinates(await fetchCoordinates(item.place_name));
    } catch (error) {
      console.error("Error fetching destination coordinates:", error);
    }
  };

  return (
    <div className="m-1">
      <div className="mt-3">
        <label htmlFor="sourceLocation">Where From?</label>
        <AddressAutocompleteInput
          id="sourceLocation"
          autoComplete="section-source address-line1"
          placeholder="Address"
          className={inputClass}
          value={sourceInput}
          onChange={setSourceInput}
          onSelect={onSourceSelect}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="destinationLocation">Where To?</label>
        <AddressAutocompleteInput
          id="destinationLocation"
          autoComplete="section-destination address-line1"
          placeholder="Address"
          className={inputClass}
          value={destination}
          onChange={setDestination}
          onSelect={onDestinationSelect}
        />
      </div>
    </div>
  );
}
export default Autocomplete;
