import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Info = () => {
    return (
        <View styles={styles.container}>
            <Image 
            source={require('./favicon.png')}  // have to make this editable in back end - all these components
            style={{width: 83, height: 83, borderRadius: 400/ 2}} 
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
        flex: 1,
        display: 'flex',
        alignItems: 'center',
       
        
        



    },

    profileImage: {
        justifyContent: 'center',
        alignItems: 'center',

    },

    Username:{
       

    },

    Measurements:{
        justifyContent: 'center',
        alignItems: 'center',

    },

    Counter:{
        justifyContent: 'center',
        alignItems: 'center',

    }

    
    
})
   
export default Info;

