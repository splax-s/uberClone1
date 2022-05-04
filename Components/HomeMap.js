/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import {API, graphqlOperation} from 'aws-amplify';
import { listCars } from '../src/graphql/queries';

const HomeMap = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(
            listCars
          )
        );
        setCars(response.data.listCars.items);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCars();
  }, []);

  const getImage = type => {
    if (type === 'UberX') {
      return require('../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../assets/images/top-Comfort.png');
    }
    return require('../assets/images/top-UberXL.png');
  };

  return (
    <MapView
      style={{ width: '100%', height: '100%' }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 6.4361676,
        longitude: 3.4447645,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    >
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{ latitude: car.latitude, longitude: car.longitude }}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;

