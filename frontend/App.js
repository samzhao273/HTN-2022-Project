import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons"
import * as React from 'react';
import MainContainer from './MainApp/MainContainer'
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MainApp from './MainApp/NavigationContainer/MainContainer'
import { SafeAreaView } from 'react-navigation'

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
