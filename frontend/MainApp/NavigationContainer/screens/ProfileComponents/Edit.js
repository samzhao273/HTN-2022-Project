import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Edit = () => {
    return(
        <TouchableHighlight onPress = {() => {alert('this is going to the edit screen')}}>
            <View>
                <Ionicons name = "pencil"></Ionicons>
            </View>



        </TouchableHighlight>

    )
}

export default Edit;
