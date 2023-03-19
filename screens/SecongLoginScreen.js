import React, {useContext, useState} from 'react';
import {View, TextInput, StyleSheet, Button, TouchableOpacity, Text, SafeAreaView} from 'react-native'
import {AuthContext} from "../hooks/useAuth";
import {UserContext} from '../hooks/UserContext'
const apiUrl = 'http://localhost:3000/api/v1/signup'
import { SignUpContext } from '../context/SignUpContext';

    {/* страница для регистрации пароля и почты */}
    
export const SecondLoginScreen = ({navigation}) => {

    const {password, onChangePassword} = useContext(SignUpContext)
    const {password_confirmation, onChangePasswordConfirm} = useContext(SignUpContext)
    const {email, onChangeEmail} = useContext(SignUpContext)
    const {username, onChangeUsername} = useContext(SignUpContext)
    const {gender, onChangeGender} = useContext(SignUpContext)
    const {problem, onChangeProblem} = useContext(SignUpContext)
    const {topic, onChangeTopic}= useContext(SignUpContext)
    const {tag, onChangeTag} = useContext(SignUpContext)
    const {avatar, setAvatar}= useContext(SignUpContext)
    const {list, setList} = useContext(SignUpContext)
    

  const emptyUser = {
      id: 0,
      password: '',
      password_confirmation: '',
      email: '',
      username: '',
      topic: '',
      tag: [''],
      token: ''
  }
  const [user, setUser] = useState(emptyUser)


  function signUp() {
      signOut()
      doSignUp()
  }

  function signOut() {
      setUser(emptyUser)
  }

  const doSignUp = async () => {
    console.log(username, gender, email, tag, list, password, topic, password_confirmation)
    // let s = "[" + list[1].toString() + "]" 
    // console.log(s)
      try {
          const response = await fetch(
              apiUrl,
              {
                  method:'POST',
                  headers:{
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(
                    {
                      'user':
                        {
                            'password': password,
                            'password_confirmation': password_confirmation,
                            'email': email,
                            'username': username,
                            'gender': gender,
                            'topic': topic,
                            'tag_ids': list,
                            'topic': topic,
                            'avatar': avatar,
                        }
                    }
                  )
              }
          )

          const json = await response.json()



          if (typeof json['user'] !== 'undefined') {
              setUser(json.user)

              alert('You are successfully signed up as a user "' +
                    json.user.username +'"')
          } else if (typeof json['message'] !== 'undefined') {
              alert(json.message)
          } else console.log(json)
      } catch (error) {
          console.error(error)
      } finally {
      }
  }

  return (
    <SafeAreaView>
    <View>
    <TextInput
        onChangeText={onChangePassword}
        value={password}
        placeholder="Enter password"
    />
    <TextInput
        onChangeText={onChangePasswordConfirm}
        value={password_confirmation}
        placeholder="Enter password again"
    />
    <TextInput
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Enter email"
    />

    <Button
        // onPress={signUp}
        onPress={ () => { signUp(); navigation.navigate('FirstScreen'); }
           }
        title="Sign up"
        color="#841584"
        accessibilityLabel="Learn more"
    />
    </View>
    </SafeAreaView>
  );
};


export default SecondLoginScreen;
