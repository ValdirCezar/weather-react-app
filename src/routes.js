import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Search from './pages/Search';

const Drawer = createDrawerNavigator();

function Routes () {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Minha cidade'
        }}
      />

      <Drawer.Screen
        name='Search'
        component={Search}
        options={{
          options: 'Procurar'
        }}
      />

    </Drawer.Navigator>
  )
}

export default Routes;