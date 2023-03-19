import React, { createContext, useContext} from "react"
import styled from 'styled-components/native';
import axios from 'axios';
import {BASE_URL} from '../config.js'
import { StyleSheet, Text, Image, Alert, View } from 'react-native';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const register = (name, email) => {
    axios
    .post(`${BASE_URL}/users`, {
      name,
      email,
    })
      .then (res => {
        let userInfo = res.data;
      })
      .catch(e => {
        console.log(`reggister error ${e}`);
        console.log(userInfo);
      })
    }

  return (
    <AuthContext.Provider
    value={{register}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
