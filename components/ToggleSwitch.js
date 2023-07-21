import { View, Text, StyleSheet, Pressable } from "react-native";

const ToggleSwitch = ({ active, setActive }) => {
  return (
    <View style={styles.switchContainer}>
      <Pressable
        style={[styles.toggleBtn, { backgroundColor: active === "bmi" ? "#232323" : "gray" }]}
        onPress={() => setActive("bmi")}
      >
        <Text style={styles.btnText}>BMI</Text>
      </Pressable>
      <Pressable
        style={[styles.toggleBtn, { backgroundColor: active === "kcal" ? "#232323" : "gray" }]}
        onPress={() => setActive("kcal")}
      >
        <Text style={styles.btnText}>KCAL</Text>
      </Pressable>
    </View>
  );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    backgroundColor: "gray",
    borderRadius: 10,
    marginTop: 20,
  },
  toggleBtn: {
    alignItems: "center",
    width: 120,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
