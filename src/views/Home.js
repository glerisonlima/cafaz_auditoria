import React from 'react'
import styled from 'styled-components/native';


export default ({navigation}) => {


    setTimeout(() => {
        navigation.navigate("AuthorizationList")
    }, 2000)

    return (
        <Container>
            <Logo 
               source={require('../assets/logo.png')} 
            />
            <Txt>Auditoria</Txt>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #fff;
` 

const Logo = styled.Image`
    width: 180px;
    height: 180px;
`

const Txt = styled.Text`
    font-size: 36px;
    margin-top: -5px; 
    color: #3E4095;
`