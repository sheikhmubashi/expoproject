import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  const click = () => {console.log("Clicked")}
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={click} numberOfLines={1}>Welcome to React Native expo</Text>
      <Image style={styles.image} source={require("./assets/icon.png")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 10,
    height: 10
  }
});
