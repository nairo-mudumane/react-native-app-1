import React from 'react';
import { View, Text } from 'react-native';

export default function Boxes() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
      }}
    >
      <View style={{ width: 50, height: 50, backgroundColor: '#00f' }}></View>
      <View style={{ width: 50, height: 50, backgroundColor: '#00a' }}></View>
      <View style={{ width: 50, height: 50, backgroundColor: '#005' }}></View>
    </View>
  );
}
