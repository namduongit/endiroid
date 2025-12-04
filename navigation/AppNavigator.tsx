import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';
import HelloDemo from '../screens/demo/hello-demo';
import LoginDemo from '../screens/demo/login-demo';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={App} 
                    options={{ title: 'Màn hình chính' }}
                />
                <Stack.Screen 
                    name="HelloDemo" 
                    component={HelloDemo}
                    options={{ title: 'Hello Demo' }}
                />
                <Stack.Screen 
                    name="LoginDemo" 
                    component={LoginDemo}
                    options={{ title: 'Login Demo' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
