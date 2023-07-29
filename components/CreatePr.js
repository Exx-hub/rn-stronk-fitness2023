import { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

const CreatePr = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [prInput, setPrInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  return (
    <View style={styles.prItemContainer}>
      <View style={styles.prItem}>
        {isAdding ? (
          <>
            <TextInput
              style={styles.prInput}
              placeholder="PR Name"
              value={prInput}
              onChangeText={(text) => setPrInput(text)}
            />
            <TextInput
              style={styles.prInput}
              placeholder="Weight"
              value={weightInput}
              onChangeText={(text) => setWeightInput(text)}
            />
            <Ionicons
              name="checkmark-circle"
              size={22}
              color="white"
              style={{ marginRight: 3, marginLeft: 3 }}
            />
            <Ionicons
              name="close-circle"
              size={22}
              color="white"
              onPress={() => setIsAdding(false)}
            />
          </>
        ) : (
          <Pressable
            onPress={() => setIsAdding(true)}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Feather name="plus-circle" size={16} color="white" />
            <Text style={styles.prLabel}>Enter a PR</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default CreatePr;

const styles = StyleSheet.create({
  prItemContainer: {
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  prItem: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 42,
  },
  prLabel: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
    fontSize: 16,
  },
  prInput: {
    backgroundColor: "white",
    flex: 1,
    marginRight: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
});
