import React, { useState,useContext, useEffect} from "react"
import styled from 'styled-components/native';
import { StyleSheet, Text, Image, Alert, View } from 'react-native';
import { AuthContext } from "./AuthContext";


export const AccountScreen = () => {
  const { jti } = useContext(AuthContext)
  return (
    <View>
      <Text>Привет</Text>
      <Text> {jti === '' ? '': 'Token'+ jti}</Text>
    </View>
  )
}
