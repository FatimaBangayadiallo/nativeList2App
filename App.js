import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, TextInput } from "react-native";
import Information from "./components/information.js";

export default function App() {
  const infos = [
    {
      image: require("./assets/cc.jpg"),
      name: "pastel",
      genre: "cat",
      age: "2 years old",
      adress: "83 banana street",
    },
    {
      image: require("./assets/d.jpg"),
      name: "milou",
      genre: "catou",
      age: "1 years old",
      adress: "66 aple street",
    },
    {
      image: require("./assets/o.jpg"),
      name: "sun",
      genre: "soleil",
      age: " 4 years old",
      adress: " 88 sky street",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <TextInput placeholder="search" style={styles.input} />
      </View>
      <FlatList
        data={infos}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        // renderItem={({ item }) => <Contact item={item} />}
        renderItem={({ item }) => <Information item={item} />}
        // renderItem={({ item }) => {
        //   return <Text>{item}</Text>;
        // }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 2,
    marginTop: 30,
    width: 280,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: "gray",
  },
});
