import React, {useContext, createContext, useState} from 'react';
import {View, TextInput, StyleSheet, Button, TouchableOpacity, Text} from 'react-native'
const apiUrl = 'http://localhost:3000/api/v1/signup'
import styled from 'styled-components/native';
import { SignUpContext } from '../context/SignUpContext';
    {/* страница для регистрации имени пользователя */}

export const LoginScreen = ({navigation}) => {


    const {username, onChangeUsername} = useContext(SignUpContext)

  return (

    <ViewContainer>
        <HeaderSteps>
                <ProgressLine>
                    <LineViewActive></LineViewActive>
                    <LineView></LineView>
                    <LineView></LineView>
                    <LineView></LineView>
                </ProgressLine>
            <StepInfo>Шаг 1: Имя</StepInfo>
        </HeaderSteps>
        <UsernameInfo>
            <ContainerUsername>
            <TextInputView>
                <AnswerWindow> Как к тебе обращаться? </AnswerWindow>
                <TextInputAnswer
                    onChangeText={onChangeUsername}
                    value={username}
                    placeholder="Введи имя..."
                />
                </TextInputView>
                <ButtonContainer onPress={() => navigation.navigate('GenderSelectScreen')}>
                    <Button 
                        onPress={() => navigation.navigate('GenderSelectScreen')}
                        // onPress={signUp}
                        title="Далее"
                        color="#FFFFFF"
                        accessibilityLabel="Learn more"
                    />
                </ButtonContainer>
            </ContainerUsername>
      </UsernameInfo>
    </ViewContainer>
  );
};

const ViewContainer = styled.View `
display: flex;
align-items: center;

`
const ButtonContainer = styled.View `
display: flex;
position: absolute;
bottom: 20px;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 40px;

width: 89%;
margin-bottom: 12px;
background: #E55A39;
border-radius: 100px;
`
const TextInputView = styled.View `
diaplay: flex;
align-items: center;
margin-bottom:350px;
justify-content: center;
`
const TextInputAnswer = styled.TextInput `
font-weight: 600;
font-size: 33px;
margin-top: 30px;
line-height: 39px;
`
const HeaderSteps = styled.View `

`
const ContainerUsername = styled.View `
display: flex;
align-items: center;
justify-content: flex-end;
`
const AnswerWindow = styled.Text `
font-weight: 600;
font-size: 26px;
line-height: 31px;
font-style: normal;
color: #363636;
`
const StepInfo = styled.Text `
font-weight: 510;
font-size: 17px;
line-height: 20px;
color: #979797;
`
const UsernameInfo = styled.View `
width:100%;
height: 87%;
display: flex;
justify-content: flex-end;
`
const ProgressLine = styled.View `
display: flex;
margin-bottom: 13px;
width:90%;
margin-top: 63px;
align-items: center;
justify-content: space-between;
flex-direction: row;
`
const LineViewActive = styled.View `
width: 23%;
height: 4px;
background: #E55A39;
border-radius: 28px;
`
const LineView = styled.View `
width: 23%;
height: 4px;
background: #D9D9D9;
border-radius: 28px;
`


export default LoginScreen;
