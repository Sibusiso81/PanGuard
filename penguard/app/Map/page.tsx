'use client'
import React from 'react'
import Map from '../custom/Map/Map'
import { useLoadScript } from '@react-google-maps/api';

function page() {
      const { isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        libraries: ['places'],
    });
    if (!isLoaded) return <div>Loading...</div>;
  return (
   <Map/>
  )
}

export default page