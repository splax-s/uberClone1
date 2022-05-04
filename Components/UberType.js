/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Pressable } from "react-native";
import UberTypeRow from './UberTypeRow';

import typesData from '../assets/data/types';

const UberTypes = ({ typeState, onSubmit }) => {
  const [selectedType, setSelectedType] = typeState;

  return (
    <View>
      {typesData.map((type) => (
        <UberTypeRow
          type={type}
          key={type.id}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      ))}

      <Pressable onPress={onSubmit} style={{
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;