import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';
 
export default function signup() {
  return (
    <SafeAreaView style={styles.container}>

    <Text style = {styles.text}> WASTE DOWN</Text>
      
      <Image
        style={styles.image}
        source={require('./assets/man.png')}
      />

      <Text style = {styles.LogInText}> Sign Up</Text>

    <View style = {styles.usernameInput}>
      <TextInput placeholder='Username'  />
      </View>

      <View style = {styles.emailInput}>
      <TextInput placeholder='Email'  />
      </View>

      

      <View style = {styles.passwordInput}>
      <TextInput placeholder='Password'  
          secureTextEntry/>
      </View>

      <View style = {styles.confirmPasswordInput}>
      <TextInput placeholder='ConfirmPassword'  
          secureTextEntry/>
      </View>


      
     

  

        <TouchableOpacity 
        onPress={() => {
          console.warn('sign up pressed')
        }} 
        style = {styles.buttonRegister}
        >
          <Text style = {styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>


       


      


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#55B3AE',    
  },

  logo:{
    position: 'absolute',
    width: 96,
    height: 89,
    left: 50,
    top: 150
  },

  text: {
    position: 'absolute',
    width: 97,
    height: 25,
    left: 43,
    top: 122,
    color: '#55B3AE',
    fontFamily: 'Arial',
    fontWeight: '400',
    fontSize: 12,
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center',
    
    
  },

  LogInText: {
    position: 'absolute',
    width: 125,
    height: 32,
    left: 35,
    top: 300,
    color: '#55B3AE',
    fontFamily: 'Arial',
    fontWeight: '400',
    fontSize: 24,
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center',
    
    
  },

  usernameInput:{
    position: 'absolute',
    height: 49,
    width: 322,
    left: 34,
    top: 348,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent:'center',
    paddingHorizontal: 10,

  },


  emailInput: {
    position: 'absolute',
    height: 49,
    width: 322,
    left: 34,
    top: 411,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent:'center',
    paddingHorizontal: 10,
    
  },

  passwordInput: {
    position: 'absolute',
    height: 49,
    width: 322,
    left: 34,
    top: 474,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  confirmPasswordInput: {
    position: 'absolute',
    height: 49,
    width: 322,
    left: 34,
    top: 537,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent:'center',
    paddingHorizontal: 10,
  },


  buttonRegister: {
    position: 'absolute',
    height: 44,
    left: 165,
    right: 28,
    top: 620,
    backgroundColor: '#55B3AE',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent:'center'
  },

  inputText: {

  },

  buttonText: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: '300',
    fontSize: 16,
  },

  image: {
    width: 80,
    resizeMode: 'contain',
    top:130,
    left:60,
    position: 'absolute',
  }


});