import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Title from './src/components/Title';
import Msg from './src/components/Msg';
import Boxes from './src/components/Boxes';

export default function App() {
  return (
    <>
      {/* <Title />
      <Msg /> */}
      {/* <Boxes /> */}
      <View style={styles.container}>
        <Image
          source={require('./src/assets/illustration.png')}
          style={styles.img}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  img: {
    width: '100%',
    resizeMode: 'contain',
  },
});
