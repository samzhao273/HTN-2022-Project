import { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from "react-native";
import Cart from "./CartComponents/Cart";

export default function CartScreen({ navigation }) {

  [clothes, setClothes] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image 
          source={require("./ProfileComponents/man.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Your carts</Text>
      </View>
      <View>
        {/* {clothes.map(() => {

        })} */}
        <Cart type="shirt"/>
        <Cart type="hoodie"/>
        <Cart type="shorts"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    marginTop: -90,
    width: 40,
    resizeMode: "contain",
    left: 110,
    position: "absolute",
    top: -336,
  },
  title: {
    position:'absolute',
    color: "#000000",
    top: -305,
    left: -150,
    fontSize: 30,
  },
  top: {
    direction: "rtl",
    paddingTop: -10,
    justifyContent: "space-evenly",
    position:'absolute',
  },
});
