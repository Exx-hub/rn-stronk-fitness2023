import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const WodItem = () => {
  return (
    <View style={styles.wodItemContainer}>
      <View style={styles.wodItem}>
        <Text style={styles.itemLabel}>WOD Title</Text>
        <AntDesign name="down" size={18} color="black" />
      </View>
    </View>
  );
};

export default WodItem;

const styles = StyleSheet.create({
  wodItemContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 3,
  },
  itemLabel: {
    color: "black",
    fontWeight: "bold",
  },
  wodItem: {
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
