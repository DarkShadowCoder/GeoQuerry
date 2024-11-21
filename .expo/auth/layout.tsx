import React from 'react';
import { View } from 'react-native';
import Login from './login';
import SignUp from './signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import { Container } from './styles';
const Stack = createNativeStackNavigator()
const AuthLayout: React.FC = () => {
    const user= true
    
  return (
    <Stack.Navigator>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='signup' component={SignUp}/>
    </Stack.Navigator>
  )
}

export default AuthLayout;