/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import React, {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import {
  StatusBar,
  PermissionsAndroid, Platform,
} from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import Root from './Navigation/Root';
Amplify.configure(config);

const App = () => {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App Camera Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, [])

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <Root />
  </>
  );
};

export default withAuthenticator(App);
