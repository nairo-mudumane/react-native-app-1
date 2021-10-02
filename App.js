import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from './src/components/Title';
import Msg from './src/components/Msg';

export default function App() {
  return (
    <>
      <Title />
      <Msg />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
