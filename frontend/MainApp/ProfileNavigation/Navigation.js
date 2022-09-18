import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Add from '../screens/ProfileComponents/Add'
import Edit from '../screens/ProfileComponents/Edit'
import EditScreen from '../screens/EditScreen'
import AddPostScreen from '../screens/AddPostScreen'
import ProfileScreen from '../screens/ProfileScreen'



const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer independent = {true}
        >
            <Stack.Navigator
            screenOptions = {{headerShown:false}}
            initialRouteName = 'ProfileScreen'
            
            >
                <Stack.Screen name = "Add" component = {Add}/>
                <Stack.Screen name = "Edit" component = {Edit}/>
                <Stack.Screen name = "EditScreen" component = {EditScreen}/>
                <Stack.Screen name = "AddPostScreen" component = {AddPostScreen}/>
                <Stack.Screen name = "ProfileScreen" component = {ProfileScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;