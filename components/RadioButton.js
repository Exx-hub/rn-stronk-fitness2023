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
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  selected: {
    height: 6,
    width: 6,
    borderRadius: 6,
    backgroundColor: "black",
  },
  label: {
    marginLeft: 5,
  },
});
