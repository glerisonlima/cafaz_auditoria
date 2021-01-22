import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import styled from 'styled-components/native';


export default ({route, navigation}) => {

    const [codAutorizacao, setcodAutorizacao] = useState('');
    const [hospital, setHospital] = useState('');
    const [beneficiario, setBeneficiario] = useState('');

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
                        <Button>
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