import * as Reach from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Info from './ProfileComponents/Info';
import Edit from './ProfileComponents/Edit';
import EditScreen from './EditScreen';


export default function ProfileScreen({navigation}) {
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source = {require('./ProfileComponents/man.png')} style= {styles.Image} />

        <View style={{alignself: 'center'}}>
          <View style={styles.Info}>
            <Info />
          </View>

          <View style={styles.Edit}>
            <Edit/>
          </View>
        {/* <Text onPress={() => alert('this is the Profile Screen')}>ProfileScreen</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>

    )
}


const styles = StyleSheet.create({
  container: {
    // flex: 1, 
    backgroundColor:'white',
    height: 350
  },

  Image: {
    // flexDirection: 'row',
    // justifyContent: "flex-start",
    marginTop: -90,
    width: 40,
    resizeMode: 'contain',
    // top:40,
    left:45,
    position: 'absolute',
  },

  Info:{
    // position: 'absolute',
    // flexDirection: 'row',
    // marginTop: 80,
    // paddingTop: 200,
    // width: 109,
    // height: 155,
    // left: 158,
    top: 100,
    alignself: 'center'

  },

  Edit: {
    left:300,
    // size:50,
    // resizeMode:'contain'
  }


})