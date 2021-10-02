import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Msg() {
  return (
    <View>
      <Text style={estilos.texto}>Componente de mensagem</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  texto: {
    textAlign: 'center',
  },
});
