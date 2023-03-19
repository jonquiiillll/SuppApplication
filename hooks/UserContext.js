import React, { createContext, useContext, useState} from "react"
import styled from 'styled-components/native';

export const UserContext = createContext(null);

export const UserState = ({children}) => {
    const user = 'abob'
    const initialUser = {
      user: ''
    }
    const [currentUser, setCurrentUser] = useState(initialUser)

    function getUser() {
        return currentUser.user
    }
}



