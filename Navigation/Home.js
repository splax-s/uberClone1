/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearch from "../Screens/DestinationSearchScreen";
import SearchResults from "../Screens/SearchResults";
import OrderScreen from "../Screens/OrderScreen";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
      <Stack.Screen name={"SearchResults"} component={SearchResults} />
      <Stack.Screen name={"OrderPage"} component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;