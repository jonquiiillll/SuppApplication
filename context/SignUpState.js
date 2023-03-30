import React, {useState, useContext} from "react";
import { SignUpContext } from "./SignUpContext";

export const SignUpState = ({children}) => {

    const [password1, onChangePassword] = React.useState('Password123')
    const [password2, onChangePasswordConfirm] = React.useState('Password123')
    const [email, onChangeEmail] = React.useState('lilya@gmail.ru')
    const [username, onChangeUsername] = React.useState('')
    const [gender, onChangeGender] = React.useState('женский')
 
    const [tag, onChangeTag] = React.useState([])
    const [list, setList] = useState([]);
   
    const [avatar, setAvatar] = useState('картинка');

    return (
        <SignUpContext.Provider
        value={{
            password: password1,
            password_confirmation: password2,
            email: email,
            tag: tag,
            list: list,
            username: username,
            gender: gender,
   
            avatar: avatar,
            onChangePassword,
            setList,
            onChangeTag,
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
