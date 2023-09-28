import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useState } from "react";
import Box from "./Box";
import Readmore from "./Readmore";

export default function Welcome({ navigation }) {
  const [addname, onAddname] = useState("");

  const [people, setPeople] = useState([{ key: "", lastname: "" }]);

  const [showReadmore, setShowReadmore] = useState(true);

  fruit = ["Banan", "", "äpple"];

  function letsAddPerson() {
    if (addname != "") {
      const newlist = people.concat({ key: addname, lastname: addname });
      setPeople(newlist);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Läsa mera"
        onPress={() => {
          navigation.navigate("Readmore", { fruit });
        }}
      />

      <TouchableOpacity
        onPress={() => {
          onAddname("i");
        }}
      >
        <Text>TEST Touch</Text>
      </TouchableOpacity>
      <Text style={styles.list}>Lista</Text>

      <TextInput
        style={styles.input}
        placeholder="skriv här"
        onChangeText={onAddname}
        value={addname}
      />

      <Button
        title="Lägg till"
        onPress={() => {
          letsAddPerson();
        }}
      />

      <FlatList data={people} renderItem={({ item }) => 
      <TouchableOpacity onPress={() => {
            navigation.navigate('Readmore', fruit)
      }}>
        
         <Box name={item} />
         </TouchableOpacity>
    }
    />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
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
  button: {
    flex: 3,
  },
  input: {
    width: 250,
    height: 50,
    margin: 20,
    backgroundColor: "white",
  },
});
