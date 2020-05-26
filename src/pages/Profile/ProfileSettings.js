import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  SectionList,
  Button,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import { MaterialIcons } from '@expo/vector-icons';


import API from '../../utils/API';


function ProfileSettings({ navigation }) {

  const [profile, setProfile] = useState({
    values: {
      name: '',
      password: ''
    }
  })

  useEffect(() => {

  }, []);
  let testeArray = [{ name: 'testeMap', id: 1 }]

  /* const openProfileSettings = event => {
    event.preventDefault();

    navigation.navigate('ProfileSettings');
  };
 */


  const handleChange = event => {

    event.persist();

    setProfile({
      ...profile,
      values: {
        ...profile.values,
        [event.target.name]: event.target.value
      }
    });
  };

  let arr = [{
    teste: {
      teste1: {
        id: 1,
        name: 'name1'
      },
      teste1: {
        id: 2,
        name: 'name2'
      }
    }
  }]
  return (

    <>
      <View>
        <View alignSelf='center'>
          <Text>
            Perfil do usuário
        </Text>
        </View>
        <View alignSelf='center'>
          <MaterialIcons size={100} name="face" />
        </View>

        <Text style={{ marginLeft: 10 }}>Email</Text>
        <TextInput
          style={{ height: 30, width: 340, alignSelf: 'center', borderColor: 'black', borderWidth: 1 }}
          onChange={handleChange}
          name="title"
          type="text"
          value={profile.values.email}
          variant="outlined"
        />
        <Text style={{ marginLeft: 10 }}>Senha</Text>
        <TextInput
          style={{ height: 30, width: 340, alignSelf: 'center', borderColor: 'black', borderWidth: 1, marginBottom: 10 }}
          onChange={handleChange}
          name="description"
          type="text"
          value={profile.values.password}
          variant="outlined"
        />

        <TouchableOpacity
          style={{
            height: 30,
            width: 340,
            alignSelf: 'center',
            marginBottom: 10,
            color: 'red'
          }}
        >
          <Button
            onPress={() => { }}
            title="Alterar"
          />
        </TouchableOpacity>

        {/* {
          arr.map(arr => {
            console.log(arr);
            <View>
              <Text                
                 key={arr.teste.teste1.id} 
              >
                {arr.teste.teste1.name}
                </Text>
            </View>
          })
        } */}
        {
          arr.map(arr=>{
            console.log(JSON.stringify(arr.teste.teste1))
          }),
          <Text>
          {JSON.stringify(arr)}
          </Text>
        }





      </View>
    </>
  );
  const styles = StyleSheet.create({

    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    searchInput: {
      flex: 1,
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 25,
      paddingHorizontal: 20,
      fontSize: 16,
      elevation: 2,
    }
  });
}


export default ProfileSettings;
