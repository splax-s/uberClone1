/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Dimensions } from "react-native";

import HomeMap from '../Components/HomeMap';
import CovidMessage from '../Components/CovidMessage';
import HomeSearch from '../Components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 500}}>
        <HomeMap />
      </View>

      {/*  Covid Message*/}
      <CovidMessage />

      {/*  Bottom Comp*/}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;