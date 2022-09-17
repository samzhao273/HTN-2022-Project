import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';
 
export default function login() {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const Login = () => {
    const payload = {
      email,
      password,
    };
    fetch(`http://localhost:2000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(async res => { 
      try {
          console.log(await res.text());
          const jsonRes = await res.json()
          if (res.status === 200) {
              setMessage(jsonRes.message);
          } else {
              setMessage(jsonRes.message);
          }
      } catch (err) {
          console.log(err);
      };
  })
  .catch(err => {
      console.log(err);
  });
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text style = {styles.text}> WASTE DOWN</Text>
      
      <Image
        style={styles.image}
        source={require('./assets/man.png')}
      />

      <Text style = {styles.LogInText}> Log in </Text>

      <View style = {styles.emailInput}>
        <TextInput placeholder='Email'  
            onChangeText = {setEmail}
        />

      </View>

      <View style = {styles.passwordInput}>
        <TextInput placeholder='Password' 
            onChangeText = {setPassword}
            secureTextEntry={isSecureEntry}/>
      </View>

      <TouchableOpacity 
        onPress={() => { console.warn('Show Password Pressed') }}
        style = {styles.showPasswordButton} >
        <Text style = {styles.buttonShowPass}>Show</Text>  
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonLogin} 
        onPress={() => { 
          console.warn('login pressed') 
          Login()
        }} >
        <Text style={styles.buttonText}>Log in</Text>

      </TouchableOpacity>


      <TouchableOpacity 
        onPress={() => { console.warn('sign up pressed') }} 
        style = {styles.buttonRegister} >
        <Text style = {styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>


      <TouchableOpacity 
        onPress={() => { console.warn('forgot password pressed') }} 
        style = {styles.buttonForgotPass} >
        <Text style = {styles.buttonForgotPassText}>Forgot your password?</Text>
      </TouchableOpacity>



    </SafeAreaView>




  );
};



const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',

  },

  text: {
    position: 'absolute',
    width: 97,
    height: 25,
    left: 43,
    top: 122,
    color: '#55B3AE',
    // fontFamily: 'Inter',
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
    // fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 24,
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center',
    
    
  },

  emailInput: {
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

  passwordInput: {
    position: 'absolute',
    height: 49,
    width: 322,
    left: 34,
    top: 411,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: 'center',
    paddingHorizontal: 10,
  },


  placeholder: {
    height: 40,

  },
  showPasswordButton:{
    position: 'absolute',
    width: 43,
    height: 19,
    right: 50,
    top: 425,
    

  },


  buttonLogin: {
    position: 'absolute',

    alignItems: 'center',
    justifyContent:'center',
   
    paddingLeft: 16, 
    paddingRight: 16,

    height: 44,
    left:165,
    right: 32,
    top: 500,

    backgroundColor: '#B1DBD8',
    borderRadius: 100
  },

  buttonRegister: {
    position: 'absolute',

    alignItems: 'center',
    justifyContent:'center',
   
    paddingLeft: 16, 
    paddingRight: 16,

    height: 44,
    left:165,
    right: 32,
    top: 555,

    backgroundColor: '#55B3AE',
    borderRadius: 100
  },

  buttonForgotPass: {
    // position: 'absolute',
    // width: 286,
    // height: 16,
    // bottom: 198,
    // left: 120,
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent:'center'
    position: 'absolute',

    alignItems: 'center',
    justifyContent:'center',
   
    paddingLeft: 16, 
    paddingRight: 16,

    height: 44,
    left:165,
    right: 32,
    top: 600,

    backgroundColor: 'white',
    borderRadius: 100

  },

  buttonText: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: '300',
    fontSize: 16,


  },

  buttonForgotPassText: {
    color: '#55B3AE',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
   


  },

  buttonShowPass:{
    color: '#B1DBD8',
    fontFamily: 'Arial',
    fontStyle: 'normal',
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






