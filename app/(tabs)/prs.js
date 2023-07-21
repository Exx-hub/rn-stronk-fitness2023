import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Prs = () => {
  return (
    <View style={styles.container}>
      <Text>Prs</Text>
    </View>
  );
};

export default Prs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
