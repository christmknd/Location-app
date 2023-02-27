import React , {useMemo}  from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api'

function MapComponent() {

  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };


  return (
    <div className="map">
      <GoogleMap zoom={10} 
      center={center}>
      mapContainerStyle={containerStyle}  
      </GoogleMap>
    </div>
  )
}

export default MapComponent