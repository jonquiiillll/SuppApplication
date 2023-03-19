import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useState, useEffect} from "react"

const Stack = createNativeStackNavigator();

const PostView = styled.View `
  padding: 15px;
  margin:15px;
  background-color: white;
  height: 100px;
  weight: 100px;
  border-radius: 20px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  margin-top: 70px;
`;

const PostText = styled.Text `
  font-size: 20px;
`;

export const Post = ({navigation, name}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
    <PostView>
    <PostText>{name}</PostText>
    </PostView>
  </TouchableOpacity>
);
};
