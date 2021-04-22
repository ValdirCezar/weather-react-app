import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { condition } from '../../utils/condition';

export default function Forecast ({ data }) {
  let icon = condition(data.condition)

  return (
    <View style={styles.container}>

      <Text style={styles.date}> {data.date} </Text>
      <Ionicons name={icon.name} color={icon.color} size={25} />

      <View>
        <Text>{data.min}</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{data.max}°</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 9,
    elevation: 25,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 8,
      width: 8
    }
  },
  date: {
    fontSize: 14
  }
});
