import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
export default function App() {
  console.log(useDeviceOrientation())
  const {landscape} = useDeviceOrientation();
  const click = () => {
    console.log("Clicked");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "100%", height: landscape ? '100%' : "30%" }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
