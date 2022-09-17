import * as Reach from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity} from 'react-native';
import Info from './ProfileComponents/Info';
import Edit from './ProfileComponents/Edit';


export default function ProfileScreen({navigation}) {
    return (
    <SafeAreaView style={styles.container}>

      <Image source = {require('./ProfileComponents/Logo.png')} 
      style= {styles.Image} />

      {/* <Text onPress={() => alert('this is the Profile Screen')}
      >ProfileScreen</Text> */}

      <Info style={styles.Info}/>

      <Edit/>

    </SafeAreaView>

    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:'white',
    display: 'flex',
    alignItems: 'center',
    

  },

  Image: {

  },

  Info:{
    position: 'absolute',
    width: 109,
    height: 155,
    left: 158,
    top: 131,


  },


})