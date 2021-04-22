import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import Menu from '../../components/Menu'
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const mylist = [
  {
    "date": "04-20",
    "weekday": "Tue",
    "max": 20,
    "min": 15,
    "description": "Showers",
    "condition": "clear_day"
  },
  {
    "date": "04-21",
    "weekday": "Wed",
    "max": 20,
    "min": 15,
    "description": "Showers",
    "condition": "rain"
  },
  {
    "date": "04-22",
    "weekday": "Thu",
    "max": 20,
    "min": 15,
    "description": "Day partly cloudy",
    "condition": "cloudly_day"
  },
  {
    "date": "04-23",
    "weekday": "Fri",
    "max": 22,
    "min": 14,
    "description": "Day partly cloudy",
    "condition": "cloudly_day"
  },
  {
    "date": "04-24",
    "weekday": "Sat",
    "max": 25,
    "min": 14,
    "description": "Day partly cloudy",
    "condition": "cloudly_day"
  },
  {
    "date": "04-25",
    "weekday": "Sun",
    "max": 25,
    "min": 15,
    "description": "Scattered thunderstorms",
    "condition": "storm"
  },
  {
    "date": "04-26",
    "weekday": "Mon",
    "max": 22,
    "min": 16,
    "description": "Showers",
    "condition": "rain"
  },
  {
    "date": "04-27",
    "weekday": "Tue",
    "max": 19,
    "min": 13,
    "description": "Day partly cloudy",
    "condition": "cloudly_day"
  },
  {
    "date": "04-28",
    "weekday": "Wed",
    "max": 18,
    "min": 13,
    "description": "Day partly cloudy",
    "condition": "cloudly_day"
  },
  {
    "date": "04-29",
    "weekday": "Thu",
    "max": 18,
    "min": 12,
    "description": "Day partly cloudy",
    "condition": "cloudly_day"
  }
]

export default function Home () {
  return (
    <SafeAreaView style={styles.container}>

      <Menu />
      <Header />
      <Conditions />

      <FlatList
        horizontal={true}
        style={styles.list}
        contentContainerStyle={{paddingBottom: '5%'}}
        data={mylist}
        keyExtractor={item => item.data}
        renderItem={({ item }) => <Forecast data={item} />}
      />

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
  },
  list: {
    marginTop: 10,
    marginLeft: 10
  }
});
