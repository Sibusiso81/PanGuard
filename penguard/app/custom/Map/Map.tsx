"use client";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";
import React, {
  useCallback,
  useEffect,
  useEffectEvent,
  useMemo,
  useRef,
  useState,
} from "react";
import PlaceInfo from "./PlaceInfo";
import Places from "./Places";
import { emergencyHelpSpots } from "@/lib/HelpSpots";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;
function Map() {

  const [center, setCenter] = useState<LatLngLiteral>({
    lat: -26.2041,
    lng: 28.0473,
  });
  const [directions, setDirections] = useState<DirectionsResult>();

  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      maxZoom: 15,
      minZoom: 8,
    }),
    []
  );
  const [office, setOffice] = useState<LatLngLiteral | null>(null);
  //useMemo  to memorize center unless dependencies change
  const mapRef = useRef<google.maps.Map | null>(null);
  interface OnMapLoad {
    (map: google.maps.Map): void;
  }
  const onLoad = useCallback<OnMapLoad>((map: google.maps.Map) => (mapRef.current = map), []);
  useEffect(() => {
    if (!navigator.geolocation) return;
    const onSuccess = (pos: GeolocationPosition) => {
      useMemo(
        () =>
          setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        []
      );
    };
    const onError = (_err: GeolocationPositionError) => {
      // keep fallback center if permission denied or error occurs
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 5000,
    });
  }, []);
  const fetchDirections = (emergencyHelpSpots: LatLngLiteral) => {
    if (!office) return;

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: emergencyHelpSpots,
        destination: office,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
          console.log(result);
        }
      }
    );
  };
  console.log(directions?.routes[0].legs[0])
  return (
    <section className="w-screen h-screen relative">
      {/* top centered controls that sit above the map */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center  ">
        <div className="rounded-md shadow-md flex items-start justify-between w-full">
          <Places
            setOffice={(position) => {
              setOffice(position);
              mapRef.current?.panTo(position);
            }}
          />
          <PlaceInfo leg={directions?.routes[0].legs[0]}/>
        </div>
      </div>

      {/* map fills the screen and sits underneath the controls */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full map">
          <GoogleMap
            zoom={40}
            center={center}
            mapContainerClassName="w-screnn h-screen"
            options={options}
            onLoad={onLoad}
          >
            {directions && (
             
                <DirectionsRenderer directions={directions}  options={{
                  polylineOptions:{
                    zIndex:50,
                    strokeColor:'#7353BA',
                    strokeWeight:3
                    
                  }
                }}/>
            
            )}
            {office && <Marker position={office}   icon={"/location-pin-alt-1-svgrepo-com.svg"} />}
            <MarkerClusterer>
              {(clusterer) => (
                <>
                  {emergencyHelpSpots.map((spot) => (
                    <Marker
                      key={`${spot.lat}-${spot.lng}`}
                      position={spot}
                      icon={"/location-pin-alt-1-svgrepo-com.svg"}
                      clusterer={clusterer}
                      onClick={() => {
                        fetchDirections(spot);
                      }}
                    />
                  ))}
                </>
              )}
            </MarkerClusterer>
          </GoogleMap>
          {/* replace with your <GoogleMap .../> component */}
        </div>
      </div>
    </section>
  );
}

<a href="/15889443.png" title="locale icons">
  Locale icons created by meaicon - Flaticon
</a>;
const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};

export default Map;
