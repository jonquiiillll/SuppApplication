import React, {useContext, createContext, useState} from 'react';
import {View, TextInput, StyleSheet, Button, TouchableOpacity, Text} from 'react-native'
import {AuthContext} from "../hooks/useAuth";
import {UserContext} from '../hooks/UserContext'
import styled from 'styled-components/native';
import RadioButton from '../components/RadioButton';
const apiUrl = 'http://localhost:3000/api/v1/signup'
import { SignUpContext } from '../context/SignUpContext';

    {/* страница для регистрации гендера */}

export const GenderSelectScreen = ({navigation}) => {

    const {gender, onChangeGender} = useContext(SignUpContext)
    const data = [
        { id: "1", value: "Мужской" },
        { id: "2", value: "Женский" },
        { id: "3", value: "Другое" },
      ];
  return (
    <ViewGenderContainer>
        <HeaderSteps>
                <ProgressLine>
                    <LineViewActive></LineViewActive>
                    <LineViewActive></LineViewActive>
                    <LineView></LineView>
                    <LineView></LineView>
                </ProgressLine>
            <StepInfo>Шаг 2: Пол</StepInfo>
        </HeaderSteps>
        <ViewTouchGender>
        <AnswerWindow> Выбери пол </AnswerWindow>
            <RadioButton 
            onPress={onChangeGender}
            data={data} />
        <ButtonContainer>
            <ButtonStyle
                onPress={() => navigation.navigate('ProblemsSelectScreen')}
                title="Далее"
                color="#FFFFFF"
                accessibilityLabel="Learn more"
            />
        </ButtonContainer>
        </ViewTouchGender>
    {/* страница для регистрации */}
    </ViewGenderContainer>
  );
};

const AnswerWindow = styled.Text `
font-weight: 600;
font-size: 26px;
line-height: 31px;
font-style: normal;
color: #363636;
margin-bottom: 20px;
`
const ButtonStyle = styled.Button `
display: flex;
align-items: center;
`
const ButtonContainer = styled.View `
display: flex;
position: absolute;
bottom: -120px;
justify-content: center;
align-items: center;
padding: 10px 40px;
width: 90%;
margin-bottom: 12px;
background: #E55A39;
border-radius: 100px;
`
const HeaderSteps = styled.View `

`
const ViewGenderContainer = styled.View `
display: flex;
align-items: center;
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
const StepInfo = styled.Text `
font-weight: 510;
font-size: 17px;
line-height: 20px;
color: #979797;
`
const LineView = styled.View `
width: 23%;
height: 4px;
background: #D9D9D9;
border-radius: 28px;
`
const ViewTouchGender = styled.View `
margin-top: 200px;
display: flex;
width: 100%;
align-items: center;
`

export default GenderSelectScreen;
