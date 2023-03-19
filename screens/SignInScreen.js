import React, { useState, useContext, useEffect, createContext } from "react"
import styled from 'styled-components/native';
import { SafeAreaView, Text, View, TextInput, Button, Image, StyleSheet } from 'react-native'
const apiUrl = 'http://localhost:3000/api/v1/login'
const UserLogout = 'http://localhost:3000/api/v1/logout'
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { UserContext, UserState } from '../hooks/UserContext'
import { AuthContext } from "./AuthContext";


export const SignInScreen = ({ navigation }) => {

  const { email, onChangeEmail } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <ViewSelectEmail>

        <ViewText>
          <TextH3> Введи свою почту</TextH3>
          <TextInputAnswer
            onChangeText={onChangeEmail}
            value={email}
            placeholder="example@mail.ru..."
          />
        </ViewText>

      </ViewSelectEmail>
      <ButtonView>
        <ButtonContainer onPress={() => navigation.navigate('GenderSelectScreen')}>
          <Button
            onPress={() => navigation.navigate('PasswordScreen')}
            title='Далее'
            color="white"
            accessibilityLabel="Learn more"
          />
        </ButtonContainer>
      </ButtonView>
    </SafeAreaView>

  )
}

const LineView = styled.View`
width: 23%;
height: 4px;
background: #D9D9D9;
border-radius: 28px;
`
const ViewText = styled.View`
width: 100%;
align-items: center;
margin-top: 100px;
`
const TextInputAnswer = styled.TextInput `
font-weight: 600;
font-size: 33px;
margin-top: 30px;
line-height: 39px;
`
const TextH3 = styled.Text`
font-weight: 600;
font-size: 26px;
line-height: 31px;
color: #363636;
`
const ButtonView = styled.View`
position: absolute;
bottom: 25px;
width: 100%;
display: flex;
align-items: center;
`
const ViewSelectEmail = styled.View`
width: 100%;
align-items: center;
display: flex;
height: 100%;
`
const ButtonContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 40px;
width: 96%;
margin-bottom: 12px;
background: #E55A39;
border-radius: 100px;
`
