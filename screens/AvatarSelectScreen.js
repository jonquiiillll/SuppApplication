import React, { useContext, useState, useEffect } from "react"
import styled from 'styled-components/native';
import { StyleSheet, Text, Image, Alert, View, Button, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import { SignUpContext } from '../context/SignUpContext';

export const AvatarSelectScreen = ({ navigation }) => {

  const { avatar, setAvatar } = useContext(SignUpContext)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true
    });

    console.log(result.base64);
    console.log(result);
    console.log(result.assets[0].uri);

    if (!result.canceled) {
      setAvatar(result.base64);
    }
  };

  return (

    <View >
      <ViewGenderContainer>
        <HeaderSteps>
          <ProgressLine>
            <LineViewActive></LineViewActive>
            <LineViewActive></LineViewActive>
            <LineViewActive></LineViewActive>
            <LineViewActive></LineViewActive>
          </ProgressLine>
          <StepInfo>Шаг 4: Аватар</StepInfo>
        </HeaderSteps>

        <ViewAvatar>
          <TouchableOpacity onPress={pickImage} >
            {avatar && <ImageAvatar
              source={{
                uri: `data:image/jpeg;base64,${avatar}`,
              }}

            />}
            {/* <Text> {jti === '' ? '' : 'Token' + jti}</Text> */}

           <ImagePlus source={require('../assets/plus.png')}></ImagePlus> 
          </TouchableOpacity>

        </ViewAvatar>
        <TextSkip>пропустить</TextSkip>
        <ButtonContainer>
          <ButtonStyle
            onPress={() => navigation.navigate('SecondLoginScreen')}
            title="Закончить регистрацию"
            color="#FFFFFF"
            accessibilityLabel="Learn more"
          />
        </ButtonContainer>

      </ViewGenderContainer>
    </View>

  );
}

const ImageAvatar = styled.Image`
width: 100%;
height: 100%;
border-radius: 20px,
z-index: 10;
`
const HeaderSteps = styled.View`

`
const ImagePlus = styled.Image`
width: 131px;
height: 131px;
position: absolute;
bottom: 180px;
left: 105px;

`
const TextSkip = styled.Text`
font-size: 17px;
line-height: 20px;
text-decoration-line: underline;
margin-bottom: 15px;
color: #979797;
`
const ViewAvatar = styled.View`
width: 95%;
margin-top: 50px;
height: 65%;
justify-content: center;
margin-bottom: 25px;
background: #FCFCFC;
border: 2px dashed #C9C9C9;
border-radius: 20px;
`
const ButtonContainer = styled.View`
display: flex;

justify-content: center;
align-items: center;
padding: 10px 40px;
width: 90%;
margin-bottom: 12px;
background: #E55A39;
border-radius: 100px;
`
const ButtonStyle = styled.Button`
display: flex;
align-items: center;
`
const StepInfo = styled.Text`
font-weight: 510;
font-size: 17px;
line-height: 20px;
color: #979797;
`
const LineView = styled.View`
width: 23%;
height: 4px;
background: #D9D9D9;
border-radius: 28px;
`
const ViewGenderContainer = styled.View`
display: flex;
align-items: center;
`
const ProgressLine = styled.View`
display: flex;
margin-bottom: 13px;
width:90%;
margin-top: 63px;
align-items: center;
justify-content: space-between;
flex-direction: row;
`
const LineViewActive = styled.View`
width: 23%;
height: 4px;
background: #E55A39;
border-radius: 28px;
`