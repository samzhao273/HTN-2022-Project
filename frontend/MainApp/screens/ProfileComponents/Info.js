import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Info = () => {
    return (
        <View style={styles.container}>
 
            <Image 
                source={require('./favicon.png')}  // have to make this editable in back end - all these components
                style={{ width: 83, height: 83, borderRadius: 400/ 2}} 
            />

            <Text style={styles.Username}>Samz</Text> 
            <Text style={styles.Measurements}>183cm/82kg</Text>  
            <Text style={styles.Counter}>98</Text>
            
        </View>

     

            // <Ionicons name = 'rocket'/>


    )

}

const styles = StyleSheet.create({

    container:{
        // flex: 1, 
        // backgroundColor:'red',
        alignSelf: 'center',

    },


    profileImage: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    Username:{
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20

    },

    Measurements:{
        justifyContent: 'center',
        textAlign: 'center',
        color: '#A7A7A7',
        marginTop: 5
    },

    Counter:{
        justifyContent: 'center',
        textAlign: 'center',
        color: '#55B3AE',
        marginTop: 3
    }

    
    
})
   
export default Info;

