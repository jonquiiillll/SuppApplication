import React, { useState, useEffect} from "react"
import styled from 'styled-components/native';
import { StyleSheet, Text, Button, Image, ImageBackground, Alert, View } from 'react-native';

export const FirstScreen = ({navigation}) => {
  return (
    <ViewGreeting>
      <ImageBackgroundView source={require('../assets/greeting.png')} >
        <ViewButtonContaier> 
          <ViewButton>
            <ButtonStyle title="Войти по электронной почте" color="#EFEFEF"  onPress={() => navigation.navigate('SignInScreen')}/>
          </ViewButton>
          <ViewButton>
            <ButtonStyle title="Зарегистрироваться" color="#EFEFEF" onPress={() => navigation.navigate('LoginScreen')}/>
          </ViewButton>
        </ViewButtonContaier>
      </ImageBackgroundView>
    </ViewGreeting>
  )
}

const ViewGreeting = styled.View `
display: flex;
justify-content: flex-end;
align-items: end;
width:100%;
height:100%;
backround-image: url('../assets/greeting.png');
`

const ImageBackgroundView = styled.ImageBackground `
display: flex;
align-items: end;
width: 100%;
height: 100%;
align-items: center;
justify-content: flex-end;
`
const ButtonStyle = styled.Button `
display: flex;
text-color: #EFEFEF;
font-size: 20px;
justify-content: flex-end;
align-items: end;
`
const ViewButtonContaier = styled.View `
background: #EFEFEF;
border-top-left-radius: 24px;
border-top-right-radius: 24px;
width: 100%;
display: flex;
padding-bottom: 23px;
padding-top: 23px;
align-items: center;

`
const ViewButton = styled.View `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 40px;
width: 90%;
margin-bottom: 12px;
background: #363636;
border-radius: 100px;
`


