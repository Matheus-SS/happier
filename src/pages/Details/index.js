import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; 

function Details({route}) {
  const {item} = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#f36f6f', paddingHorizontal:10}}>
      <View style={{height:'50%', marginTop:10}}>
        <Image 
          source={{uri:item.picture.large}} 
          style={{height:'100%',width:'100%', borderRadius:10}}
          resizeMode="cover"
        />
      </View>
      <View style={{marginTop: 20,paddingHorizontal:10}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:20, fontWeight:"bold", color:'#fff'}}>{item.name.first}{' '}</Text>
          <Text style={{fontSize:20, fontWeight:"bold", color:'#fff'}}>{item.name.last}</Text>
        </View>
        
        <View style={{flexDirection:'row', marginVertical:10}}>
          <Text style={{fontSize:20, fontWeight:"bold", color:'#fff'}}>{item.location.country},{' '}</Text>
          <Text style={{fontSize:18, fontWeight:"bold", color:'#fff'}}>{item.location.city}</Text>
        </View>

        <Text style={{fontSize:20, fontWeight:"bold", color:'#fff'}}>{item.email}</Text>
      </View>

      <View style={{alignItems:'flex-start', marginTop:40}}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={{fontWeight:'bold'}}>Go back</Text>
        </TouchableOpacity> 
      </View>
    </SafeAreaView> 
  )
}
export default Details;
