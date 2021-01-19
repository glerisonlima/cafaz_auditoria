import React from 'react';
import { View, Text, FlatList } from 'react-native';
import authorizations from '../data/authorizations';
import { Button, Icon } from 'react-native-elements'
import styled from 'styled-components/native'

export default props => {

    const StyledViewItem = styled.View`
        background-color: #E8E7E7;
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

    function getAuthorizationsItem({item: authorization}){
        return (
            <StyledViewItem>
                <Text><StyledTextTitle>Cód. Autorização: </StyledTextTitle>{authorization.id}</Text>
                <Text><StyledTextTitle>Hospital: </StyledTextTitle>{authorization.hospital}</Text>
                <Text><StyledTextTitle>Beneficiario: </StyledTextTitle>{authorization.beneficiario}</Text>
                <View>
                    <Button 
                        type="clear"
                        icon={<Icon name="settings" size={25} />}
                        onPress={() => navigation.navigate("AuthorizationForm")}
                        />
                    <Button 
                        type="clear"
                        icon={<Icon name="settings" size={25} />}
                        onPress={() => navigation.navigate("AuthorizationForm")}
                        />
                </View>
            </StyledViewItem>

        )
    }

    return (
        <StyledView>
            <FlatList 
                keyExtractor={authorization => authorization.id.toString()}
                data={authorizations}
                renderItem={getAuthorizationsItem}
            />
        </StyledView>
    )
}