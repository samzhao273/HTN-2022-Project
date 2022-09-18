import * as Reach from 'react';
import{View, Text,SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import {PostingsExplore} from './ProfileComponents/DummyPostData/PostingsExplore';
import PostingExplore from './GeneralComponents/PostingExplore';

export default function ExploreScreen({navigation}) {
    return (
    <SafeAreaView>
      <Image source={require('./GeneralComponents/shirt.jpg')} />
      <Text>Explore</Text>


      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source = {require('./ProfileComponents/man.png')} style= {styles.Image} />

          

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
  PostingContainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    top: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },

})