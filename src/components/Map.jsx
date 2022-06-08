import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = (data) => {

  const mapStyles = {
    height: "50vh",
    width: "100%",
  }

  const defaultCenter = {
    lat: 37.4224764,
    lng: -122.0842499
  }

  console.log('defaultCenter: ', defaultCenter.lng, defaultCenter.lng)
  return (
    <LoadScript googleMapsApiKey='AIzaSyD2U3dLgYAVHqXF9D4UKetC82qE7xLjp8A' >
      <GoogleMap 
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
        >
          <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map