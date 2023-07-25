import { View, Text, StyleSheet } from "react-native";

const CalorieResult = ({ weightLoss, bmr, tdee }) => {
  return (
    <View style={[styles.resultContainer, styles.shadowEffect]}>
      <View style={styles.resultView}>
        <Text style={styles.resultLabel}>BMR:</Text>
        <Text style={styles.result}>{bmr || "--"}</Text>
      </View>
      <View style={styles.resultView}>
        <Text style={styles.resultLabel}>
          Weight {weightLoss === "weight loss" ? "Loss" : "Gain"}:
        </Text>
        {weightLoss === "weight loss" ? (
          <Text style={styles.result}>{tdee ? (tdee - 500).toFixed(0) : "--"}</Text>
        ) : (
          <Text style={styles.result}>{tdee ? (tdee + 500).toFixed(0) : "--"}</Text>
        )}
      </View>
      <View style={styles.resultView}>
        <Text style={styles.resultLabel}>Maintain Weight:</Text>
        <Text style={styles.result}>{tdee ? tdee.toFixed(0) : "--"}</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: "white",
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
