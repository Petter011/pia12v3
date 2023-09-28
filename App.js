import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useState } from "react";
import Box from "./Box";
import Test from "./Test";

export default function App() {

  const [addname, onAddname] = useState("");

  const [people, setPeople] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.list}>Lista</Text>

      <TextInput onChange={onAddname} value={addname} />

      <Button
        title="Lägg till"
        onPress={() => {
          var oldpeople = people;
          oldpeople.push({key: addname, lastname: addname});
          setPeople(oldpeople);
        }}
      />

      <Box/>

      <Test/>

      <FlatList
        data={people}
        renderItem={({ item }) => {}}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    color: "red",
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  list: {
    alignContent: "center",
    fontSize: 35,
    color: "blue",
  },
});
