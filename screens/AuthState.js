import React, {useState} from "react";
import { AuthContext } from "./AuthContext";

export const AuthState = ({children}) => {
    const [jti, setJti] = useState('')
    const [userName, setUserName] = useState('')
    const [password, onChangePassword] = useState('Password1234')
    const [gender, onChangeGender] = useState('мужской')
    const [email, onChangeEmail] = useState('Sasha@gmail.ru')
    const [avatar, setAvatar] = useState('')
    const [id, setId] = useState('')
    const [list, setList] = useState([]);
    const [usernameUp, onChangeUsernameUp] = useState('')

    return (
        <AuthContext.Provider
        value={{
            jti: jti,
            id: id,
            new_user: usernameUp,
            list: list,
            avatar: avatar,
            email: email,
            gender: gender,
            password: password,
            username: userName,
            onChangePassword,
            onChangeUsernameUp,
            setList,
            setJti, 
            setId,
            onChangeEmail,        
            setUserName,
            setAvatar,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}