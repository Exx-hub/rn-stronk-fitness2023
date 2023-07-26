import { View, Text, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const CreateWod = () => {
  return (
    <View style={styles.createItemContainer}>
      <Pressable style={styles.createItem}>
        <Feather name="plus-circle" size={16} color="white" />
        <Text style={styles.createLabel}>Create WOD</Text>
      </Pressable>
    </View>
  );
};

export default CreateWod;

const styles = StyleSheet.create({
  createItemContainer: {
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  createItem: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  createLabel: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 8,
  },
});
