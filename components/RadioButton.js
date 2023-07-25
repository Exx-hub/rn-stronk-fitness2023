import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = ({ options, selectedOption, onSelect }) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.optionContainer}
          onPress={() => onSelect(option)}
        >
          <View style={styles.radioCircle}>
            {option === selectedOption && <View style={styles.selected} />}
          </View>
          <Text style={styles.label}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  radioCircle: {
    height: 12,
    width: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  selected: {
    height: 4,
    width: 4,
    borderRadius: 6,
    backgroundColor: "black",
  },
  label: {
    marginLeft: 5,
    fontSize: 13,
  },
});
