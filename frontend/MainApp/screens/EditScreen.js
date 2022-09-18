import * as React from 'react';
import{View, Text, SafeAreaView, TextInput, Image, StyleSheet,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';


export default function EditScreen({navigation}) {
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
            />
            <TextInput style={styles.TextInput}
            placeholder="Postal Code"
            />
            <TextInput style={styles.TextInput}
            placeholder="Weight"
            />
            <TextInput style={styles.TextInput}
            placeholder="Height"
            />

            

        </View >

            <TouchableOpacity 
                onPress={() => { console.warn('edit profile pressed')}} 
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