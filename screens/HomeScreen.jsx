import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator, FlatList, Button, Text, ImageBackground, TouchableOpacity, Image, Alert, View, SafeAreaView } from 'react-native';
import { Post } from '../components/Post';
import { Card } from '../components/Card';
import { ChatScreen } from '../screens/ChatScreen';
import styled from 'styled-components/native';
import { UserContext, UserState } from '../hooks/UserContext'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const apiUrl = 'http://localhost:3000/api/v1/signup'
import React, { useState, useEffect, useContext } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen'
import { AuthContext } from './AuthContext';
const Tab = createBottomTabNavigator();
import RadioButton from '../components/RadioButton';
import SelectPerson from '../components/SelectPerson';
const authUrl = 'http://localhost:3000/users/'

export const HomeScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true)
  const { jti } = useContext(AuthContext)
  const { id } = useContext(AuthContext)
  const { username } = useContext(AuthContext)
  const { topic } = useContext(AuthContext)
  const { avatar } = useContext(AuthContext)
  const info = [
    { value: 'Всё равно' },
    { value: 'Женщина' },
    { value: 'Мужчина' },
  ];
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(
        authUrl + id,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      )

      const json = await response.json()
      setData(json.data)
      console.log(json.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <ViewContainer>
      <GreetingContainer>
        <ImageBackground source={require('../assets/homepage.png')} style={{ height: 436, width: 400, resizeMode: 'cover', overflow: 'hidden' }} imageStyle={{ borderRadius: 30 }} >
          <ViewHeader>
            <ViewNotification>
              <Image source={require('../assets/notification.png')} style={{ height: 19, width: 17 }} />
            </ViewNotification>
            <TextGreeting>Привет, {username}!</TextGreeting>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
              <Image
                source={{
                  uri: `data:image/jpeg;base64,${avatar}`,
                }}
                style={{ height: 37, width: 37, borderRadius: 30 }}
              />
            </TouchableOpacity>
          </ViewHeader>
          <ViewGreeting>
            <TextHint>Найди своего собеседника</TextHint>
            <ButtonHint>
              <Image source={require('../assets/que.png')} style={{ height: 21, width: 12 }} />
            </ButtonHint>
          </ViewGreeting>
        </ImageBackground>

      </GreetingContainer>
      <ViewProblems>
        <ViewTitle>
          <TextBig>Проблемы</TextBig>
          <ViewNotification>
          <Image source={require('../assets/edit.png')} style={{ height: 18, width: 18 }} />
          </ViewNotification>
        </ViewTitle>
        <ViewTopic>

          <FlatList
            contentContainerStyle={{ justifyContent: 'flex-start', flexDirection: 'column' }}
            data={data}
            numColumns={3}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <ProblemBuble>
                <TextItem > {item.name} </TextItem>
              </ProblemBuble>
            )}
          />

        </ViewTopic>
      </ViewProblems>
      <ViewGender>
        <TextBig2>С кем хочешь поговорить?</TextBig2>
        <SelectPerson
        
          info={info} />
      </ViewGender>
      <ButtonView>
        <ButtonContainer onPress={() => navigation.navigate('GenderSelectScreen')}>
          <Button
            onPress={() => navigation.navigate('WaitingScreen')}
            title="Найти собеседника"
            color="white"
            accessibilityLabel="Learn more"
          />
        </ButtonContainer>
      </ButtonView>

    </ViewContainer>
  )
}


const ViewUser = styled.View`
display: flex;
align-items: center;
flex-direction: row;
`

const ButtonView = styled.View`
position: absolute;
bottom: 90px;
width: 100%;
display: flex;
align-items: center;
`
const ViewGender = styled.View`
border-radius: 20px;
margin-left: 6px;
margin-right: 6px;
background: white;
margin-top: 5px;
padding-bottom: 22px;

`
const ViewTitle = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const ViewProblems = styled.View`
background: white;
padding: 14px;
padding-top: 18px;
border-radius: 20px;
margin-left: 6px;
margin-right:6px;
margin-top: 5px;
height: auto;
`
const ViewTopic = styled.View`
border-radius: 20px;
width: 100%;
display: flex;
align-items: flex-start;
flex-direction: row;
`
const ProblemBuble = styled.View`
background: #444444;
border: 1.07143px solid #EDE9E9;
border-radius: 60px;
padding-left: 17px;
padding-right: 19px;
padding-top: 10px;
margin-bottom: 10px;
padding-bottom: 10px;
margin-right: 4px;
`
const TextItem = styled.Text`
font-weight: 500;
font-size: 15px;
color: #FFFFFF;
`
const TextBig = styled.Text`
font-weight: 600;
font-size: 19px;
color: #363636;
margin-bottom: 20px;
`
const TextBig2 = styled.Text`
font-weight: 600;
margin-left: 16px;
margin-top:20px;
font-size: 19px;
color: #363636;
margin-bottom: 20px;
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

const ViewGreeting = styled.View`
margin: 17px;
color: #FFFFFF;
width: 93%;
display: flex;
align-items: flex-end;
position: absolute;
justify-content: space-between;
flex-direction: row;
bottom: 10px;
`
const GreetingContainer = styled.View`
border-radius: 20px;
width: 100%;
margin-left:-5px;
`
const TextHint = styled.Text`
font-size: 32px;
font-weight: 600;
color: #FFFFFF;
`
const ViewContainer = styled.View`
background: #444444;
width: 100%;
height: 110%;
margin-top: -10px;
`
const ViewHeader = styled.View`
width: 95%;
margin: 10px;
margin-top: 60px;
padding: 10px;
align-items: center;
justify-content: space-between;
background: #FFFFFF;
display:flex;
border-radius: 30px;
flex-direction: row;
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
background: #444444;
border-radius: 30px;
align-items: center;
justify-content: center;
`
const ButtonHint = styled.View`
width: 37px;
height: 37px;
background: #FFFFFF;
border-radius: 30px;
align-items: center;
justify-content: center;
`
const TextUser = styled.Text`
flex:none;
font-size: 20px;
display:flex;
`

const ImageAvatar = styled.Image`
  width: 48px;
  border-radius: 30px;
  margin: 20px;
  height: 48px;
  flex: none;
`;
