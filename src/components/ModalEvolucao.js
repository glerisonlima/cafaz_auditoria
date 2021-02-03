import React from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import styled from 'styled-components/native';

export default ({visible, handlerAddEvoluction, toggleModal, evolucao, setEvolucao}) => {
    return (
        <View style={{flex: 1, margin: 10, padding: 10}}>
            <Modal isVisible={visible}>
            <View style={{flex: 1, backgroundColor: '#FFF', padding: 10}}>
                <InputStyled 
                    onChangeText={setEvolucao} 
                    value={evolucao} 
                    multiline={true}
                    numberOfLines={10}/>
                <ButtonModal onPress={handlerAddEvoluction}>
                    <TextButton>Cadastrar</TextButton>
                </ButtonModal>
                <ButtonModal onPress={toggleModal}>
                    <TextButton>Fechar</TextButton>
                </ButtonModal>
            </View>
            </Modal>
        </View>
    )
}


const InputStyled = styled.TextInput`
    background-color: #f2f2f2;
`

const ButtonModal = styled.TouchableOpacity`
    background-color: #3E4095;
    width: 100%;
    height: 50px;
    margin-top: 20px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`

const TextButton = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`