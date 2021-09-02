import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  const click = () => {
    console.log("Clicked");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={click} numberOfLines={1}>
        Welcome to React Native expo
      </Text>
      <TouchableNativeFeedback onPress={()=>console.log("tapped")}>
        <View style={{width: 200, height: 70, backgroundColor: 'dodgerblue'}}>

        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
