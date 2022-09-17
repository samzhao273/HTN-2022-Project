import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Add = () => {
    return(
        <TouchableHighlight onPress = {() => {alert('this is going to the add screen')}}>
            <View>
                <Ionicons name = "md-add-circle" size={40} color='#55B3AE'></Ionicons>
            </View>
        </TouchableHighlight>

    )
}

const styles = StyleSheet.create({
    
})

export default Add;