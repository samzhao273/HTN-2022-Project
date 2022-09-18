import React, { useState } from 'react';
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
            
            <View style={styles.DescriptionContainer}> 
                <View style={styles.GenderDistance}>
                    <PostingGender posting = {posting} />
                </View>
               
                <View style={styles.TitleAlign}>
                    <PostingType posting = {posting} /> 
                    <Text style={styles.TitleText}> / </Text>
                    <PostingBrand posting = {posting}/>
                    <Text style={styles.TitleText}> / </Text>
                    <PostingSize posting = {posting} />
                </View>

                <PostingDescription posting = {posting}/>
            </View>
        </View>

    );
}

const PostingHeader = () => (
    <View style ={styles.PostingHeader}>

        <TouchableHighlight onPress = {() => {alert('delete button')}}>
            <View style={styles.Trash}>
                <Ionicons name = "trash" size={20} color='#A7A7A7'></Ionicons>
            </View>
        </TouchableHighlight>

    </View>
)


    // const avatarImage=(avatar) => {
    //     switch (avatar) {
    //       case "shirt":
    //         return require('./uniqloShirt.jpg');
    //       case "sweater":
    //         return require('./essentialsHoodie.jpg');
    //       case "htn":
    //         return require('./htnShirt.jpg');
    //       case "levis":
    //         return require('./levisJeans.jpg');
    //       default:
    //         return require('./uniqloShirt.jpg');
    //     }
    //   }



const PostingImage = ({posting}) => {
        return <Image source={require('./shirt.jpg')} style={styles.PostingImage} />

}
// title
const PostingDescription = ({posting}) => (
    <Text style={styles.DescriptionText}>
        {posting.description}
    </Text>
)

const PostingType = ({posting}) => (
    <Text style={styles.TitleText}> 
        {posting.type} 
    </Text>
)

const PostingBrand = ({posting}) => (
    <Text style={styles.TitleText}>
        {posting.brand}
    </Text>
)


const PostingSize= ({posting}) => (
    <Text style={styles.TitleText}>
        {posting.Size}
    </Text>
)


const PostingGender= ({posting}) => (
    <Text style={styles.GenderDistanceText}>
        {posting.gender}
    </Text>
)

const styles = StyleSheet.create({
    PostingContainer:{
        backgroundColor: '#D9D9D9',
        flexDirection: 'column',
        borderRadius: 20,
        marginBottom: 15,
        marginLeft: 10,
        width: 170,
        height: 265,
    },

    PostingImage:{
        position: 'absolute',
        height: 265,
        width: 170,
        borderRadius: 20,
        resizeMode:'cover',
        alignSelf: 'center',
    },

    PostingHeader:{
        
    },

    TitleAlign:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        // top: 40,
        // paddingLeft: 10,
        // paddingRight: 10,
    },

    GenderDistance:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        width: 150
        // flexWrap:'wrap',
        // top: 40,
        // paddingLeft: 10,
        // paddingRight: 10,
    },

    DistanceText:{
        fontSize: 10,
        paddingBottom: 3,
        color: "#A7A7A7",
        right:35
    },

    TitleText:{
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 5,
    },

    DescriptionText:{
        fontSize: 10,
        paddingBottom: 15,
        width: 150
    },

    GenderDistanceText:{
        fontSize: 10,
        paddingBottom: 3,
        width: 150,
        color: "#A7A7A7",
    },

    DescriptionContainer:{
        // flex:1,
        flexDirection:'column',
        flexWrap:'wrap',
        backgroundColor:'#F1F1F1',
        alignSelf:'bottom',
        height: 80,
        width:170,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        top: 185,
        paddingLeft: 15,
        paddingTop: 10,
        // opacity:0.5
        // backgroundOpacity: 0.5
        

        // height: 50
        // top: 40,
        // paddingLeft: 10,
        // paddingRight: 10,
    },
    

    Trash: {
        position: 'absolute',
        // marginTop: 2,
        // marginLeft: 2
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 10,
        
    }

})


export default Posting;

