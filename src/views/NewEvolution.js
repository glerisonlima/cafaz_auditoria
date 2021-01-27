import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { KeyboardAvoidingView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

export default props => {

    const [modalVisible, setModalVisible] = useState(false);

    const DATA= [
        {
            id: '1',
            description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos'
        },
        {
            id: '2',
            description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos'
        },{
            id: '3',
            description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos'
        },{
            id: '4',
            description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos'
        },{
            id: '5',
            description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos'
        },{
            id: '6',
            description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos'
        },{
            id: '7',
            description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos'
        }
    ]
    
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }
    
    
    function ModalView() {
        const [evolucao, setEvolucao] = useState('');
        return (
            <View style={{flex: 1, margin: 10, padding: 10}}>
                <Modal isVisible={modalVisible}>
                <View style={{flex: 1, backgroundColor: '#FFF', padding: 10}}>
                    <Input 
                        value={evolucao}
                        onChangeText={t => setEvolucao(t)}
                        multiline
                        numberOfLines={8}
                    />
                    <ButtonModal onPress={toggleModal}>
                        <TextButton>Cadastrar</TextButton>
                    </ButtonModal>
                </View>
                </Modal>
            </View>
        );
    }

    const renderItem = ({ item }) => (
        <Item title={item.description} />
    );

    const Item = ({ title }) => (
        <ViewList >
            <Text>{title}</Text>
            <Button 
                type="clear"
                icon={<Icon name="trash" size={22} type='font-awesome'/>}
                onPress={toggleModal}
            />
        </ViewList>
    );
 
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >            
            <Container>
                <ViewAutorization>
                    <TextTitle style={{paddingTop: 10}}>Cód. Autorização: </TextTitle>
                    <Text style={{paddingTop: 10}}>231231</Text>
                </ViewAutorization>
                <ViewAutorization>
                    <TextTitle>Hospital: </TextTitle>
                    <Text>São Camilo</Text>
                </ViewAutorization>
                <ViewAutorization>
                    <TextTitle>Beneficiário: </TextTitle>
                    <Text>Glerison Ferreira de Lima</Text>
                </ViewAutorization>
                <MenuAction>
                    <TextMenu>Evoluções</TextMenu>
                    <Button 
                        type="clear"
                        icon={<Icon name="add" size={22} />}
                        onPress={toggleModal}
                    />
                </MenuAction> 
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />                   
            <ModalView />
            </Container>           
        </KeyboardAvoidingView>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
`



const ViewAutorization = styled.View`
    width: 100%;
    padding-left: 15px;
    padding-top: 5px;
    flex-direction: row;
`

const TextTitle = styled.Text`
    font-weight: bold; 
`

const TextMenu = styled.Text`
    font-weight: bold;
    font-size: 18px;
` 

const MenuAction = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
`

const Input = styled.TextInput`
    background-color: #f2f2f2;
`

const ViewList = styled.View`
    padding: 15px;
    margin: 15px;
    background-color: #f2f2f2;
    border-radius: 4px;
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