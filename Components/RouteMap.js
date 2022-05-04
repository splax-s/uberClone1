/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBkI2Q0pVP9cuXHc_Xk3N8-nn_wKzSewKM';

const RouteMap = ({ origin, destination }) => {
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 6.4361676,
        longitude: 3.4447645,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
        // precision="low"
        // timePrecision="now"
        // optimizeWaypoints = {true}
      />
      <Marker
        coordinate={origin}
        title={'Origin'}
      />
      <Marker
        coordinate={destination}
        title={"Destination"}
      />
    </MapView>
  )
}

export default RouteMap;
