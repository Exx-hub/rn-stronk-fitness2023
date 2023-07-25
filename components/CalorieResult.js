import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CalorieResult = () => {
  return (
    <View style={[styles.resultContainer, styles.shadowEffect]}>
      <View style={styles.resultView}>
        <Text style={styles.resultLabel}>BMR:</Text>
        <Text style={styles.result}>1615</Text>
      </View>
      <View style={styles.horizontalBar} />
      <View style={styles.resultView}>
        <Text style={styles.resultLabel}>Maintain Weight:</Text>
        <Text style={styles.result}>2503</Text>
      </View>
    </View>
  );
};

export default CalorieResult;

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: "white",
    zIndex: -1,
  },
  shadowEffect: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
  },
  resultView: {
    flexDirection: "row",
  },
  horizontalBar: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  resultLabel: {
    backgroundColor: "#212529",
    color: "white",
    flex: 1,
    padding: 5,
    textAlign: "center",
    fontWeight: "700",
  },
  result: {
    backgroundColor: "#6C757D",
    color: "white",
    flex: 1,
    padding: 5,
    textAlign: "center",
    fontWeight: "700",
  },
  category: {
    backgroundColor: "white",
    color: "#FFC126",
    flex: 1,
    padding: 5,
    textAlign: "center",
    fontWeight: "700",
  },
});
