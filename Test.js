import { View, Text, StyleSheet } from "react-native";








export default function Test(){

    return(
    <View style={styles.container}>
        <Text style={styles.text}>boll</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center",
      width: 100,
      height: 100,
    },
    text:{
        fontSize: 30,
    }
  });
