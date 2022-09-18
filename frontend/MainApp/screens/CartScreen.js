import { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import Posting from "./GeneralComponents/Posting";
import { Postings } from "./ProfileComponents/DummyPostData/Postings";
import PostingExplore from "./GeneralComponents/PostingExplore";
import { PostingsExplore } from "./ProfileComponents/DummyPostData/PostingsExplore";
export default function CartScreen({ navigation }) {
  [clothes, setClothes] = useState([]);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
          <Image
            source={require("./ProfileComponents/man.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Your cart</Text>
        </View>
      <ScrollView>
        <View style={styles.posting}>
            {PostingsExplore.map((postingExplore,index) => (
              <PostingExplore postingExplore = {postingExplore} key = {index} />
            ))}
        </View>
      </ScrollView>
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
    position: "absolute",
    color: "#000000",
    top: -305,
    left: -150,
    fontSize: 30,
  },
  top: {
    direction: "rtl",
    paddingTop: -10,
    justifyContent: "space-evenly",
    position: "absolute",
  },
  posting: {
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    top: 40,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 100
  },
});
