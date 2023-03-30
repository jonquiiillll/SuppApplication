import React, { useContext, createContext, useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Button, FlatList, TouchableOpacity, Text } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AuthContext } from "../hooks/useAuth";
import { UserContext } from '../hooks/UserContext'
import styled from 'styled-components/native';
import RadioButton from '../components/RadioButton';
const apiUrl = 'http://localhost:3000/api/v1/signup'
const apiProblems = 'http://localhost:3000/tags'
import { SignUpContext } from '../context/SignUpContext';

{/* страница для регистрации гендера */ }

export const ProblemsSelectScreen = ({ navigation }) => {

  // const {password1, onChangePassword1} = useContext(SignUpContext)
  // const {password2, onChangePassword2} = useContext(SignUpContext)
  // const {email, onChangeEmail} = useContext(SignUpContext)
  // const { topic, onChangeTopic } = useContext(SignUpContext)
  
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const [isSelected, setSelection] = useState(false);
  const [checkboxState, setCheckboxState] = React.useState(false)

  const {list, setList} = useContext(SignUpContext)

  const getData = async () => {
    try {
      const response = await fetch(
        apiProblems,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      )

      const json = await response.json()
      setData(json.data)
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
    <ViewGenderContainer>
      <HeaderSteps>
        <ProgressLine>
          <LineViewActive></LineViewActive>
          <LineViewActive></LineViewActive>
          <LineViewActive></LineViewActive>
          <LineView></LineView>
        </ProgressLine>
        <StepInfo>Шаг 3: Проблемы</StepInfo>
      </HeaderSteps>
      <AnswerWindow>Выбери темы, которые хочешь обсудить</AnswerWindow>
      <ViewProblems>
        <FlatList
          contentContainerStyle={{ justifyContent: 'flex-start', flexDirection: 'column'}}
          // loop={false}
          numColumns={3}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <BouncyCheckbox
              size={6}
              fillColor="black"
              unfillColor="#FFFFFF"
              text={item.name}
              value={item.id}
              textStyle={{
                textDecorationLine: "none",
              }}
              style={{
                paddingTop: 9,
                paddingBottom: 9,
                paddingRight: 17,
                marginTop: 8,
                marginRight: 3,
                paddingLeft: 0,
                borderRadius: 47,
                color: "black",
                fontSize: 12,
                borderWidth: 1,
                borderColor: '#D8D8D8',
                alignSelf: 'flex-start',
                // padding: 12,
                paddingLeft: 15,
              }}

              innerIconStyle={{ borderWidth: 0 }}
              onPress={() => {
                setList([...list, item.id]);
                console.log(list)
            }}
            />
          )}
        />
      </ViewProblems>

      <ButtonContainer>
        <Button
          onPress={() => {navigation.navigate('AvatarSelectScreen'); console.log(list)}}
          // onPress={signUp}
          title="Далее"
          color="#FFFFFF"
          accessibilityLabel="Learn more"
        />
      </ButtonContainer>
      {/* страница для регистрации */}
    </ViewGenderContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: "wrap"
  },
  unselected: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 17,
    marginTop: 8,
    marginRight: 3,
    paddingLeft: 0,
    borderRadius: 47,
    color: "black",
    fontSize: 12,
    backgroundColor: "#FBFBFB",
    borderWidth: 1,
    borderColor: '#D8D8D8',
    alignSelf: 'flex-start',
    // padding: 12,
    paddingLeft: 15,
  },
  selected: {
    backgroundColor: "#7CA1B4",
  },

});
const AnswerWindow = styled.Text`
font-weight: 500;
font-size: 26px;
margin-top: 40px;
margin-left: 10px;
line-height: 31px;
font-style: normal;
color: #363636;
`
const ViewWrap = styled.View`
display: flex;

flex-direction: row;
flex-wrap: wrap;
`

const Box = styled.View`
display: flex;
flex-direction: row;
width: 100%;
`
const ViewProblems = styled.View`
margin-left: 15px;
margin-top: 20px;
width: 99%;
margin-bottom: 45px;
`
const ProblemBox = styled.View`

`
const ButtonContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 40px;
width: 90%;
margin-bottom: 12px;
background: #E55A39;
border-radius: 100px;
`
const HeaderSteps = styled.View`

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

export default ProblemsSelectScreen;
