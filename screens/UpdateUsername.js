import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
const updateUrl = 'http://localhost:3000/api/v1/signup'
import { Button } from 'react-native'

const UpdateUsername = () => {
    
    const { email } = useContext(AuthContext)
    const { username, onChangeUsername} = useContext(AuthContext)
    const [usernameUp, onChangeUsernameUp] = React.useState('')
    const doUpdate = async () => {

          try {
              const response = await fetch(
                  updateUrl,
                  {
                      method:'PATCH',
                      headers:{
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(
                        {
                          'user':
                            {
                                
                                'email': email,
                                'username': usernameUp,
                            }
                        }
                      )
                  }
              )
    
              const json = await response.json()
    
    
    
              if (typeof json['user'] !== 'undefined') {
                  onChangeUsernameUp(json.username)
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
      <Text>UpdateUsername</Text>
      <TextInput
        onChangeText={onChangeUsernameUp}
        value={usernameUp}
        placeholder={username}
    />
    </View>
    <Button onPress={doUpdate} title="Обновить"> </Button>
    </SafeAreaView>
  )
}

export default UpdateUsername