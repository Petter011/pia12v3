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

export default function Readmore({navigation, route}) {

    const [readnumber, setReadnumber] = useState(0)

  return (
    <View>
      <Text>READ MORE {route.params.fruit}</Text>

      <Text>{readnumber}</Text>

      <Button title='Plus' onPress={() => {
        setReadnumber(readnumber + 1)
      }} />

      <Button title="Gå till tredje vyn" onPress={() => {
        navigation.navigate('Tredjevyn')
      }} />
    </View>
  );
}


