import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthorizationList from './views/AuthorizationList'
import AuthorizationForm from './views/AuthorizationForms'
import NewEvolution from './views/NewEvolution'

import { Button, Icon } from 'react-native-elements';



const Stack = createStackNavigator();

export default props => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="AuthorizationList">
            <Stack.Screen 
              name="AuthorizationList"
              component={AuthorizationList}
              options={({ navigation }) => { 
                return {
                  title:"Autorizações",
                  headerLeft: () => (
                    <Button 
                      type="clear"
                      icon={<Icon name="add" size={25} />}
                      onPress={() => navigation.navigate("AuthorizationForm", {data: null})}
                    />
                  ),
                  headerRight: () => (
                    <Button 
                      type="clear"
                      icon={<Icon name="settings" size={25} />}
                      onPress={() => navigation.navigate("AuthorizationForm")}
                    />
                  )
                }
              }}
            />
            <Stack.Screen 
              name="AuthorizationForm"
              component={AuthorizationForm}
              options={{
                title: "Cadastro"
              }}
            />
            <Stack.Screen 
              name="NewEvolution"
              component={NewEvolution}
              options={{
                title: "Cadastrar Evolução"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    )
}