import React, {useState, useContext} from "react";
import { LoginInContext } from "./LoginInContext";

export const LoginInState = ({children}) => {

    const [password1, onChangePassword] = React.useState('strongpassword2')
    const [email, onChangeEmail] = React.useState('strongemail2@gmail.ru')

    return (
        <SignUpContext.Provider
        value={{
            password: password1,
            password_confirmation: password2,
            email: email,
            username: username,
            gender: gender,
            avatar: avatar,
            onChangePassword,
            onChangePasswordConfirm,
            onChangeEmail,
            onChangeUsername,
            onChangeGender,
            setAvatar
        }}
        >
            {children}
        </SignUpContext.Provider>
    )
}