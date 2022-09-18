import * as Reach from 'react';
import{View, Text,SafeAreaView, StyleSheet, Image, ScrollView, TextInput} from 'react-native';
import {PostingsExplore} from './ProfileComponents/DummyPostData/PostingsExplore';
import PostingExplore from './GeneralComponents/PostingExplore';

export default function ExploreScreen({navigation}) {
    return (
    <SafeAreaView style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.HeadingContainer}>
        <Image source = {require('./ProfileComponents/man.png')} style= {styles.Logo} />
        <Text style={styles.title}>Explore</Text>
      </View>

      <View style = {styles.SearchBar}>
          <TextInput placeholder='Search'/>
      </View>

      

          

          <View style={styles.PostingContainer}>
            {PostingsExplore.map((postingExplore,index) => (
              <PostingExplore postingExplore = {postingExplore} key = {index} />
            ))}
          </View>
        
      </ScrollView>

    </SafeAreaView>



    );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor:'white',
    height:'100%'
  },

  // HeadingContainer: {
  //   flex:1,
  //   flexDirection:'row',
  //   justifyContent: 'space-between',
  //   // direction: "rtl",
  // },

  PostingContainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    top: 100,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 80
  },

  title: {
    position: "absolute",
    color: "#000000",
    fontSize: 30,
    top: 30,
    right: 50
  },

  SearchBar: {
    position: 'absolute',
    height: 30,
    width: 322,
    left: 34,
    top: 100,
    paddingLeft: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent:'center',
    paddingHorizontal: 10,
    marginBottom: 0
  },

  Logo: {
    marginTop: -90,
    width: 40,
    resizeMode: 'contain',
    left:45,
    position: 'absolute',
    // top: -336
  },

})