import React, { useContext, createContext, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { SignUpContext } from '../context/SignUpContext';
import styled from 'styled-components/native';

export default function SelectPerson({info, onSelect }) {
    const { gender, onChangeGender } = useContext(SignUpContext)
    return (
        <ViewRadioButton>
            {info.map((item) => {
                return (
                    <ViewSelect>
                    <Pressable
                        onPress={() => onChangeGender(item.value)}
                    >
                        <ViewText>
                            <Text style={ //Line 5
                                item.value === gender ? styles.selected : styles.unselected
                            }  > {item.value}</Text>
                        </ViewText>
                    </Pressable>
                    </ViewSelect>
                );
            })}
        </ViewRadioButton>
    );
}
const styles = StyleSheet.create({
    unselected: {
        fontWeight: '500',
        color: '#989898',
        fontSize:14,
        alignItems: 'center',
        paddingRight: 16,
        paddingLeft: 25,
        
    },
    selected: {
        fontSize: 14,
        backgroundColor: '#303030',
        paddingTop: 15,
        paddingLeft: 26,
        paddingRight: 26,
        paddingBottom: 15,
        borderRadius: 25,
        overflow: 'hidden',
        fontWeight: '500',
        color: "#FFFFFF",
    },
});
const ViewGenderContainer = styled.View`
display: flex;

`
const ViewText = styled.View`

`
const ViewRadioButton = styled.View`
display: flex;
margin-top: 6px;
flex-direction: row;
margin-left: 16px;
margin-right: 13px;
background: #FAFAFA;
border: 1px solid #EAEAEA;
height: 50px;
border-radius: 31px;
`

const ViewSelect = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`