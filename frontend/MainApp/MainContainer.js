import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens

import ProfileScreen from './screens/ProfileScreen'
import CartScreen from './screens/CartScreen'
import ExploreScreen from './screens/ExploreScreen'
import MapScreen from './screens/MapScreen'


//Screen names
const profileName = 'Profile';
const cartName = 'Cart';
const exploreName = 'Explore';
const mapName = 'Map';

const Tab = createBottomTabNavigator();


export default function MainContainer() {
    return(
        <NavigationContainer independent = {true}
        >
            <Tab.Navigator
            initialRouteName={profileName}
            screenOptions={({route}) => ({
                tabBarIcon:({focused,color,size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === profileName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === cartName) {
                        iconName = focused ? 'cart' : 'cart-outline'
                    } else if (rn === exploreName) {
                        iconName = focused ? 'ios-search' : 'ios-search-outline'
                    } else if (rn === mapName) {
                        iconName = focused ? 'map' : 'map-outline'
                        
                    }

                    return <Ionicons name = {iconName} size={size} color={color}/>

                },

                headerShown: false,

                tabBarActiveTintColor: "#55B3AE",
                tabBarInactiveTintColor: "grey",
                tabBarStyle: [
                    {          
                    display: "flex"
                },
                    null
            ]


            })}

            
            
            // tabBarOptions={{
            //     activeTintColor: '#55B3AE',
            //     inactiveTintColor: 'grey',
            //     style: {
            //         backgroundColor: 'grey',
            //     }
            // }}

            



            
            >
            
            
            
                
                <Tab.Screen name={exploreName} component = {ExploreScreen}/>
                <Tab.Screen name={mapName} component = {MapScreen}/>
                <Tab.Screen name={cartName} component = {CartScreen}/>
                <Tab.Screen name={profileName} component = {ProfileScreen}/>



            </Tab.Navigator>

            
            
        </NavigationContainer>
        
    )

}