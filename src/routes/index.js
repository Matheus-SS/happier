import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../helpers/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Routes(){
  const [loading, setLoading] = useState(true);
  const {user, setUser, setToken} = useContext(AuthContext);

  useEffect(() => { 
    const subscriber = firebase.auth().onAuthStateChanged(async(user) => {
      if(user) {
          const token = await user.getIdToken();
          await AsyncStorage.setItem('@Happier-TOKEN', JSON.stringify(token));
          setLoading(false);
          setUser(user);
          setToken(token);
        }else {
          await AsyncStorage.removeItem('@Happier-TOKEN');
          setLoading(false);
          setToken(null);
          setUser(null);
        }
      });

    return () => subscriber;
  },[])

  //LOADING INICIAL 
  if(loading) {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
        <ActivityIndicator size={50} color="#f36f6f"/>
      </View>
    )
  }
  return (
    <>
      {user ? <AppStack /> : <AuthStack />}
    </>
  );
}

export default Routes;