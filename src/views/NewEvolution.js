import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import { KeyboardAvoidingView, FlatList} from 'react-native';
import { Button, Icon } from 'react-native-elements'
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

import getRealm from '../services/realm'
import ModalEvolucao from '../components/ModalEvolucao';

export default ({ route, navigation }) => {

    const [evolucao, setEvolucao] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState();

    const { id, hospital, beneficiario } = route.params;   
    
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    async function handlerAddEvoluction(){
        try{
            const realm = await getRealm();
            let autorizacao = realm.objects('autorizations');
            let aut = autorizacao.filtered(`id = ${id}`);
            realm.write(() => {
                aut[0].evolucoes.push({id: new Date().getTime().toString(), description: evolucao})                
            })
        } catch (err) {
            console.warn(err);
        }
        toggleModal();
    } 


    useEffect(() => {
        async function loadAuthorizations(){
            const realm = await getRealm();
            let autorizacao = realm.objects('autorizations');
            let aut = autorizacao.filtered(`id = ${id}`);
            setData(aut[0].evolucoes)
        }
        loadAuthorizations();        
    }, [])    
    

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
                    <Text style={{paddingTop: 10}}>{id}</Text>
                </ViewAutorization>
                <ViewAutorization>
                    <TextTitle>Hospital: </TextTitle>
                    <Text>{hospital}</Text>
                </ViewAutorization>
                <ViewAutorization>
                    <TextTitle>Beneficiário: </TextTitle>
                    <Text>{beneficiario}</Text>
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
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />                   
            <ModalEvolucao  visible={modalVisible} handlerAddEvoluction={handlerAddEvoluction} toggleModal={toggleModal} evolucao={evolucao}  setEvolucao={setEvolucao}/>
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

const ViewList = styled.View`
    
    padding: 10px;
    margin: 10px;
    width: 95%;
    min-width: 90%;
    background-color: #f2f2f2;
    border-radius: 4px;
`

