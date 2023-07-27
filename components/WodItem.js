import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

import Collapsible from "react-native-collapsible";
import { useState } from "react";

const WodItem = ({ title, exercises }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [input, setInput] = useState("");
  return (
    <View style={styles.wodItemContainer}>
      <Pressable style={styles.wodItem} onPress={() => setIsCollapsed(!isCollapsed)}>
        <Text style={styles.itemLabel}>{title}</Text>
        <AntDesign name="down" size={18} color="black" />
      </Pressable>
      <Collapsible collapsed={isCollapsed} align="bottom" duration={400}>
        <View style={styles.collapsibleContainer}>
          <View>
            {exercises?.map((item, i) => (
              <Text key={`${item}${i}`} style={{ fontFamily: "Marker" }}>
                - {item}
              </Text>
            ))}
          </View>

          <View style={styles.bottomIcons}>
            {isAdding ? (
              <>
                <TextInput
                  style={styles.addInput}
                  placeholder="Add new exercise"
                  value={input}
                  onChangeText={(text) => setInput(text)}
                />
                <View style={{ flexDirection: "row" }}>
                  <Ionicons name="checkmark-circle" size={22} color="black" />
                  <Ionicons
                    name="close-circle"
                    size={22}
                    color="black"
                    onPress={() => setIsAdding(false)}
                    style={{ marginLeft: 5 }}
                  />
                </View>
              </>
            ) : (
              <>
                <Ionicons name="add" size={20} color="black" onPress={() => setIsAdding(true)} />
                <Feather name="trash-2" size={20} color="black" />
              </>
            )}
          </View>
        </View>
      </Collapsible>
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
    fontSize: 15,
    fontFamily: "Marker",
  },
  wodItem: {
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  collapsibleContainer: {
    backgroundColor: "white",
    minHeight: 30,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  bottomIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
    marginTop: 5,
  },
  addInput: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 3,
    fontSize: 12,
    paddingHorizontal: 5,
    flex: 1,
    marginRight: 20,
  },
});
