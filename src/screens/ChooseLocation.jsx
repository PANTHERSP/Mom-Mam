import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 13.7271388889,
    lng: 100.765611111
  };
  
  const ChooseLocation = () => {
    const [position, setPosition] = useState(center);
  
    const handleMarkerDrag = (e) => {
      setPosition({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Latitude:', position.lat);
      console.log('Longitude:', position.lng);
      // Further processing or submit the form data to a server
    };
  
    return (
      <div>
        <h2>Select Your Location</h2>
        <form onSubmit={handleSubmit}>
          <LoadScript
            googleMapsApiKey="AIzaSyBZdHmnOqUzC85ZsCPz1IX89JDeoCpyfPY" // Replace with your Google Maps API key
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
              onClick={(e) => setPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
            >
              <Marker
                position={position}
                draggable={true}
                onDragEnd={handleMarkerDrag}
              />
            </GoogleMap>
          </LoadScript>
          <input type="hidden" name="latitude" value={position.lat} />
          <input type="hidden" name="longitude" value={position.lng} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ChooseLocation;