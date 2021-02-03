import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import getRealm from '../services/realm'


export default ({route, navigation}) => {

    const { data } = route.params;  

    const [codAutorizacao, setcodAutorizacao] = useState('');
    const [hospital, setHospital] = useState('');
    const [beneficiario, setBeneficiario] = useState('');

    useEffect(() => {
        if(data){
            setcodAutorizacao(data.id.toString()),
            setHospital(data.hospital),
            setBeneficiario(data.beneficiario)
        }
        //console.log(data)
    }, [])

    async function handleAddAutorization(){
        try {
            const data = {
                id: parseInt(codAutorizacao),
                hospital: hospital,
                beneficiario: beneficiario,
                //evolutions: []
            }
            const realm = await getRealm();
            realm.write(() => {
                realm.create('autorizations', data, 'modified')
            })
            navigation.navigate("AuthorizationList")
        } catch (err) {
            console.warn(err);
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView 
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{ flex: 1 }}
            >
                <Container>
                    <Form>
                        <Input
                            style={{marginTop:30}}  
                            value={codAutorizacao}
                            onChangeText={t => setcodAutorizacao(t)}
                            placeholder="Cód. Autorização"
                            keyboardType="number-pad"
                        />
                        <Input  
                            value={hospital}
                            onChangeText={t => setHospital(t)}
                            placeholder="Hóspital"
                        />
                        <Input  
                            value={beneficiario}
                            onChangeText={t => setBeneficiario(t)}
                            placeholder="Beneficiário"
                        />
                        <Button onPress={handleAddAutorization}>
                            <TextButton>Cadastrar</TextButton>
                        </Button>
                    </Form>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}


const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
`

const Form = styled.View`
    width: 90%;
`

const Input = styled.TextInput`
    background-color: #f2f2f2;
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    border-radius: 4px;
    padding-left: 8px;
`

const Button = styled.TouchableOpacity`
    background-color: #3E4095;
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`

const TextButton = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`