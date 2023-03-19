import React, {useContext, createContext, useState} from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { SignUpContext } from '../context/SignUpContext';
import styled from 'styled-components/native';


export default function RadioButton({ data, onSelect }) {
    // const [userOption, setUserOption] = useState(null);
    const {gender, onChangeGender} = useContext(SignUpContext)
    return (
        <ViewRadioButton>
          {data.map((item) => {
            return (
                <TouchableOpacity key={item.id}             
                onPress={() => onChangeGender(item.value)}
              >
                <ViewText>
                <Text style={ //Line 5
                  item.value === gender ? styles.selected : styles.unselected
                }  > {item.value}</Text>
                </ViewText>
              </TouchableOpacity>
            );
          })}
        </ViewRadioButton>
      );
}
const styles = StyleSheet.create({
  unselected: {
    fontWeight: '600',
    color: '#BDBDBD',
    fontSize: 29,
  },
  selected: {
    fontSize: 29,
    fontWeight: '600',
    color: "black",
  },
});
  const ViewGenderContainer = styled.View `
display: flex;
align-items: center;
`
const ViewText = styled.View `
display: flex;
align-items: center;
margin-top: 10px;
justify-content: center;
`
const ViewRadioButton = styled.View `
margin-bottom: 200px;
`