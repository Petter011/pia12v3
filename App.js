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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ThirdView from './ThirdView'
import { useState } from "react";
import Box from "./Box";
import Readmore from "./Readmore";
import Welcome from "./Welcome";

export default function App() {

  const Stack = createNativeStackNavigator();


  return (
<NavigationContainer>
  <Stack.Navigator>

    <Stack.Screen name='Starten' component={Welcome} />
    <Stack.Screen name='Readmore' component={Readmore} />
    <Stack.Screen name='Tredjevyn' component={ThirdView}/>

  </Stack.Navigator>
</NavigationContainer>
   
  );
}


