import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image ,TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Edit = (navigation) => {
    return(
        <TouchableHighlight onPress={() => navigation.navigate('ProfileScreen')}>
            <View>
                <Ionicons name = "pencil" size={40} color='#55B3AE'></Ionicons>
            </View>
        </TouchableHighlight>

    )
}

const styles = StyleSheet.create({
    
})

export default Edit;
