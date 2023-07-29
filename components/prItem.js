import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

const PrItem = ({ title, weight, isFavorite }) => {
  return (
    <View style={styles.prItemContainer}>
      <View style={styles.prLeft}>
        {isFavorite ? (
          <AntDesign name="star" size={20} color="#B45309" />
        ) : (
          <AntDesign name="staro" size={20} color="#B45309" />
        )}

        <Text style={styles.prTitle}>{title}</Text>
        <Text style={styles.prWeight}>{weight}</Text>
      </View>

      <Feather name="trash-2" size={18} color="#292929" />
    </View>
  );
};

export default PrItem;

const styles = StyleSheet.create({
  prItemContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  prLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  prTitle: {
    color: "black",
    marginLeft: 7,
    fontWeight: "bold",
  },
  prWeight: {
    color: "black",
    marginLeft: 7,
    fontWeight: "200",
    color: "black",
  },
});
