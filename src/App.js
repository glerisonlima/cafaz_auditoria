import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthorizationList from './views/AuthorizationList'
import AuthorizationForm from './views/AuthorizationForm'

const Stack = createStackNavigator();

export default props => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="AuthorizationList">
            <Stack.Screen 
              name="AuthorizationList"
              component={AuthorizationList}
            />
            <Stack.Screen 
              name="AuthorizationForm"
              component={AuthorizationForm}
            />
          </Stack.Navigator>
        </NavigationContainer>
    )
}