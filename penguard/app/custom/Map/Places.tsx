'use client'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useEffect } from "react";

type PlacesProps = {
  setOffice: (position: google.maps.LatLngLiteral) => void;
};
export type Destination = {
  description: string;
  placeId?: string;
  lat: number;
  lng: number;
  johannesburg?: string | null;
};

export default function Places({ setOffice }: PlacesProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  function extractJohannesburg(value:string) {
  // Use a regular expression to find "Johannesburg" (case-insensitive)
  const match = value.match(/\bJohannesburg\b/i);
  return match ? match[0] : null; // return the match or null if not found
}
 
  const handleSelect = async (val: string) => {
    setValue(val, false);
    console.log("Selected:", val);
    extractJohannesburg(val)
    clearSuggestions();
   localStorage.setItem("destination", val);
    const savedCity = localStorage.getItem("city");
    console.log("Saved City:", savedCity);

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setOffice({ lat, lng });

  };


  return (
    <Command className="rounded-lg border w-72 shadow-md " onSelect={()=>handleSelect}>
      <CommandInput
        value={value}
        onValueChange={setValue}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search Destination"
      />
      <CommandList>
        {status === "OK" && data.length > 0 ? (
          <CommandGroup heading="Suggestions">
            {data.map(({ place_id, description }) => (
              <CommandItem
                key={place_id}
                className=""
                onSelect={() => handleSelect(description)}
              >
                {description}
              </CommandItem>
            ))}
          </CommandGroup>
        ) : (
          <CommandEmpty>
            {status === "ZERO_RESULTS"
              ? "No results found"
              :""}
          </CommandEmpty>
        )}
      </CommandList>
    </Command>
  );
}
