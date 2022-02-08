import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Information = ({ item }) => {
  return (
    <View style={styles.containerMere}>
      {/* <Text>heloo je suis moi mm</Text> */}
      {/* Image container View */}

      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={{ fontSize: 23, color: "blue" }}>{item.name}</Text>
        <Text style={{ color: "gray" }}>{item.genre}</Text>
        <Text style={{ color: "gray" }}>{item.age}</Text>
        <View style={styles.icon}>
          <EvilIcons name="location" size={24} color="black" />
          <Text style={{ color: "gray" }}>{item.adress}</Text>
        </View>
      </View>
    </View>
  );
};
export default Information;
const styles = StyleSheet.create({
  containerMere: {
    flex: 1,
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    // marginRight: 130,
    // flex: 2,
    alignItems: "center",
    justifyContent: "center",
    // alignItems: "flex-start",
  },
  image: {
    height: 160,
    width: 160,
    marginVertical: 1,
    borderRadius: 15,
    marginLeft: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "red",
  },
  textView: {
    backgroundColor: "white",
    // marginRight: 30,
    // alignItems: "center",
    // justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    shadowColor: "red",

    width: 150,
    height: 120,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  icon: {
    flexDirection: "row",
    paddingVertical: 10,
    marginRight: 3,
  },
});
