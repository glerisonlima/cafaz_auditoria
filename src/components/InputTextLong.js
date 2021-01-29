import React from 'react';
import styled from 'styled-components/native';


export default ({ evolucao,  setEvolucao}) => {

    return ( 
        <Input 
            value={evolucao}
            onChangeText={setEvolucao}
            multiline={true}
            numberOfLines={10}/>
    )
}


const Input = styled.TextInput`
    background-color: #f2f2f2;
`