import * as Reach from "react";
import { View, Text } from "react-native";
import Map from "./MapComponents/Map";

export default function MapScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text onPress={() => navigation.navigate("Profile")}>MapScreen</Text>
      <Map />
    </View>
  );
}
