import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Menu from '../../components/Menu'
import Header from '../../components/Header';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu/>
      <Header/>
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
