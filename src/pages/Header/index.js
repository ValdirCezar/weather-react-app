import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header () {
  return (
    <View style={styles.container}>
      <Text> Página Header OK </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Pega o tamanho inteiro da tela
    alignItems: 'center',
    justifyContent: 'center',
  }
});
