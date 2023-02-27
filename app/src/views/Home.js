import React from 'react';
//import MapComponent from '../components/MapComponent'
import {useLoadScript , GoogleMap, Marker} from '@react-google-maps/api'

function Home() {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.API_KEY
      });
      
      if (!isLoaded) return <div>Loading...</div>
      return <MapComponent/>
}

function MapComponent() {

    return (
      <div className="map">
        <GoogleMap 
        zoom={10}
        center={{lat: 48.833,lng: 2.349903}}
        mapContainerClassName="map-container">
        </GoogleMap>
      </div>
    )
  }

export default Home