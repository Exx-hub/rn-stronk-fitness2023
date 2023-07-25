import { View, Text, StyleSheet } from "react-native";

const BmiResult = () => {
  return (
    <View style={[styles.resultContainer, styles.shadowEffect]}>
      <Text style={styles.resultLabel}>BMI:</Text>
      <Text style={styles.result}>26.22</Text>
      <Text style={styles.category}>Overweight</Text>
    </View>
  );
};

export default BmiResult;

const styles = StyleSheet.create({
  resultContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    zIndex: -1,
  },
  shadowEffect: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
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
