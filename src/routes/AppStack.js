import React from 'react';
import Home from '../pages/Home';
import Details from '../pages/Details';
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

export default AppStack;