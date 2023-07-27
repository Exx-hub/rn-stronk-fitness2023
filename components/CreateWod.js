import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const CreateWod = () => {
  const [isAdding, setIsAdding] = useState(true);
  const [input, setInput] = useState("");
  return (
    <View style={styles.createItemContainer}>
      <View style={styles.createItem}>
        {isAdding ? (
          <>
            <TextInput
              style={styles.createInput}
              placeholder="Add New WOD"
              value={input}
              onChangeText={(text) => setInput(text)}
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
            <Text style={styles.createLabel}>Create WOD</Text>
          </Pressable>
        )}
      </View>
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
    minHeight: 42,
  },
  createLabel: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 3,
  },
  createInput: {
    backgroundColor: "white",
    flex: 1,
    marginRight: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
});
