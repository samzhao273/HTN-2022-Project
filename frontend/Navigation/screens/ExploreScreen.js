import * as Reach from 'react';
import{View, Text} from 'react-native';


export default function ExploreScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}>
      <Text onPress={() => navigation.navigate('Profile')}
      >Explore Screen</Text>
    </View>

    );
}