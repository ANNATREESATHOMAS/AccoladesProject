import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

function Map() {
    const mapContainerStyle = {
      width: '400px',
      height: '400px',
    };
  
    const center = {
      lat: YOUR_LATITUDE,
      lng: YOUR_LONGITUDE,
    };
  
    return (
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  }
  
  export default Map;
  