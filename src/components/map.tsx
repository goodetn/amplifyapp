import React, { memo, useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { LatLngType } from '../templates/contact';

const containerStyle = {
  width: '400px',
  height: '400px'
};

type MapTypes = {
  center: LatLngType
}
function MapComponent(props: MapTypes) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(props.center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default memo(MapComponent)
