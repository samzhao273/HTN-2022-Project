import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import EditScreen from '../../EditScreen'
import AddScreen from '../../AddPostScreen'
import ProfileScreen from '../../ProfileScreen'



const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer independent = {true}
        >
            <Stack.Navigator
            screenOptions = {{headerShown:false}}
            initialRouteName = 'EditScreen'
            
            >
                <Stack.Screen name = "EditScreen" component = {EditScreen}/>
                <Stack.Screen name = "AddScreen" component = {AddScreen}/>
                <Stack.Screen name = "ProfileScreen" component = {ProfileScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;