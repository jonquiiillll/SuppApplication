import React, { createContext, useContext} from "react"
import styled from 'styled-components/native';
import { StyleSheet, Text, Image, Alert, View } from 'react-native';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
    value={{
      user:"",
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
