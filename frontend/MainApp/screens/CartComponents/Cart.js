import { View, Text, StyleSheet } from "react-native";

const Cart = ({ type, brand, size, gender, tags, caption }) => {
  return (
    <View>
      <Text style={styles.Line}>_____________________________________</Text>
      <Text>{'\n'}</Text>
      <Text style={styles.Text}>{type}</Text>
      <Text>{'\n'}</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  Text: {
    color: "#55B3AE",
    fontSize: 30,
  },
  Line: {
    color: "#55B3AE",
  },
});
