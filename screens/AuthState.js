import React, {useState} from "react";
import { AuthContext } from "./AuthContext";

export const AuthState = ({children}) => {
    const [jti, setJti] = useState('')
    const [userName, setUserName] = useState('')
    const [topic, setTopic] = useState('')
    const [password, onChangePassword] = useState('Password123')
    const [gender, onChangeGender] = useState('мужской')
    const [email, onChangeEmail] = useState('lilya@gmail.ru')
    const [avatar, setAvatar] = useState('')
    const [id, setId] = useState('')

    return (
        <AuthContext.Provider
        value={{
            jti: jti,
            id: id,
            topic: topic,
            avatar: avatar,
            email: email,
            gender: gender,
            password: password,
            username: userName,
            onChangePassword,
            setJti, 
            setId,
            onChangeEmail,
            
            setUserName,
            setAvatar,
            setTopic,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}