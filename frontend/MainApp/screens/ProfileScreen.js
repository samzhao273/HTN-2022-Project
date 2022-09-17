import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Info from './ProfileComponents/Info';
import Edit from './ProfileComponents/Edit';
import Posting from './GeneralComponents/Posting';
import {Postings} from './ProfileComponents/DummyPostData/Postings'

export default function ProfileScreen({navigation}) {
    return (
    <SafeAreaView >

      <View style={styles.container}>
      <Image source = {require('./ProfileComponents/Logo.png')} 
      style= {styles.Image} />

      {/* <Text onPress={() => alert('this is the Profile Screen')}
      >ProfileScreen</Text> */}

      <Info style={styles.Info}/>


      </View>

      <Edit/>

      <ScrollView style = {styles.PostingsContainer}>
        {Postings.map((posting,index) => (
          <Posting posting = {posting} key = {index} />
        ))}
        

      </ScrollView>

     
      

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

  PostingsContainer:{
    PostingContainer:{
    // margin:10,
    // flexDirection: 'column',
    // justifyContent:'space-around',
    // alignItems: 'center',


  },
  }


})