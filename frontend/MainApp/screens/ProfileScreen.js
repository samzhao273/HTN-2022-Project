import * as Reach from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import Info from './ProfileComponents/Info';
import Edit from './ProfileComponents/Edit';
import Posting from './GeneralComponents/Posting';
import Add from './ProfileComponents/Add';
import {Postings} from './ProfileComponents/DummyPostData/Postings'
import Ionicons from 'react-native-vector-icons'

export default function ProfileScreen({navigation}) {
    return (


    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source = {require('./ProfileComponents/man.png')} style= {styles.Image} />

        <View style={{alignself: 'center'}}>
          <View style={styles.Info}>
            <Info />
          </View>

          <View style={styles.Button}>
            {/* <TouchableHighlight onPress = {() => {navigation.navigate('AddScreen')}}>
              <View>
                  <Ionicons name = "md-add-circle" size={40} color='#55B3AE'></Ionicons>
              </View>
            </TouchableHighlight> */}
            <Add/>
          </View>

          <View style={styles.Button}>
            <Edit/>
            

          </View>

        {/* <Text onPress={() => alert('this is the Profile Screen')}>ProfileScreen</Text> */}

          <View style={styles.PostingContainer}>
            {Postings.map((posting,index) => (
              <Posting posting = {posting} key = {index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white'
  },

  Image: {
    marginTop: -90,
    width: 40,
    resizeMode: 'contain',
    left:45,
    position: 'absolute',
  },

  Info:{
    top: 100,
    alignself: 'center'

  },

  PostingContainer:{
    top: 25,

  },

  Button: {
    left: 300,
    marginTop: 5
  }


})