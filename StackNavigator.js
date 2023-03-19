import { HomeScreen } from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useState, useEffect, useContext} from "react";
import { ChatScreen } from './screens/ChatScreen';
import { FirstScreen } from './screens/FirstScreen'
import LoginScreen from './screens/LoginScreen';
import {ProfileScreen} from "./screens/ProfileScreen"
import { SignUpState } from './context/SignUpState';
import { AuthState } from './screens/AuthState';
import { AuthContext } from './hooks/useAuth';
import GenderSelectScreen from './screens/GenderSelectScreen';
import { ProblemsSelectScreen } from './screens/ProblemsSelectScreen';
import SecondLoginScreen from './screens/SecongLoginScreen';
import { AvatarSelectScreen } from './screens/AvatarSelectScreen';
import {SignInScreen} from "./screens/SignInScreen"
import PasswordScreen from './screens/PasswordScreen';
import WaitingScreen from './screens/WaitingScreen';
import UpdateUsername from './screens/UpdateUsername';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { jti } = useContext(AuthContext)

  return (
    <SignUpState>
    <AuthState>
      <Stack.Navigator>
        {jti ? (
          <>
          <Stack.Screen name='Screen' component={HomeScreen} options={{ headerShown: false }}  />
          <Stack.Screen name="Profile" component={ChatScreen} options={{ headerShown: false }}  />
        </>
          ) : (
            <>
            <Stack.Screen name='FirstScreen' component={FirstScreen} options={{ headerShown: false }}  />
            <Stack.Screen name='PasswordScreen' component={PasswordScreen} options={{ headerShown: false }}  />
            <Stack.Screen name='SignInScreen' component={SignInScreen} options={{ headerShown: false }} />
            <Stack.Screen name='LoginScreen' component={LoginScreen}options={{ headerShown: false }} />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name='GenderSelectScreen' component={GenderSelectScreen}options={{ headerShown: false }} />
            <Stack.Screen name='ProblemsSelectScreen' component={ProblemsSelectScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='AvatarSelectScreen' component={AvatarSelectScreen}options={{ headerShown: false }} />
            <Stack.Screen name='SecondLoginScreen' component={SecondLoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='WaitingScreen' component={WaitingScreen} options={{ headerShown: false }} />
            <Stack.Screen name='UpdateUsername' component={UpdateUsername} options={{ headerShown: false }} />
            </>
          )}
      </Stack.Navigator>
      </AuthState>
    </SignUpState>
   
  );
};

export default StackNavigator;