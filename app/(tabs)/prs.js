import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

const Prs = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg/barbell3.jpg")}
        resizeMode="cover"
        style={styles.imageBg}
      ></ImageBackground>
    </View>
  );
};

export default Prs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
  },
});
