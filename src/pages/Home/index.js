import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Página Home OK </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Pega o tamanho inteiro da tela
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8f0ff',
    paddingTop: '5%'
  }
});
