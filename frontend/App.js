import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainApp from './MainApp/NavigationContainer/MainContainer'
import { SafeAreaView } from 'react-navigation'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainApp/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
