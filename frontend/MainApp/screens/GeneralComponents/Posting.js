import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Divider} from 'react-native-elements'
import { Postings } from '../ProfileComponents/DummyPostData/Postings';

const Posting = ({posting}) => {
   

    return(
        <View style={styles.PostingContainer}>
            {/* <Divider width={2} orientation = 'horizontal' /> */}
            <PostingImage posting = {posting}/>
            <PostingHeader posting = {posting}/>
            <PostingSize posting = {posting} />
            <PostingDistance posting = {posting} />
            <PostingType posting = {posting}/> 
            <Text> / </Text>
            <PostingBrand posting = {posting}/>
            <PostingDescription posting = {posting}/>
        </View>

    );
}

const PostingHeader = () => (
    <View style ={styles.PostingHeader}>

        <TouchableHighlight onPress = {() => {alert('delete button')}}>
            <View style={styles.Trash}>
                <Ionicons name = "trash" size={20}></Ionicons>
            </View>
        </TouchableHighlight>

    </View>
)

const PostingImage = ({posting}) => (
    // posting.image
    <View style={styles.Posting}>
        <Image source={require('./favicon.png')} />
    </View>
)

const PostingType = ({posting}) => (
    <Text>{posting.type}</Text>
)

const PostingDescription = ({posting}) => (
    <Text>{posting.description}</Text>

)

const PostingBrand = ({posting}) => (
    <Text>{posting.brand}</Text>

)

const PostingSize= ({posting}) => (
    <Text>{posting.Size}</Text>

)
const PostingDistance= ({posting}) => (
    <Text>{posting.distance}</Text>

)

const styles = StyleSheet.create({
    PostingContainer:{
        // margin:10,
        backgroundColor: '#D9D9D9',
        // flex: 1,
        flexDirection: 'column',
        // justifyContent:'space-around',
        // alignItems: 'center',
        borderRadius: 20,
        marginBottom: 15,
        marginLeft: 10,
        width: 170,
        height: 265


    },

    Posting:{
        position: 'absolute'
    },

    PostingHeader:{
        flexDirection:'row',
    },

    Trash: {
        position: 'absolute',
        marginTop: 2,
        marginLeft: 2
    }

})


export default Posting;

