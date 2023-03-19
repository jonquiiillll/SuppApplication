import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator, Button, Image,FlatList, TouchableOpacity, Text, View } from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';
const apiUrl = 'http://localhost:3000/api/v1/users'
import React, { useState, useEffect} from "react"
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Swiper from "react-native-deck-swiper";

const Stack = createNativeStackNavigator();

const PostView = styled.View `
  padding: 15px;
  margin:15px;
  background-color: white;
  height: 250px;
  weight: 100px;
  border-radius: 20px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  margin-top: 10px;
`;

const PostText = styled.Text `
  font-size: 20px;
`;

export const Card = ({navigation}) => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  // const getData = async () => {
  //   try {
  //     const response = await fetch(
  //       apiUrl,
  //       {
  //         method: 'GET',
  //         headers: { 'Content-Type': 'application/json' }
  //       }
  //     )
  //
  //     const json = await response.json()
  //     setData(json.data)
  //   } catch (error) {
  //       console.error(error)
  //   } finally {
  //       setLoading(false)
  //   }
  // }
  //
  // useEffect(() => {
  //   getData()
  // }, [])
    {

  return (
    <View data={data}>

    {isLoading ? <ActivityIndicator/> : (
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
        <PostView>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen', {id: item.id, name: item.name})}>
          <View>
          <View>
            <Image source={{uri: item.avatar}} />
            <Text>{item.name}</Text>
          </View>
          <Text>Обо мне</Text>
          <Text>{item.description}</Text>
          <Text>{item.problems}</Text>
          <Button title="Отправить запрос"/>
          </View>
        </TouchableOpacity >
        </PostView>
        )}
      />
    )}

  </View>
);
}}
