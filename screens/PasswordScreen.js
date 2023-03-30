import React, { useState, useContext, useEffect, createContext} from "react"
import styled from 'styled-components/native';
import { SafeAreaView, Text, View, TextInput, Button, Image, StyleSheet } from 'react-native'
const apiUrl = 'http://localhost:3000/api/v1/login'
const UserLogout = 'http://localhost:3000/api/v1/logout'
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import {UserContext, UserState} from '../hooks/UserContext'
import { AuthContext } from "./AuthContext";

export const PasswordScreen = ({ navigation, route }) => {

    const {email, onChangeEmail} = useContext(AuthContext)
    const {password, onChangePassword} = useContext(AuthContext)
    const [userId, setUserId] = React.useState(0)
    const [userEmail, setUserEmail] = React.useState('')
    const userContext = useContext(UserState)
    const {list, setList} = useContext(AuthContext)
  
    const {jti, setJti} = useContext(AuthContext)
    const {userName, setUserName} = useContext(AuthContext)
    const {id, setId} = useContext(AuthContext)
    const {avatar, setAvatar} = useContext(AuthContext)
  

    function saveData() {
        _storeData = async () => {
            try {
                await AsyncStorage.setItem('jti', jti);
                console.log(_storeData)
                const tok = AsyncStorage.getItem('jti')
                console.log('Saved', jti)
            } catch (error) {
                console.log(error) // Error saving data
            }
        }
    }
  
    function signIn() { doSignIn() }

    const doSignIn = async() => {
      
        try {
            const response = await fetch(
                apiUrl,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
  
                    body: JSON.stringify
                    (
                    {
                      'user':
                      {
                        'email': email,
                        'password': password,
                      }
                    }
                  )
                }
            )
            let json = await response.json() // получаем тело ответа
  
            if (typeof json['jti'] !== 'undefined') {
                onChangeEmail(json.email)
                setList(json.tag_ids)
                onChangePassword(json.password)
                setUserName(json.username)
                setId(json.id)
                setJti(json.jti)
                setAvatar(json.avatar)
                saveData(json.jti)
              //   UserState.setCurrentUser('name')
                alert('You are successfully logged in as a user "' +
                      json.username +'"')
            } else if (typeof json['message'] !== 'undefined') {
                alert(json.message)
            } else console.log(json)
        } catch (error) {
            alert(error)
        } finally {}
    }
   
  return (
    <SafeAreaView>
      <ViewSelectEmail>

        <ViewText>
          <TextH3> Введи свой пароль</TextH3>
          <TextInputAnswer
          onChangeText={onChangePassword}
          value={password}
          placeholder="Enter password"
          />
        </ViewText>

      </ViewSelectEmail>
      <ButtonView>
        <ButtonContainer onPress={() => navigation.navigate('GenderSelectScreen')}>
            <Button
            onPress={ () => {signIn(); navigation.navigate('HomeScreen') }}
            title="Войти"
            color="white"
            accessibilityLabel="Learn more"
        />  
        </ButtonContainer>
      </ButtonView>
    </SafeAreaView>
  )
}

export default PasswordScreen

const LineView = styled.View`
width: 23%;
height: 4px;
background: #D9D9D9;
border-radius: 28px;
`
const ViewText = styled.View`
width: 100%;
align-items: center;
margin-top: 300px;
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
