import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../../Login'
import SignUp from '../../Signup'
import MainContainer from '../MainContainer'


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer independent = {true}
        >
            <Stack.Navigator
            screenOptions = {{headerShown:false}}
            initialRouteName = 'Login'
            
            >

                <Stack.Screen name = "SignUp" component = {SignUp}/>
                <Stack.Screen name = "Login" component = {Login}/>
                <Stack.Screen name = "MainContainer" component = {MainContainer}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;