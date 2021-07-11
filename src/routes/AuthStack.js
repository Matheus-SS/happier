import React from 'react';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} /> 
    </Stack.Navigator>
  )
}

export default AuthStack;