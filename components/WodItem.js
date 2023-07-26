import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign, Octicons, Feather } from "@expo/vector-icons";

import Collapsible from "react-native-collapsible";
import { useState } from "react";

const WodItem = ({ title }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <View style={styles.wodItemContainer}>
      <Pressable style={styles.wodItem} onPress={() => setIsCollapsed(!isCollapsed)}>
        <Text style={styles.itemLabel}>{title}</Text>
        <AntDesign name="down" size={18} color="black" />
      </Pressable>
      <Collapsible collapsed={isCollapsed} align="bottom" duration={400}>
        <View style={styles.collapsibleContainer}>
          <Text>- Bench Press</Text>
          <Text>- Squats</Text>
          <Text>- Deadlifts</Text>
          <Text>- Crunches</Text>

          <View style={styles.deleteIcon}>
            <Feather name="trash-2" size={20} color="black" />
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
  deleteIcon: {
    alignSelf: "flex-end",
    marginBottom: 3,
  },
});
