import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Box(props) {
  const [siffran, setSiffran] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{props.name.lastname}</Text>

      <Text>{siffran}</Text>

      <Button
        title="klicka"
        onPress={() => {
          setSiffran(siffran + 1);
        }}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    marginTop: 5,
  },
});
