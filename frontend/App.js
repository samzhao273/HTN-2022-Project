import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons"
import * as React from 'react';
import MainContainer from './MainApp/MainContainer'
import Login from "./Login.js"
import Signup from "./Signup.js"
import EditScreen from './MainApp/screens/EditScreen';

export default function App() {
  return (
    <MainContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
