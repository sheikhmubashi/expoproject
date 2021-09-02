import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
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
      <TouchableWithoutFeedback onPress={()=>console.log("tapped")}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
          fadeDuration={5000}
        />
      </TouchableWithoutFeedback>
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
