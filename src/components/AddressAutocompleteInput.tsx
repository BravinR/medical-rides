"use client";
import React, { useEffect, useRef, useState } from "react";

export interface Suggestion {
  mapbox_id: string;
  place_name: string;
}

interface AddressAutocompleteInputProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  onSelect?: (suggestion: Suggestion) => void;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
}

function AddressAutocompleteInput({
  id,
  name,
  value,
  onChange,
  onSelect,
  placeholder,
  className,
  autoComplete,
}: AddressAutocompleteInputProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const skipNextFetch = useRef(false);
  const debounceTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (!value) {
      setSuggestions([]);
      return;
    }

    if (skipNextFetch.current) {
      skipNextFetch.current = false;
      return;
    }

    debounceTimeout.current = window.setTimeout(async () => {
      try {
        const res = await fetch(
          "/api/autofill-address?q=" + encodeURIComponent(value),
        );
        const result = await res.json();
        setSuggestions(result.searchResult?.suggestions || []);
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
      }
    }, 500);

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [value]);

  const handleSelect = (suggestion: Suggestion) => {
    skipNextFetch.current = true;
    onChange(suggestion.place_name);
    setSuggestions([]);
    onSelect?.(suggestion);
  };

  return (
    <div className="relative">
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        autoComplete={autoComplete ?? "off"}
        role="combobox"
        aria-expanded={suggestions.length > 0}
        aria-autocomplete="list"
        onChange={(e) => onChange(e.target.value)}
      />
      {suggestions.length > 0 && (
        <div className="absolute z-10 shadow-md p-1 rounded-md w-full bg-white border border-gray-200">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.mapbox_id}
              className="p-2 text-sm hover:bg-gray-100 cursor-pointer rounded"
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion.place_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddressAutocompleteInput;
