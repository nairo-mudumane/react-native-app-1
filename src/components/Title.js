import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tete</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 50,
    color: 'aqua',
  },
});
