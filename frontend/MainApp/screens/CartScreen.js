import * as Reach from 'react';
import{View, Text} from 'react-native';


export default function CartScreen({navigation}) {
    return (
      
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}>
      <Text onPress={() => navigation.navigate('Profile')}
      >CartScreen</Text>
    </View>

    );
}