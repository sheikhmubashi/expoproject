import React from "react";
import { View, Text } from "react-native";

const App = () => {
  return (
    <View style={{ flexDirection: "row", flex: 1, backgroundColor: "#fff" }}>
      <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "yellow" }} />
    </View>
  );
};

export default App;
