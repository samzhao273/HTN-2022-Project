import * as React from 'react';
import{View, Text, SafeAreaView, TextInput, Image, StyleSheet,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { useState } from 'react';
 

export default function EditScreen({navigation}) {
    const [username, setUsername] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')

    const updateProfile = () => {
        payload = {
            username,
            weight,
            height
        }
        fetch(`http://localhost:2000/updateProfile`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }).then(async res => { 
            try {
                const jsonRes = await res.json()
                if (res.status === 200) {
                    console.log('updated profile!');
                } else {
                    setMessage(jsonRes.message);
                    console.log(jsonRes.message);
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
        <SafeAreaView>

        <View style={styles.container}>
 
            <Image 
                source={require('./ProfileComponents/man.png')}  // have to make this editable in back end - all these components
                style={{ width: 83, height: 83, borderRadius: 400/ 2}} 
            />

           
            
        </View>

        <View style={styles.container}>
            <TextInput style={styles.TextInput}
            placeholder="Username"
            onChangeText = {setUsername}
            />
            <TextInput style={styles.TextInput}
            placeholder="Weight"
            onChangeText = {setWeight}
            />
            <TextInput style={styles.TextInput}
            placeholder="Height"
            onChangeText = {setHeight}
            />

            

        </View >

            <TouchableOpacity 
                onPress={() => { 
                    console.warn('edit profile pressed')
                    updateProfile()
            }} 
                style = {styles.EditProfile} >
                <Text style = {styles.buttonText}>Done</Text>
            </TouchableOpacity>
        </SafeAreaView>
        


      
    

    );
}

const styles = StyleSheet.create( {
    container:{
        // flex: 1, 
        // backgroundColor:'red',
        alignSelf: 'center',
        

    },


    profileImage: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    TextInput:{
        justifyContent: 'center',
        alignItems: 'center',

    },

    EditProfile:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        gap: 12,
        backgroundColor: '#55B3AE',
        borderRadius: 100,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        


    },

    buttonText:{
        color:'white',
    }



   


})