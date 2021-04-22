import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Header () {
  return (
    <LinearGradient style={styles.header} colors={['#1ed6ff', '#97c1ff']} >
      <Text style={styles.date}>12/02/2021</Text>
      <Text style={styles.city}>Londrina</Text>

        <Ionicons
          name="cloud"
          color="#FFF"
          size={150}
        />

      <Text style={styles.degree}>30°C</Text>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "95%",
    height: "55%",
    alignContent: 'center',
    alignItems: 'center',
    top: 25,
    borderRadius: 9
  },
  date: {
    color: "#FFF",
    fontWeight: 'bold',
    marginTop: 25
  },
  city: {
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 25
  },
  degree: {
    fontSize: 80,
    color: "#FFF",
    fontWeight: 'bold'
  }
});
