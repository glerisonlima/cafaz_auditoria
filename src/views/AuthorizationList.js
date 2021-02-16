import React, { useState, useEffect } from 'react';
import { Text, FlatList } from 'react-native';
//import authorizations from '../data/authorizations';
import { Button, Icon } from 'react-native-elements';
import styled from 'styled-components/native';


import getRealm from '../services/realm'

export default ({navigation, route}) => {  
    
    const [authorizations, setAuthorizations] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    

   

    useEffect(() => {
        
        loadAuthorizations();
    }, [])

    async function loadAuthorizations(){
        const realm = await getRealm();

        const data = realm.objects('autorizations').sorted('id', true);
        setAuthorizations(data);
    }

    function handlerPesquisa(texto) {
        setPesquisa(texto);
        if(texto){
            if(!isNaN(texto)){
                async function filterAutorizations(){
                    const realm = await getRealm();
                    const data = realm.objects('autorizations').filtered(`id = "${texto}"`);
                    if(data.length > 0){
                        setAuthorizations(data);
                    }else{
                        loadAuthorizations();
                    }
                }
                filterAutorizations();
            }else{
                console.log('é texto')
                async function filterAutorizations(){
                    const realm = await getRealm();
                    const data = realm.objects('autorizations').filtered(`hospital LIKE '*${texto}*' or beneficiario LIKE '*${texto}*'` );                    
                    if(data.length > 0){
                        setAuthorizations(data);
                    }else{
                        loadAuthorizations();
                    }
                }
                filterAutorizations();
            }
        }else{
            loadAuthorizations();
        }
        
    }    

    function getAuthorizationsItem({item: authorization}){          
        return (
            <StyledViewItem>
                <Text><StyledTextTitle>Cód. Autorização: </StyledTextTitle>{authorization.id}</Text>
                <Text><StyledTextTitle>Hospital: </StyledTextTitle>{authorization.hospital}</Text>
                <Text><StyledTextTitle>Beneficiario: </StyledTextTitle>{authorization.beneficiario}</Text>
                <StyledButtonList>
                    <Button 
                        type="clear"
                        icon={<Icon name="eye" size={22} type='font-awesome' />}
                        onPress={() => {navigation.navigate("NewEvolution", {
                            id: authorization.id,
                            hospital: authorization.hospital,
                            beneficiario: authorization.beneficiario,
                        })}}
                        />
                    <Button 
                        type="clear"
                        icon={<Icon name="pencil" size={22} type='font-awesome' />}
                        onPress={() => {navigation.navigate("AuthorizationForm", {
                            data: {id: authorization.id,
                            hospital: authorization.hospital,
                            beneficiario: authorization.beneficiario }
                        })}}
                        />
                </StyledButtonList>
            </StyledViewItem>
        )      
    }

    return (
        <StyledView>
            <InputPesquisa placeholder="Pesquisar autorização" value={pesquisa} onChangeText={(t) => {handlerPesquisa(t)}}/>
            <FlatList 
                keyExtractor={authorization => authorization.id.toString()}
                data={authorizations}
                renderItem={getAuthorizationsItem}
                enableEmptySections={true}
                extraData={authorizations}
            />
        </StyledView>
    );}

    const StyledViewItem = styled.View`
        background-color: #F2F2F2;
        margin: 10px;
        padding: 8px 15px;
        border-radius: 4px;
    `

    const StyledView = styled.View`
        background-color: #fff;
    `
    const StyledTextTitle = styled.Text`
        font-weight: bold;
    `

    const StyledTextDescription = styled.Text`
        margin-left: 5px;
    `

    const StyledButtonList = styled.View`
        display: flex;
        flex-direction: row;
        align-self: flex-end;
    `

    const InputPesquisa = styled.TextInput`
        background-color: #F2F2F2;
        height: 60px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 15px;
        margin-bottom: 15px;
        border-radius: 4px;
        font-size: 18px;
        padding-left: 8px;
    `
