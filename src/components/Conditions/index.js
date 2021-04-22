import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'


export default function Conditions () {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Feather name='wind' size={23} color="#1ed6ff" />
        <Text style={{ fontWeight: 'bold' }}>9 km/h</Text>
      </View>

      <View style={styles.content}>
        <MaterialCommunityIcons name='weather-sunset-up' size={23} color="#1ed6ff" />
        <Text style={{ fontWeight: 'bold' }}>5:22 am</Text>
      </View>

      <View style={styles.content}>
        <MaterialCommunityIcons name='weather-sunset-down' size={23} color="#1ed6ff" />
        <Text style={{ fontWeight: 'bold' }}>6:22 pm</Text>
      </View>

      <View style={styles.content}>
        <Feather name='droplet' size={23} color="#1ed6ff" />
        <Text style={{ fontWeight: 'bold' }}>69</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: "#FFF",
    padding: 10,
    flexDirection: 'row',
    width: "95%",
    justifyContent: 'space-around',
    borderRadius: 9
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
