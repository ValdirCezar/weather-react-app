import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Menu () {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={ () => navigation.openDrawer() }>
      <Entypo
        name="menu"
        size={36}
        color="#373737"
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9,
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    left: 15,
    top: 40,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 25,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 8,
      width: 8
    }
  }
});
