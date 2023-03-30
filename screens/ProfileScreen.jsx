import React, { useState, useEffect, useContext } from "react"
import styled from 'styled-components/native';
import { StyleSheet, Text, Image, Alert, Button, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { UserContext, UserState } from '../hooks/UserContext'
import { AuthContext } from "./AuthContext";
const UserLogout = 'http://localhost:3000/api/v1/logout'

export const ProfileScreen = ({ navigation }) => {
  const { email, onChangeEmail } = useContext(AuthContext)
  const { password, onChangePassword } = useContext(AuthContext)
  const [userId, setUserId] = React.useState(0)
  // const userContext = useContext(UserState)
  const { jti, setJti } = useContext(AuthContext)
  const { userName, setUserName } = useContext(AuthContext)
  const { username } = useContext(AuthContext)
  const { avatar, setAvatar } = useContext(AuthContext)
  const { id, setId } = useContext(AuthContext)

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

  const signOut = async () => {
    try {
      const response = await fetch(
        UserLogout,
        {
          method: 'DELETE',
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
      // let json = await response.json() // получаем тело ответа

      // if (typeof json['jti'] !== 'undefined') {
      setJti('')
      setUserId(0)
      setId('')
      setUserName('')
      setAvatar('')
      setId('')
      onChangeEmail('')
      onChangePassword('')
      saveData('')
      alert('You are successfully sign out')
      // } else if (typeof json['message'] !== 'undefined') {
      // alert(json.message)
      // } else console.log(json)
    } catch (error) {
      alert(error)
    } finally { }
  }

  return (
    <ViewAll>
      <SafeAreaView>
        <ViewHeader>
          <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
            <ViewNotification>
            <Image source={require('../assets/backk.png')} style={{ height: 15, width: 10}} />          
            </ViewNotification>
          </TouchableOpacity>
          <TextGreeting>Профиль</TextGreeting>
          <TouchableOpacity onPress={() => { signOut(); navigation.navigate('FirstScreen') }}>
            <ViewNotification></ViewNotification>
          </TouchableOpacity>
        </ViewHeader>
        <InfoView>
          <Image
            source={{
              uri: `data:image/jpeg;base64,${avatar}`,
            }}
            style={{ height: 110, width: 110, borderRadius: 60 }}
          />
          <InfoTextBig>{username}</InfoTextBig>
          <InfoTextGreyBig>изменить фото профиля</InfoTextGreyBig>
        </InfoView> 
        <SetttingsContainer>
          <H3Text>Настройки аккаунта</H3Text>
          <ViewSettings>
            <TouchableOpacity onPress={() =>  navigation.navigate('UpdateUsername')}>
            <ViewItem>
              <InfoText>Имя</InfoText>
              <ViewItemSelect>
                <InfoTextGrey>{username}</InfoTextGrey>
                <Image source={require('../assets/row.png')} style={{ height: 12, width: 7}} />          
              </ViewItemSelect>
            </ViewItem>
            </TouchableOpacity>
            <Line></Line>
            <ViewItem>
              <InfoText>Email</InfoText>
              <ViewItemSelect>
              <InfoTextGrey>{email}</InfoTextGrey>
                <Image source={require('../assets/row.png')} style={{ height: 12, width: 7}} />          
              </ViewItemSelect>
            </ViewItem>
            <Line></Line>
            <ViewItem>
              <InfoText>Пароль</InfoText>
              <ViewItemSelect>
              <InfoTextGrey>{password}</InfoTextGrey>
                <Image source={require('../assets/row.png')} style={{ height: 12, width: 7}} />          
              </ViewItemSelect>
            </ViewItem>
          </ViewSettings>
        </SetttingsContainer>
        <SetttingsContainerNotification>
          <H3Text>Уведомления</H3Text>
          <ViewSettings>
            <ViewItem>
              <InfoText>Push-уведомления</InfoText>
              <ViewItemSelect>
                <InfoText></InfoText>
                <Image source={require('../assets/row.png')} style={{ height: 12, width: 7}} />          
              </ViewItemSelect>
            </ViewItem>
            <Line></Line>
            <ViewItem>
              <InfoText>Почта</InfoText>
              <ViewItemSelect>
                <InfoText></InfoText>
                <Image source={require('../assets/row.png')} style={{ height: 12, width: 7}} />          
              </ViewItemSelect>
            </ViewItem>
          </ViewSettings>
        </SetttingsContainerNotification>
        <ViewButton>
        <TextDelete>Удалить аккаунт</TextDelete>
        </ViewButton>
      </SafeAreaView>
    </ViewAll>
  )
}

const ViewHeader = styled.View`
width: 95%;
margin: 10px;
padding: 10px;
align-items: center;
justify-content: space-between;
background: #FFFFFF;
display:flex;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
border-radius: 30px;
flex-direction: row;
`
const InfoView = styled.View`
width: 100%;
display: flex;
align-items: center;
margin-top: 45px;
`
const TextDelete = styled.Text`
color: #E55A39;
font-weight: 500;
font-size: 16px;
`
const ViewButton = styled.View`
width: 100%;
margin-top: 10px;
display: flex;
align-items: center;
`

const Line = styled.View`
width: 100%;
border: 1px solid #DFDFDF;
border-radius: 1px;
margin-top: 14px;
`
const ViewItemSelect = styled.View`
display: flex;
align-items: baseline;
flex-direction: row;
`
const ViewItem = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const ViewSettings = styled.View`
width: 95%;
padding-left: 15px;
padding-right: 15px;
padding-bottom: 22px;
padding-top: 3px;
margin-top: 15px;
background: #F3F3F3;
border-radius: 20px;
`
const ViewAll = styled.View`
background: white;
height: 100%;
`
const SetttingsContainer = styled.View`
width: 100%;
margin: 10px;
margin-top: 30px;
`
const SetttingsContainerNotification = styled.View`
width: 100%;
margin: 10px;
margin-top: -8px;
`
const InfoText = styled.Text`
font-size: 16px;
margin-top: 14px;
font-weight: 500;
margin-right: 15px;
color: #363636;
`
const InfoTextBig = styled.Text`
font-size: 19px;
margin-top: 25px;
font-weight: 500;
margin-right: 15px;
color: #363636;
`
const InfoTextGreyBig = styled.Text`
font-size: 14px;
margin-top: 5px;
font-weight: 400;
margin-right: 15px;
color: #989898;s
`
const InfoTextGrey = styled.Text`
font-size: 16px;
margin-top: 14px;
font-weight: 400;
margin-right: 15px;
color: #989898;s
`
const H3Text = styled.Text`
font-size: 23px;
margin-top: 25px;
font-weight: 500;
color: #363636;
`


const TextGreeting = styled.Text`
font-size: 19px;
font-weight: 500;
display:flex;
color: #444444;
`
const ViewNotification = styled.View`
width: 37px;
height: 37px;
display: flex;

justify-content: center;
background: #444444;
border-radius: 30px;
padding-left: 12px;
`
