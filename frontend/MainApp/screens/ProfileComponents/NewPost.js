import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

export default function NewPost() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source = {require('./ProfileComponents/man.png')} style= {styles.Image} />

        <View style={{alignself: 'center'}}>
          <View style={styles.Info}>
            <Info />
          </View>

          <View style={styles.Button}>
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
    flex: 1,
    backgroundColor:'white',
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
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    top: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },

  Button: {
    left: 300,
    marginTop: 5
  }


})