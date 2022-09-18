import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Divider} from 'react-native-elements'
import { Postings } from '../ProfileComponents/DummyPostData/Postings';
import ExploreScreen from '../ExploreScreen';
import { PostingsExplore } from '../ProfileComponents/DummyPostData/PostingsExplore';

const PostingExplore = ({postingExplore}) => {
   

    return(
        <View style={styles.Container}>
            <View style={styles.UserInfo}>
                <Image source={require('./user.jpg')} style={{ width: 25, height: 25, borderRadius: 400/ 2}} />
                <PostingUsername postingExplore = {postingExplore}/>
            </View>
            <View style={styles.PostingContainer}>
                {/* <Divider width={2} orientation = 'horizontal' /> */}
                <PostingProfileUrl postingExplore = {postingExplore} />
                <PostingImage postingExplore = {postingExplore}/>
                <PostingHeader postingExplore = {postingExplore}/>
                
                <View style={styles.DescriptionContainer}> 
                    <View style={styles.GenderDistance}>
                        <PostingGender postingExplore = {postingExplore} />
                        <PostingDistance postingExplore = {postingExplore} /> 
                    </View>
                
                    <View style={styles.TitleAlign}>
                        <PostingType postingExplore = {postingExplore} /> 
                        <Text style={styles.TitleText}> / </Text>
                        <PostingBrand postingExplore = {postingExplore}/>
                        <Text style={styles.TitleText}> / </Text>
                        <PostingSize postingExplore = {postingExplore} />
                    </View>

                    <PostingDescription postingExplore = {postingExplore}/>
                </View>
            </View>
        </View>

    );
}

const PostingHeader = () => (
    <View style ={styles.PostingHeader}>

        <TouchableHighlight onPress = {() => {alert('delete button')}}>
            <View style={styles.Trash}>
                <Ionicons name = "md-add-circle" size={20} color='#A7A7A7'></Ionicons>
            </View>
        </TouchableHighlight>

    </View>
)

const PostingImage = ({postingExplore}) => (
        <Image source={require('./final.png')} style={styles.PostingImage} />
)

// title
const PostingDescription = ({postingExplore}) => (
    <Text style={styles.DescriptionText}>
        {postingExplore.description}
    </Text>
)

const PostingUsername= ({postingExplore}) => (
    <Text style={styles.Username}>
        {postingExplore.profileName}
    </Text>
)

const PostingType = ({postingExplore}) => (
    <Text style={styles.TitleText}> 
        {postingExplore.type} 
    </Text>
)

const PostingBrand = ({postingExplore}) => (
    <Text style={styles.TitleText}>
        {postingExplore.brand}
    </Text>
)


const PostingSize= ({postingExplore}) => (
    <Text style={styles.TitleText}>
        {postingExplore.Size}
    </Text>
)

const PostingDistance= ({postingExplore}) => (
    <Text style={styles.DistanceText}>
        {postingExplore.distance}
    </Text>
)

const PostingGender= ({postingExplore}) => (
    <Text style={styles.GenderDistanceText}>
        {postingExplore.gender}
    </Text>
)


const PostingProfileUrl = ({postingExplore}) => (
    <Image source={require('./shirt.jpg')} style={styles.PostingImage} />
)


const styles = StyleSheet.create({
    Container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 60,
        marginLeft: 10,
        width: 170,
        height: 265,
    },

    UserInfo: {
        paddingLeft: 10,
        paddingRight: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },

    Username: {
        fontWeight: 'bold',
        paddingTop: 4,
        paddingLeft: 5,
        fontSize: 13
    },

    PostingContainer:{
        backgroundColor: '#D9D9D9',
        flexDirection: 'column',
        borderRadius: 20,
        // marginBottom: 15,
        // marginLeft: 10,
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
    },

    GenderDistance:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        width: 150
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
    },
    

    Trash: {
        position: 'absolute',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 10,
        
    }

})


export default PostingExplore;