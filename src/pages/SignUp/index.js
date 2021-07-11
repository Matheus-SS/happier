import React, { useState, useContext, useEffect } from 'react'; 
import { useNavigation, useIsFocused } from '@react-navigation/native'; 
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {AuthContext} from '../../helpers/AuthProvider';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigation = useNavigation();
  const {register,error,setError} = useContext(AuthContext);

  function onSignUp() {
    register(name, email,password);
  }
  
  const focused = useIsFocused();
  useEffect(() => {
    if(focused) {
      setError(null);
    }
  },[]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize:30,fontWeight:'bold',color:'#f36f6f'}}>Create account</Text>
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
          onChangeText={(value) => setName(value)}
          placeholder="Name"
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
        onPress={onSignUp}
        >
          <Text style={{
            textAlign:'center',
            fontWeight: 'bold',
            color:'#fff',
            fontSize:16,
          }}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:'flex-start',width:'100%',paddingHorizontal:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
          <Text>Go back</Text>
        </TouchableOpacity> 
      </View>

      <View style={{marginTop:10}}>
        <Text style={{color:'red'}}>{error && error.type === 'register' && error.message}</Text>
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
