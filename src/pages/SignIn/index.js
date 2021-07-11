import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native' 
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {AuthContext} from '../../helpers/AuthProvider';

export default function SignIn() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigation = useNavigation();
  const {login,error} = useContext(AuthContext);

  const handleSubmit = async (username, passWord) => {
    await login(username, passWord);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize:30,fontWeight:'bold',color:'#f36f6f'}}>Welcome to Happier</Text>
      </View>
      <View style={{
        width:'100%',
        backgroundColor:'#fff',
        padding:20,
      }}>
        <View style={{
          backgroundColor:'#eee',
          borderRadius:8,
          padding:10,
          borderColor: "#ddd",
          borderWidth:3,
          marginVertical:5,
        }}>
          <TextInput style={{
            paddingHorizontal:10,
          }}
          onChangeText={(value) => setEmail(value)}
          placeholder="Email"
          />
        </View>

        <View style={{
          backgroundColor:'#eee',
          borderRadius:8,
          padding:10,
          borderColor: "#ddd",
          borderWidth:3,
          marginVertical:5,
        }}>
          <TextInput style={{
            paddingHorizontal:10,
          }}
          secureTextEntry
          placeholder="Password"
          onChangeText={(value) => setPassword(value)}
          />
        </View>

        <TouchableOpacity style={{
          width:'100%',
          backgroundColor:'#f36f6f',
          padding: 15,
          borderRadius: 8,
          marginTop:10,
        }}
        onPress={() => handleSubmit(email, password)}
        >
            <Text style={{
              textAlign:'center',
              fontWeight: 'bold',
              color:'#fff',
              fontSize:16,
            }}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:'flex-end',width:'100%',paddingHorizontal:20}}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text>create new account</Text>
        </TouchableOpacity> 
      </View>

      <View style={{marginTop:10, paddingHorizontal:20}}>
        <Text style={{color:'red'}}>{error && error.type === 'login' && error.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
  },
});
