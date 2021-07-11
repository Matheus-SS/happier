import React, { useContext, useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, FlatList,Image, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../../helpers/AuthProvider';
import axios from 'axios';

function Home() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const {logout,user} = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    await logout();
  }

  useEffect(() => {
    async function loadUsers() {
      const {data} = await axios.get(`https://randomuser.me/api/?results=6&page=${page}`);
      setUsers((oldValue) => [...oldValue, ...data.results]);
      setLoading(false);
    } 
    loadUsers();
  },[page]);
  
  function HandleNextPage() {
    setPage(oldValue => oldValue + 1);
  }

  return (
    <SafeAreaView style={{flex:1, paddingHorizontal:20}}>
      <View style={{marginTop:10, flexDirection:'row',justifyContent:'space-between'}}>
        <View>
          <Text style={{fontSize:18, color:"#000"}}>Bem vindo,</Text>
          <Text style={{color:'#f36f6f', fontWeight:'bold', fontSize:20}}>
            {user.displayName}
          </Text>
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={{color:'#f36f6f', fontWeight:'bold', fontSize:20}}>Sair</Text>
        </TouchableOpacity>
      </View>

      {loading?(
          <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
            <ActivityIndicator size={50} color="#f36f6f"/>
          </View>
        ):(
          <View style={{
              flex:1, 
              marginTop:20,
              justifyContent:'center',
            }}>
            <FlatList
              style={{flex:1}}
              data={users}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{justifyContent:'center'}}
              keyExtractor={item => item.login.uuid}
              contentContainerStyle={{paddingBottom:10}}
              renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details',{
                  item
                })} 
                style={{
                    margin:10,
                    backgroundColor:'#f36f6f',
                    borderRadius:10,
                    width:'45%'
                  }}>
                  <View>
                    <View style={{height:80}}>
                      <Image 
                        source={{uri:item.picture.large}} 
                        style={{height:'100%',width:'100%', borderTopRightRadius:8}}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center', padding:5}}>
                      <Text style={{color:"#fff", fontWeight:'bold'}}>{item.name.first}</Text>
                    
                      <Text style={{marginLeft:5,color:"#fff",fontWeight:'bold'}}>{item.name.last}</Text>
                    </View>
                  </View>
                </TouchableOpacity> 
              )}
              ListFooterComponent={(
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity onPress={HandleNextPage}>
                    <Text style={{fontSize:20, fontWeight:"bold", color:'#f36f6f'}}>View more</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
      
    </SafeAreaView>
  );
}

export default Home;